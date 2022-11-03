import { Link } from "react-router-dom";
import Sesshchibi from "../../public/sessh-chibi.png"

export function Header() {
    return(
        <div className="flex-1">
            <div className="flex justify-start ">
            <img src={Sesshchibi} alt="gustavo-sessh-logo" className="w-12 h-12 ml-1 sm:ml-10 lg:ml-10 mt-5 "/>
            <h1 className="text-sm sm:text-base lg:text-lg text-white-200 font-bold mt-8 mr-8">Gustavo "Sessh" Alves</h1>
                <ul className="flex-1 flex justify-end mr-10 mt-10 sm:ml-20">
                    <li className="pr-5 sm:pr-10 lg:pr-10">
                        <Link to="/" className="text-white-200 font-thin">Home</Link>
                    </li>
                    <li className="pr-5 sm:pr-10 lg:pr-10">
                        <Link to="/about" className="text-white-200 font-thin">About</Link>
                    </li>
                    <li className="pr-5 sm:pr-10 lg:pr-10">
                        <Link to="/Projects" className="text-white-200 font-thin">Projects</Link>
                    </li>
                    <li className="pr-5 sm:pr-10 lg:pr-10">
                        <Link to="/Contact" className="text-white-200 font-thin">Contact</Link>
                    </li>
                    <li className="pr-5 sm:pr-10 lg:pr-10">
                        <Link to="/Setup" className="text-white-200 font-thin">Setup</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}