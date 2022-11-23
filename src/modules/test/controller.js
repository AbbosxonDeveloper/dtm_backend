import model from './model.js'
import jwt from '../../lib/jwt.js'

export default class {

    async GETBYFAN(req, res) {
        try {
            let fan = await model.getbyfan(req.params)
            res.send(fan)
        } catch (error) {
            console.log(error);
        }
    }

    async DOTEST(req, res) {
        try {
            let body = req.body
            let fan = await model.getbyfan(req.params)

            let result = []
            let num = 0
            for (let val in body) {
                for (let test in fan) {
                    if (val == test) {
                        let ebody = body[val]
                        let efan = fan[test]
                        if (ebody.answer == efan.answer) {
                            num += (efan.score)
                        }
                    }
                }
            }

            result.push({ score: Number(num.toFixed(1)) })
            console.log(result);
            console.log(3.1 * 10);
            res.send(result)
        } catch (error) {
            console.log(error);
        }
    }
}