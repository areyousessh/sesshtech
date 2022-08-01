
import { Header } from "../components/header";

export function About() {
    return(
        <div className="flex flex-1 flex-col">
            <Header />
            <div className="flex flex-1 flex-col justify-center items-center">
            <span className="flex bg-gradient-to-r from-blue-100 to-grey-100 rounded-3xl ml-92 mt-20 w-28 h-10 items-center justify-center"> 
                        <h1 className="text-white-200 text-2xl font-bold">
                            About
                        </h1>
                    </span>
                <span className="flex border-t-2 mt-24 w-96 justify-center border-orange-100" />
                <div className="flex flex-1 mt-20">
                    <img src="../public/sessh-profile.jpeg" alt="gustavo sessh foto perfil" 
                    className="w-32 h-32 rounded-full "/>
                    <p className="text-grey-100 pl-3 leading-7">
                        Gustavo Henrique Alves, 26 years old and front-end / mobile<br />
                        developer for 6 years. Passionate for create, give life to ideas<br />
                        and solving problems. Actually i'm searching for my first job as <br />
                        a web or mobile developer using React / React Native.
                    </p>
                </div>
             </div>
             <div className="bg-grey-100 w-96 h-96 rounded-full mt-72 -z-40">
            </div>
        </div>
    )
}