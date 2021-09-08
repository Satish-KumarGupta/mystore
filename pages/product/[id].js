import {useRouter} from 'next/router'
import baseUrl from '../../Helper/baseUrl'
import { useRef,useEffect,useState} from 'react'
const Product = ({product}) =>{
    const router = useRouter()
    const modalRef= useRef(null)

    useEffect(()=>{
        M.Modal.init(modalRef.current)
      },[])

    if(router.isFallback){
        return (
            <h3> loading.. </h3>
        )
    }

    const getModal = ()=>{
        return(
         <div id="modal1" className="modal" ref={modalRef}>
         <div className="modal-content">
           <h4>{product.name}</h4>
           <p>Are you sure you want to delete this</p>
         </div>
         <div className="modal-footer">
         <button className="btn waves-effect waves-light #1565c0 blue darken-3">
           cancel
         </button>
         <button className="btn waves-effect waves-light #c62828 red darken-3"
         onClick={()=>deleteProduct()}
        >
           Yes
         </button>
         </div>
       </div>
               
        )
      }

      const deleteProduct = async ()=>{
        const res =  await fetch(`${baseUrl}/api/product/${product._id}`,{
           method:"DELETE"
         })
        await res.json()
        router.push('/')
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

            <button data-target="modal1" className="btn modal-trigger waves-effect waves-light #c62828 red darken-3">Delete
              <i className="material-icons left">delete</i>
            </button>
            {getModal()}
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