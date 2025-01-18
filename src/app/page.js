import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import InfoSection from '@/components/InfoSection'
import SolutionsSection from '@/components/SolutionsSection'
import ReviewsSection from '@/components/ReviewsSection'
import ProjectsSection from '@/components/ProjectsSection'
import IncentivesSection from '@/components/IncentivesSection'
import BlogsSection from '@/components/BlogsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InfoSection />
      <SolutionsSection />
      <ReviewsSection />
      <ProjectsSection />
      <div className="yellow-divider"></div>
      <IncentivesSection />
      <BlogsSection />
      <Footer />
    </main>
  )
}
