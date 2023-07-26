import Footer from "@/components/footer";
import LandingContent from "@/components/landing-contents";
import LandingHero from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="min-h-[100vh]">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <Footer />
    </div>
  )
}

export default LandingPage