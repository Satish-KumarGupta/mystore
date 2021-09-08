import {useRouter} from 'next/router'
import baseUrl from '../../Helper/baseUrl'
const Product = ({product}) =>{
    const router = useRouter()
    if(router.isFallback){
        return (
            <h3> loading.. </h3>
        )
    }
    return(
        <div className="container certer-align">
            <h3> {product.name} </h3>
            <img src={product.mediaUrl} style={{width: "30%"}}/>
            <h5>Rs{product.price}</h5>
            <input
             type="number"
             style={{width:"400px",margin:"10px"}}
             min="1"
//             value={quantity}
             placeholder="Qunatity"
            /> 

            <button className="btn waves-effect waves-light #1565c0 blue darken-3"
             onClick={()=>AddToCart()}
             >Add
              <i className="material-icons right">add</i>
            </button>
            <p className="left-align">
                {product.description}
            </p>
        </div>
    )
}

// export async function getServerSideProps({params:{id}}){
//    const res = await fetch(`http://localhost:3000/api/product/${id}`)
//    const data = await res.json()
//    return{
//         props: {product:data}
//     }
// }

export async function getStaticProps({params:{id}}){
    const res = await fetch(`${baseUrl}/api/product/${id}`)
    const data = await res.json()
    return{
     props: {product:data}
    }
 }
 
 export async function getStaticPaths() {
    return {
      paths: [
        { params: { id:"613885623c3c4c08cd8ed3fb"} } 
      ],
      fallback: true
    };
  }
export default Product