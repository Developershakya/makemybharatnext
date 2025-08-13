
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import PopularDestinations from "../components/PopularDestinations"
import TravelOffers from "../components/TravelPackages"
import Footer from "../components/Footer"
import AlertOverlay from "@/components/AlertOverlay"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50" style={{ backgroundImage: "url('/img/bg/map.png')" }} >
      <Header />
      <HeroSection />
      <AlertOverlay />
      <PopularDestinations />
      <TravelOffers />
      <Footer />
    </div>
  )
}

