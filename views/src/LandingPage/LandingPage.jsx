import Hero from "./Components/Hero/Hero"
import BenefitsSection from './Components/Benefits/BenefitsSection'


const LandingPage = () => {
  return (<>
   <Hero/>
   <div className="w-screen font-semibold text-4xl bg-black">        
        <BenefitsSection/>
    </div>
    </>
  )
}




export default LandingPage
