import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="text-center">
          <div className="relative">
            <img
              src="/images/ted-denizli-school.jpg"
              alt="TED Denizli School Campus"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
              <div className="text-white text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                  <span className="block text-destructive">TEDDMUN</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-pretty max-w-3xl mx-auto">
                  Join us on a journey of diplomacy, leadership and global awareness
                </p>
                <a href="#applications">
                  <Button size="lg" className="hover:bg-accent/90 text-accent-foreground bg-destructive">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
