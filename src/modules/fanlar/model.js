import { ForbiddenError, InternalServerError } from "../../lib/error.js";
import { fetch, fetchAll } from "../../lib/postgres.js";
import { FINDFAC, GET, SINGLE } from "./query.js";

const get = async() => {
    try {
        let fanlar = await fetchAll(GET)
        return fanlar
    } catch (error) {
        throw new InternalServerError(500, 'server error')
    }
}

const single = async({ fan_id }) => {
    try {
        let fanlar = await fetch(SINGLE, [fan_id])
        return fanlar
    } catch (error) {
        throw new InternalServerError(500, 'server error')
    }
}

const findfac = async({ block1, block2 }) => {
    try {
        let fac = await fetchAll(FINDFAC, [block1, block2])
        return fac
    } catch (error) {
        throw new ForbiddenError(403, 'faculty not found')
    }
}


export default {
    get,
    single,
    findfac
}