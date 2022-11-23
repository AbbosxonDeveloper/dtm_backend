import model from './model.js'
import jwt from '../../lib/jwt.js'

export default class {

    GETFAC = async(req, res) => {
        try {
            console.log(req.query);
            let fac = await model.findfac(req.params, req.query)
            res.send(fac)
        } catch (error) {
            console.log(error);
        }
    }

}