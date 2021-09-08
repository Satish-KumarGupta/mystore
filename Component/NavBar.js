import Link from "next/link"
const NavBar =()=> {
    return (
        <nav>
        <div className="nav-wrapper blue">
          <Link href="/"><a className="brand-logo">Logo</a></Link>
          <ul id="nav-mobile" className="right ">
            <li className="Acttive"><Link  href="/login"><a>login</a></Link></li>
            <li><Link  href="/signup"><a>signup</a></Link></li>
            <li><Link  href="/product"><a>product</a></Link></li>
          </ul>
        </div>
      </nav>
      )
}

export default NavBar
