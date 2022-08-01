import { Header } from "../components/header";
import Gitlogo from "../../public/Octocat.png"
import InLogo from "../../public/inlogo.png"
import MailLogo from "../../public/mail.png"

export function Contact() {
    return(
        <div>
            <Header />
            <div className="flex flex-1 flex-col items-center mt-24">
            <span className="flex bg-gradient-to-r from-blue-100 to-grey-100 rounded-3xl ml-92 mb-2 w-28 h-10 items-center justify-center"> 
            <h1 className="text-white-200 text-2xl font-bold">
              Contact
            </h1>
          </span>
            <span className="flex border-t-2 mt-20 mb-28 w-96 justify-center border-orange-100 " />

                <div className="flex">
                    <a href="https://github.com/areyousessh">
                        <img src={Gitlogo} alt="github octocat logo" className="w-16 h-16" />
                    </a>
                        <span className="text-white-200 mt-5 font-semibold">/areyousessh</span>
                </div>
                <div className="flex">
                    <a href="https://www.linkedin.com/in/gustavo-alves-7a57a7122/">
                        <img src={InLogo} alt="Linkeding logo" className="w-16 h-12 mt-12 ml-24" />
                    </a>
                        <span className="text-white-200 mt-16 font-semibold">/gustavo-alves-7a57a7122</span>
                </div>
                <div className="flex">
                    <a href="mailto:gusalves@sessh.tech">
                        <img src={MailLogo} alt="Mail logo" className="w-20 h-14 mt-12 ml-24 " />
                    </a>
                        <span className="text-white-200 mt-16 mr-10 font-semibold">gusalves@sessh.tech</span>
                </div>
            </div>
        </div>
    )
}
