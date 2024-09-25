import { Typewriter } from "react-simple-typewriter"
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className=" h-screen w-screen bg-dark-blue">
        <div className="pt-16 w-full flex flex-col items-center justify-items-center gap-10">
          <div className="text-white raleway text-5xl text-center">
            Welcome to the intelligent sports era with Bidwise!
          </div>
          <div className="raleway text-center text-white text-2xl">Find the perfect fit for your squad based on </div> <span className="raleway text-xl text-blue-400">
          <Typewriter
              words={['Stats', 'Performance', 'Synergy']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={(loopCount) => console.log(`Looped ${loopCount} times`)}
            /></span> 
            
            <button className="btn-glow text-black text-xl bg-white bg-opacity- backdrop-blur-md border border-white border-opacity-30 px-10 py-3 rounded-full mt-10 flex items-center gap-3">
  Get Started <FaArrowRight />
</button>
            
        </div>
        
        
    </div>
  )
}

export default LandingPage
