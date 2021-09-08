
import Link from 'next/link'
// import NavBar from '../Component/NavBar'
const  Home=({products}) =>{
 console.log(products )
  return (
    <div>
      {/* <NavBar /> */}
      <h1>Hello next js</h1>
     
    </div>
  )
}
export async function getStaticProps(){
  const res =  await fetch(`http://localhost:3000/api/products`)
  const data = await res.json()
  return {
    props:{
       products:data
    }
  }
 }
export default Home;