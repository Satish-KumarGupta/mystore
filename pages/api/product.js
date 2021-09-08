/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export
import initDB from "../../Helper/initDb"

initDB()
export default (_req ,res) => {
    res.json({message:"hello world"})
  }
  