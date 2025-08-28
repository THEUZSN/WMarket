import Logo2 from "../assets/logo2.png"
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";

function Header(){
    return(
    <header className="main-header">
        <div className="header-line">
            <img src={Logo2} alt="logo" />
            <input type="text" placeholder="Buscar produtos..." />
            <Link to="/cadastrar" className="registerButton"><FaPlusCircle /></Link>
            <Link to="/"><IoMdHome className="homeButton"/></Link>
            </div>
        <div className="header-line">
            <ul className="nav-cat">
                <li>PlayStation</li>
                <li>Xbox</li>
                <li>Nintendo</li>
                <li>Atari</li>
                <li>Mesa</li>
                <li>Portáteis</li>
                <li>Controles</li>
            </ul>
        </div>

    </header>
    )
}
export default Header;