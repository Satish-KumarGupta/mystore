
const Product = ({product}) =>{
    return(
        <div>
            <h1> {product.name} </h1>
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
    const res = await fetch(`http://localhost:3000/api/product/${id}`)
    const data = await res.json()
    return{
         props: {product:data}
     }
 }
 
 export async function getStaticPaths() {
    return {
      paths: [
        { params: { id:"613885623c3c4c08cd8ed3fb"} } // See the "paths" section below
      ],
      fallback:  false
    };
  }
export default Product