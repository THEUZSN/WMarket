import Logo2 from "../assets/logo2.png"
import { Link } from "react-router-dom";

function Header(){
    return(
    <header className="main-header">
        <div className="header-line">
            <img src={Logo2} alt="logo" />
            <input type="text" placeholder="Buscar produtos..." />
            <Link to="/cadastrar">Cadastrar Produtos</Link>
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