
const HeaderBtn = ({setOpen}) => {
    const openMenu = () => {
        setOpen(true)
    }
    return (
        <div className="header-btn" onClick={openMenu} >
            <span>MENU</span>
            <button className="btn-menu">
                <span></span>
            </button>
        </div>
    )
}
export default HeaderBtn