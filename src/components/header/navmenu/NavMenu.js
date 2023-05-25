import {NavLink} from 'react-router-dom'

const NavMenu = ({setOpen}) => {
   
    return(
        <nav className='navmenu'>
            <div className="nav-title-main">
                <div className="nav-title">Title</div>
                <span className="nav-close" onClick={()=>setOpen(false)} ></span>
            </div>
            

            <ul className="nav-items">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
               
            </ul>
        </nav>
    )
}
export default NavMenu