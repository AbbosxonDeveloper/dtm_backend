import { Router } from 'express'
import checkToken from '../../middleware/checkToken.js'
import Controller from './controller.js'


const router = Router()
const fanlar = new Controller()

router.get('/fanlar', checkToken, fanlar.GET)
router.get('/fanlar/:fan_id', checkToken, fanlar.SINGLE)
router.get('/fanlar/fac', checkToken, fanlar.FINDFAC)

export default router