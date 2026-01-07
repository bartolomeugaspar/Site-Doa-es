import Hero from '@/components/home/Hero'
import FeaturedStories from '@/components/home/FeaturedStories'
import HowItWorks from '@/components/home/HowItWorks'
import FeaturedInstitutions from '@/components/home/FeaturedInstitutions'
import ImpactStats from '@/components/home/ImpactStats'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <FeaturedStories />
      <FeaturedInstitutions />
      <HowItWorks />
      <CTA />
    </>
  )
}
