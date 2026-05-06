import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import { getFeaturedProjects } from '@/lib/home'

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects()

  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedProjects projects={featuredProjects} />
    </main>
  )
}