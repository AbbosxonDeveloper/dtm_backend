import { Router } from 'express'
import checkToken from '../../middleware/checkToken.js'
import Controller from './controller.js'


const router = Router()
const users = new Controller()

router.get('/users', users.GET)
router.get('/users/account', checkToken, users.ACCOUNT)
router.post('/users/login', users.LOGIN)
router.post('/users/signup', users.SIGNUP)
router.get('/users/top', checkToken, users.TOP)

export default router