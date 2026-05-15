import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Globe2,
  Sparkles,
} from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background px-4 pt-28 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-muted-foreground shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-destructive" />
            <span className="tracking-wide">TED Denizli Model United Nations</span>
          </div>

          <h1 className="text-balance text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Where young
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              diplomats rise.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg md:text-xl lg:mx-0 mx-auto">
            TEDDMUN brings students together to debate global issues, represent
            nations, write resolutions, and experience the spirit of diplomacy
            in a professional conference atmosphere.
          </p>

          {/* Info Pills */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-foreground shadow-lg backdrop-blur-md">
              <CalendarDays className="h-4 w-4 text-destructive" />
              <span>Coming Soon</span>
            </div>

            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-foreground shadow-lg backdrop-blur-md">
              <MapPin className="h-4 w-4 text-destructive" />
              <span>TED Denizli College</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#applications">
              <Button
                size="lg"
                className="group h-14 rounded-full bg-destructive px-8 text-base font-semibold text-white shadow-2xl shadow-destructive/30 transition-all duration-300 hover:-translate-y-1 hover:bg-destructive/90"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>

            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/10 bg-white/[0.04] px-8 text-base font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Explore TEDDMUN
              </Button>
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-destructive/30 blur-[90px]" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-destructive/20 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-md">
            <img
              src="/images/ted-denizli-school.jpg"
              alt="TED Denizli School Campus"
              className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[430px] lg:h-[520px]"
            />

            <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Floating Card 1 */}
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-black/35 p-5 text-white shadow-2xl backdrop-blur-md">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-destructive text-white">
                  <Globe2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-white/70">Conference Theme</p>
                  <p className="font-bold">Diplomacy, Leadership, Future</p>
                </div>
              </div>

              <p className="text-sm leading-6 text-white/75">
                A student-led MUN experience designed to inspire confident,
                informed, and responsible young leaders.
              </p>
            </div>
          </div>

          {/* Small floating label */}
          <div className="absolute -right-2 top-8 hidden rounded-2xl border border-white/10 bg-background/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              TEDDMUN
            </p>
            <p className="mt-1 text-2xl font-black text-destructive">2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
