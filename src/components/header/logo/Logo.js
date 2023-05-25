import logoImg from "../../../assets/img/logo/logo.png"
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="header-logo">
            
            <Link to='/'><img src={logoImg} alt="logo" /></Link>
                

        </div>
    )
}
export default Logo