import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { ActivitiesSection } from "@/components/activities-section"
import { JoinSection } from "@/components/join-section"
import { SecretariatLetter } from "@/components/secretariat-letter"
import { ApplicationForms } from "@/components/application-forms"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ActivitiesSection />
      <JoinSection />
      <SecretariatLetter />
      <ApplicationForms />
      <Footer />
    </main>
  )
}
