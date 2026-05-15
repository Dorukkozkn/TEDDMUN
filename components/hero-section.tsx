import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-background pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/ted-denizli-school.jpg"
          alt="TED Denizli School Campus"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-background" />

        {/* Red Glow */}
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-destructive/30 blur-[130px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-white/90 shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-destructive" />
            <span className="tracking-wide">
              TED Denizli Model United Nations
            </span>
          </div>

          {/* Title */}
          <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Welcome to{" "}
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-2xl">
              TEDDMUN
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-8 text-white/80 sm:text-xl md:text-2xl">
            Join us on a journey of diplomacy, leadership, and global awareness.
            Experience debate, cooperation, and international problem-solving at
            TED Denizli.
          </p>

          {/* Info Cards */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white shadow-xl backdrop-blur-md">
              <CalendarDays className="h-5 w-5 text-destructive" />
              <span className="text-sm font-medium sm:text-base">
                Coming Soon
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white shadow-xl backdrop-blur-md">
              <MapPin className="h-5 w-5 text-destructive" />
              <span className="text-sm font-medium sm:text-base">
                TED Denizli College
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#applications">
              <Button
                size="lg"
                className="group h-14 rounded-full bg-destructive px-8 text-base font-semibold text-white shadow-2xl shadow-destructive/30 transition-all duration-300 hover:scale-105 hover:bg-destructive/90"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>

            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
