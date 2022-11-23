import { ForbiddenError, InternalServerError } from "../../lib/error.js";
import { fetch, fetchAll } from "../../lib/postgres.js";
import query from "./query.js";

const get = async() => {
    try {
        let tests = await fetchAll(query.GET)
        return tests
    } catch (error) {
        throw new InternalServerError(500, 'server error')
    }
}

const getbyfan = async({ fan_id }) => {
    try {
        let tests = await fetchAll(query.GETBYFAN, [fan_id])
        return tests
    } catch (error) {
        throw new ForbiddenError(403, 'fan not found')
    }
}


export default {
    get,
    getbyfan
}