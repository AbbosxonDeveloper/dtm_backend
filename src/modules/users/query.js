const GET = `
    select * from users
`

const ACCOUNT = `
    select * from users
    where user_id = $1
`

const LOGIN = `
    select * from users
    where full_name = $1 and password = $2
`

const SIGNUP = `
    insert into users(full_name , password , gmail) values
    ($1 , $2 , $3)
    returning *
`

const TOP = `
    select * from result
`

export {
    GET,
    LOGIN,
    SIGNUP,
    ACCOUNT,
    TOP
}