import Logo from "./logo/Logo"
import HeaderBtn from "./headerBtn/HeaderBtn"
import NavMenu from "./navmenu/NavMenu"


const Header = ({setOpen, open}) => {
   
    return(
        <header className={`header ${open ? 'opened' : ''}`}>
            <Logo />
            <HeaderBtn setOpen={setOpen}/>
            <NavMenu setOpen={setOpen}/>
        </header>
    )
}
export default Header