import { useRouter } from "next/dist/client/router"
import Link from "next/link"
const NavBar =()=> {
    
    const router= useRouter()
    function isActive(route){
        if(route===router.pathname){
            return "active"
        }
        else ""
    }

    return (
        <nav>
        <div className="nav-wrapper blue">
          <Link href="/"><a className="brand-logo">Logo</a></Link>
          <ul id="nav-mobile" className="right ">
            <li className={isActive('/login')}><Link  href="/login"><a>login</a></Link></li>
            <li className={isActive('/signup')}><Link  href="/signup"><a>signup</a></Link></li>
            <li className={isActive('/create')}><Link  href="/create"><a>create</a></Link></li>
          </ul>
        </div>
      </nav>
      )
}

export default NavBar
