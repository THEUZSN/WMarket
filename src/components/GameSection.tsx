
import "./GameSection.css"
import Resident2 from "../assets/re2.jpg"
import FC25 from "../assets/fifa.webp"
function GameSection(){
    return(
    <div className="games">
        <div className="game">
            <img className="gameimg" src={Resident2} alt="Resident Evel 2"/>
            <p>Resident Evel 2</p>
        </div>
        <div className="game">
            <img className="gameimg" src={FC25} alt="FC 25"/>
            <p>FC 25</p>
        </div>
        <div className="game">
            <img className="gameimg" src={Resident2} alt="Resident Evel 2"/>
            <p>Resident Evel 2</p>
        </div>
        
        <div className="game">
            <img className="gameimg" src={Resident2} alt="Resident Evel 2"/>
            <p>Resident Evel 2</p>
        </div>
        <div className="game">
            <img className="gameimg" src={Resident2} alt="Resident Evel 2"/>
            <p>Resident Evel 2</p>
        </div>
        <div className="game">
            <img className="gameimg" src={Resident2} alt="Resident Evel 2"/>
            <p>Resident Evel 2</p>
        </div>

    </div>

    )
}
export default GameSection;