import { ForbiddenError, InternalServerError } from "../../lib/error.js";
import { fetch, fetchAll } from "../../lib/postgres.js";
import query from "./query.js";

const getbyfan = async({ fan_id }) => {
    try {
        let tests = await fetchAll(query.GETBYFAN, [fan_id])
        return tests
    } catch (error) {
        throw new ForbiddenError(403, 'fan not found')
    }
}

export default {
    getbyfan
}