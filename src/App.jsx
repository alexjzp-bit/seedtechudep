import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import AboutSection from './components/AboutSection.jsx'
import RequirementsSection from './components/RequirementsSection.jsx'
import BenefitsSection from './components/BenefitsSection.jsx'
import PrizeSection from './components/PrizeSection.jsx'
import TrainingProcessSection from './components/TrainingProcessSection.jsx'
import TimelineSection from './components/TimelineSection.jsx'
import DemoDaySection from './components/DemoDaySection.jsx'
import SelectionCriteriaSection from './components/SelectionCriteriaSection.jsx'
import FAQSection from './components/FAQSection.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import MobileCTABar from './components/MobileCTABar.jsx'

export default function App() {
  return (
    <>
      <a
        href="#que-es"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-seed-500 focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
        <RequirementsSection />
        <BenefitsSection />
        <PrizeSection />
        <TrainingProcessSection />
        <TimelineSection />
        <DemoDaySection />
        <SelectionCriteriaSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
      <MobileCTABar />
    </>
  )
}
