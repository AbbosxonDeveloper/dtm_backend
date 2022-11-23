import { Router } from 'express'
import checkToken from '../../middleware/checkToken.js'
import Controller from './controller.js'


const router = Router()
const faculty = new Controller()


router.get('/faculties/:fac_id', checkToken, faculty.GETFAC)

export default router