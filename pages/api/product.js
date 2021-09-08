/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export
import initDB from "../../Helper/initDb"
import Product from '../../models/Product'

initDB()

export default (req ,res) => {
  Product.find().then(produts=>{
    res.status(200).json(produts)
  }) 

  }
