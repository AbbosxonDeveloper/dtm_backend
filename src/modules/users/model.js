import { fetch, fetchAll } from '../../lib/postgres.js'
import { AuthorizationError, InternalServerError } from '../../lib/error.js'
import sha256 from 'sha256'

import { GET, SIGNUP, ACCOUNT, LOGIN, TOP } from './query.js'


const get = async() => {
    try {
        let users = await fetchAll(GET)
        users = users.filter(user => delete user.password)
        return users
    } catch (error) {
        throw new InternalServerError(500, 'server error')
    }
}

const account = async({ user_id }) => {
    try {
        return await fetch(ACCOUNT, [user_id])
    } catch (error) {
        throw new AuthorizationError(401, 'wrong token')
    }
}

const login = async({ full_name, password }) => {
    try {
        let user = await fetch(LOGIN, [full_name, sha256(password)])
        return user
    } catch (error) {
        console.log(error);
    }
}

const signup = async({ full_name, password, gmail }) => {
    try {
        let user = await fetch(SIGNUP, [full_name, sha256(password), gmail])
        return user
    } catch (error) {
        throw new AuthorizationError(401, 'signup error')
    }
}

const top = async() => {
    try {
        let users = await fetchAll(TOP)
        return users
    } catch (error) {
        throw new AuthorizationError(401, 'signup error')
    }
}

export default {
    get,
    login,
    signup,
    account,
    top
}