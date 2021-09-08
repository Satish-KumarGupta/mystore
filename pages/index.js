
import Link from 'next/link'
// import NavBar from '../Component/NavBar'
const  Home=(props) =>{
  return (
    <div>
      {/* <NavBar /> */}
      <h1>Hello next js</h1>
      <h2>{props.message}</h2>
      <Link href="/product"><a>go to text</a></Link>

    </div>
  )
}

export default Home;