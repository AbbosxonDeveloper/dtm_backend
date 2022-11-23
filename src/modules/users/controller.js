import model from './model.js'
import jwt from '../../lib/jwt.js'

export default class {
    async GET(req, res) {
        const users = await model.get()
        return res.send(users)
    }

    async ACCOUNT(req, res) {
        try {
            const { token } = req.headers
            const user = jwt.verify(token)

            let account = await model.account(user)
            if (account) {
                res.status(201).json({ status: 201, message: "your account", data: account })
            } else {
                res.status(401).json({ status: 401, message: "wrong token" })
            }

        } catch (error) {
            console.log(error);
        }
    }

    async LOGIN(req, res) {
        try {
            const user = await model.login(req.body)
            console.log(user);
            if (user) {
                res.status(201).json({ status: 201, message: "authorizated", data: user, token: jwt.sign({ user_id: user.user_id }) })
            } else {
                res.status(401).json({ status: 401, message: "wrong full_name or password", token: null })
            }
        } catch (error) {
            console.log(error);
        }
    }

    async SIGNUP(req, res) {
        try {
            let user = await model.signup(req.body)
            if (user) {
                res.status(201).json({ status: 201, message: "register success", data: user, token: jwt.sign({ user_id: user.user_id }) })
            } else {
                res.status(401).json({ status: 401, message: "you must have full_name , password and gmail" })
            }
        } catch (error) {
            console.log(error);
        }
    }

    async TOP(req, res) {
        try {
            let users = await model.top()
            res.send(users)
        } catch (error) {
            console.log(error);
        }
    }
}