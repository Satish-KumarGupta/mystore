import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import {parseCookies} from 'nookies'
const NavBar =()=> {
    
    const router= useRouter()
    const {token}=parseCookies()
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
            {
            user &&
              <li className={isActive('/create')}><Link  href="/create"><a>create</a></Link></li>
            }
           
           { user ?
            <>
            <li className={isActive('/account')}><Link  href="/account"><a>account</a></Link></li>
            <li><button className="btn">Logout</button></li>
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
