import { Link } from "react-router-dom";
import Sesshchibi from "../../public/sessh-chibi.png"

export function Header() {
    return(
        <div className="flex-1">
            <div className="flex justify-start ">
            <img src={Sesshchibi} alt="gustavo-sessh-logo" className="w-12 h-12 ml-10 mt-5 "/>
            <h1 className="text-2xl text-white-200 font-bold mt-8">Gustavo "Sessh" Alves</h1>
                <ul className="flex-1 flex justify-end mr-10 mt-10">
                    <li className="pr-10">
                        <Link to="/" className="text-white-200 font-thin">Home</Link>
                    </li>
                    <li className="pr-10">
                        <Link to="/about" className="text-white-200 font-thin">About</Link>
                    </li>
                    <li className="pr-10">
                        <Link to="/Projects" className="text-white-200 font-thin">Projects</Link>
                    </li>
                    <li className="pr-10">
                        <Link to="/Contact" className="text-white-200 font-thin">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}