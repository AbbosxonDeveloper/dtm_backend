import { ForbiddenError, InternalServerError } from "../../lib/error.js";
import { fetch, fetchAll } from "../../lib/postgres.js";
import { FINDFAC, GETFAC, } from "./query.js";


const findfac = async({ fac_id = 0 }, { block1, block2 }) => {
    try {
        console.log(block1, block2);
        let fac = await fetchAll(GETFAC, [fac_id, block1, block2])
        return fac
    } catch (error) {
        throw new ForbiddenError(403, 'faculty not found')
    }
}


export default {
    findfac
}