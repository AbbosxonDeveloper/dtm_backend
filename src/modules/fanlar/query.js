const GET = `
    select * from fanlar
`

const SINGLE = `
    select * from fanlar
    where fan_id = $1
`

const FINDFAC = `
    select * from faculty
    where block1 = $1 and block2 = $2
`



export {
    GET,
    SINGLE,
    FINDFAC
}