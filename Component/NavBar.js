import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'
const NavBar =()=> {
    
    const router= useRouter()
    const {token}=parseCookies()
    // const cookieuser = parseCookies()
    // const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""
  
    let user= false
    if(token){
      user=true
    } 
    else{
      user=false
    }
    function isActive(route){
        if(route===router.pathname){
            return "active"
        }
        else " "
    }

    return (
        <nav>
        <div className="nav-wrapper blue">
          <Link href="/"><a className="brand-logo">Logo</a></Link>
          <ul id="nav-mobile" className="right ">
          <li className={isActive('/cart')}><Link href="/cart"><a>cart</a></Link></li>
            {
            user.role=='admin' && user.role == 'root' &&
              <li className={isActive('/create')}><Link  href="/create"><a>create</a></Link></li>
            }
           
           { user ?
            <>
            <li className={isActive('/account')}><Link  href="/account"><a>account</a></Link></li>
            <li><button className="btn red" onClick={()=>{
              cookie.remove('token')
              cookie.remove('user')
              router.push('/login')
            }} >Logout</button></li>
            </>
           :
           <>
            <li className={isActive('/login')}><Link  href="/login"><a>login</a></Link></li>
            <li className={isActive('/signup')}><Link  href="/signup"><a>signup</a></Link></li>
            {/* <li className={isActive('/create')}><Link  href="/create"><a>create</a></Link></li> */}
           </>
           }
          </ul>
        </div>
      </nav>
      )
}

export default NavBar