
import "./GameSection.css"
import Resident2 from "../assets/re2.jpg"
import GowR from "../assets/gow_ragnarook.webp"
import FC25 from "../assets/fifa.webp"
import Crash from "../assets/crash.webp"

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
            <img className="gameimg" src={GowR} alt="God of war Ragnarok"/>
            <p>God of War Ragnarok</p>
        </div>
        
        <div className="game">
            <img className="gameimg" src={Crash} alt="Crash Bandicoot 3"/>
            <p>Crash Bandicoot 3</p>
        </div>

    </div>

    )
}
export default GameSection;