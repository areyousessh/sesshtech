import { Header } from "../components/header";
import NBLogo from "../../public/nblogo.png"
import GPLogo from "../../public/cover.png"
import JBLogo from "../../public/logojb.png"

export function Projects() {
    return(
        <div className="flex flex-1 flex-col">
            <Header />
                    <div className="flex flex-1 flex-col items-center justify-center">
                    <span className="flex bg-gradient-to-r from-blue-100 to-grey-100 rounded-3xl ml-92 mt-20 w-28 h-10 items-center justify-center"> 
                        <h1 className="text-white-200 text-2xl font-bold">
                            Projects
                        </h1>
                    </span>
                <span className="flex border-t-2 mt-20 w-96 justify-center border-orange-100 " />
                <div>
                    <a href="https://github.com/areyousessh/nbbarbershop" target="blank">
                        <img src={NBLogo} alt="Newboss barbershop logo" className="hover:"/>        
                    </a>
                </div>
                <p className="text-white-200">
                    A Newboss Barbershop é uma barbearia localizada no bairro Santa Mena em Guarulhos da qual sou cliente <br />
                    e fui contratado para criar um aplicativo com a finalidade de realizar o agendamento de horarios dos clientes <br />
                    e notificar os usuarios de futuros eventos que vão acontecer no estabelecimento. <br />
                    <p className="text-white-200">
                        O aplicativo esta sendo criado inteiramente por mim utilizando algumas tecnologias como React Native, Expo (bare workflow) <br />
                        Typescript, Firebase entre outros.
                    </p>
                </p>
                    <span className="flex border-t-2 mt-32 w-96 justify-center border-orange-100 " />

                <div>
                    <a href="https://github.com/areyousessh/gameplay" target="blank">
                        <img src={GPLogo} alt="Newboss barbershop logo" className="w-80 h-44 mt-28"/>        
                    </a>
                </div>
                <p className="text-white-200 mt-20">
                    Gameplay foi um aplicativo móvel criado em um workshop de 5 dias da Rocketseat ministrado pelo dev Rodrigo Gonçalves. <br />
                    Também criado em React Native e usando o Expo Bareworkflow foi um projeto muito legal e de muito aprendizado, aprendi mais <br />
                    sobre estrutura de projeto, hooks, componentizaçãp, context, estilos globais e muito mais. <br />
                </p>

                <span className="flex border-t-2 mt-32 w-96 justify-center border-orange-100 " />

                <div>
                    <a href="https://jbrifas.com" target="blank">
                        <img src={JBLogo} alt="Newboss barbershop logo" className="bg-white-100 mt-28"/>        
                    </a>
                </div>
                <p className="text-white-200 mt-20">
                    O Site JB Rifas foi um projeto mais recente que resolvi criar com 2 sócios que não são devs. É um site <br />
                    de rifas que criamos para tentar gerar renda extra, foi uma experiencia totalmente nova pois era necessário ter <br />
                    baixo custo e ser feito rápido me levando a utilizar wordpress pela primeira vez. <br />
                    Gostei muito de utilizar o wordpress pela facilidade de simplesmente baixar um plugin para realizar coisas que seriam bem complicadas <br />
                    de criar codando, mas achei mega estranho mexer com basicamente 0 de código mesmo para criar as interfaces.
                </p>
                

            </div>
            
        </div>
    )
}