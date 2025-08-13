import Logo2 from "../assets/logo2.png"

function Header(){
    return(
    <header className="main-header">
        <div className="header-line">
            <img src={Logo2} alt="logo" />
            <input type="text" placeholder="Buscar produtos..." />
            </div>
        <div className="header-line">
            <ul className="nav-cat">
                <li>Walisson</li>
                <li>Wendel</li>
                <li>Wallace</li>
                <li>Willou</li>
                <li>Wendy</li>
                <li>Wendler</li>
                <li>Withney</li>
                <li>Wenvel</li>
                <li>Wheny</li>
                <li>Waller</li>
            </ul>
        </div>

    </header>
    )
}
export default Header;