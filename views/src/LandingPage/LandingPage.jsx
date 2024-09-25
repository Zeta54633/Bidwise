import Hero from "./Components/Hero"
import BenefitsSection from "./components/BenefitsSection";


const LandingPage = () => {
  return (<>
   <Hero/>
   <div className="font-semibold text-4xl bg-black">
        {/* <Part1/> */}
        <BenefitsSection/>
    </div></>
  )
}




export default LandingPage
