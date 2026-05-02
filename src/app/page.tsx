import { Hero } from "@/components/sections/Hero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { PortfolioGrid } from "@/components/sections/PortfolioGrid"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTABanner } from "@/components/sections/CTABanner"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PortfolioGrid />
      <Testimonials />
      <CTABanner />
    </>
  )
}
