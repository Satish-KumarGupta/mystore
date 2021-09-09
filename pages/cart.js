import baseUrl from "../Helper/baseUrl"
import { parseCookies } from "nookies"
const cart = () => {
    return (
    <div>
        cart page
    </div>
     )
}

export async function getServerSideProps(ctx){
    const {token} =parseCookies(ctx)
    const res =await fetch(`${baseUrl}/api/cart`,{
        headers:{
            // "Authorization":"bearer"+token   "bearer is optinal"
            "Authorization":token

        }
    })
    const products = await res.json()
    console.log(products)
    return{
        props:{products}
    }
}

export default cart
