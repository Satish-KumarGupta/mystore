
import Link from 'next/link'
const  Home=(props) =>{
  return (
    <div>
      <h1>Hello next js</h1>
      <h2>{props.message}</h2>
      <Link href="/text"><a>go to text</a></Link>
    </div>
  )
}
export async function getStaticProps(context){
  const res = await fetch('http://localhost:3000/api/text')
  const data= await res.json()
  console.log(data)
  return{
    props:{message:data.message},
  }
}

export default Home;