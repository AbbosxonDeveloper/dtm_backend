import { Router } from 'express'
import checkToken from '../../middleware/checkToken.js'
import Controller from './controller.js'


const router = Router()
const fanlar = new Controller()

router.get('/tests/:fan_id', checkToken, fanlar.GETBYFAN)
router.post('/tests/:fan_id', checkToken, fanlar.DOTEST)

export default router