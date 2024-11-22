import About from "@/components/About"
import Features from "@/components/Features"
import Grid from "@/components/Grid"
import Vision from "@/components/Vision"
import Why from "@/components/Why"
import Accordion from "@/components/Faq"
import Hero from "@/components/Hero"

const page = () => {
  return (
    <div>
      <Hero/>
      <Grid/>
      <Features/>
      <About/>
      <Why/>
      <Vision/>
      <Accordion/>
    </div>
  )
}

export default page