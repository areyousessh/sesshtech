import { Header } from "../components/header"
import { ColoredHalfCircleYellow } from "../components/ColoredHalfCircleYellow"
`import { ColoredHalfCircleGrey } from "../components/ColoredHalfCircleGrey"`

export function Home() {
  
  return(
   <div className="flex flex-1 flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="flex-col flex-1 mt-40">
          <span className="flex bg-gradient-to-r from-blue-100 to-grey-100 rounded-3xl ml-96 w-28 h-10 items-center justify-center"> 
            <h1 className="text-white-200 text-2xl font-bold">
              Hello !!
            </h1>
          </span>


          <span className="flex flex-1">
           <h1 className="text-white-200 mt-10 text-7xl ml-96">
            I'm Sessh
           </h1>
          </span>
          <p className="text-white-200 pt-8 pl-80 text-xl font-thin">
            React / React Native Developer based in São Paulo - Brazil
          </p>
          <div className="flex flex-1 items-center ">
            <div className="flex justify-center items-center mt-16 ml-96 w-36 h-10 bg-gradient-to-r from-orange-200 to-orange-100 border-4 rounded-lg hover:border-orange-200 transition-colors">
              <a className="text-white-200 font-bold" href="#">Download CV</a>
            </div>
            <div className="flex  justify-center items-center mt-16 ml-24 w-36 h-10 bg-gradient-to-r from-grey-200 to-grey-100 hover:border-grey-200 transition-colors border-4 rounded-lg ">
              <a className="text-white-200 font-bold" href="#">Get in Touch</a>
            </div>
          </div>
              
              <div className="bg-grey-100 w-96 h-96 rounded-full mt-28 -z-10">

              </div>
            
          </div> 
              


          <div className="flex flex-1 justify-center">
            <ColoredHalfCircleYellow/>
            <img src="../src/assets/sessh-chibi.png" alt="sessh chibi figure" className="absolute" />
          </div>
        </div>
      </div>
   
  
    
  )
    
  
}


