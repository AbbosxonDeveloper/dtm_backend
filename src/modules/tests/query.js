const GET = `
    
`

const GETBYFAN = `
    select * from tests
    where fan_id = $1
`

export default {
    GET,
    GETBYFAN
}