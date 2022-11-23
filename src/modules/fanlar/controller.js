import model from './model.js'
import jwt from '../../lib/jwt.js'

export default class {
    async GET(req, res) {
        let fanlar = await model.get()
        res.send(fanlar)
            // console.log(req.query);
    }

    async SINGLE(req, res) {
        try {
            let fan = await model.single(req.params)
            res.send(fan)
        } catch (error) {
            console.log(error);
        }
    }

    FINDFAC = async(req, res) => {
        try {
            console.log(req.query);
            let fac = await model.findfac(req.query)
            res.send(fac)
        } catch (error) {
            console.log(error);
        }
    }





    // async TEST(req, res) {
    //     try {
    //         let body = req.body
    //         let array = []
    //         let num = 0
    //         let temp = [
    //             { age: 10 },
    //             { age: 15 },
    //             { age: 12 },
    //             { age: 14 }
    //         ]
    //         let testarr = []
    //         for (let val of body) {
    //             testarr.push(val)
    //         }
    //         console.log(testarr);

    //         for (let val in body) {

    //             for (var el in temp) {
    //                 if (val == el) {
    //                     let ebody = body[val]
    //                     let etemp = temp[el]
    //                     if (ebody.age == etemp.age) {
    //                         num += etemp.age
    //                     }
    //                     console.log(val, el);
    //                 }
    //             }
    //         }
    //         array.push(num)
    //         res.send(array)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}