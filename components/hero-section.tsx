import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Globe2,
  ShieldCheck,
} from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background px-4 pt-28 sm:px-6 lg:px-8"
    >
      {/* Modern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.22),transparent_38%)]" />
      <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-5 py-2 text-sm text-muted-foreground shadow-xl backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-destructive" />
          <span className="tracking-wide">
            TED Denizli Model United Nations
          </span>
        </div>

        {/* Main Title */}
        <h1 className="max-w-6xl text-balance text-6xl font-black tracking-[-0.06em] text-foreground sm:text-7xl md:text-8xl lg:text-[9.5rem]">
          TEDDMUN
          <span className="ml-4 bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-clip-text text-transparent">
            II
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl md:text-2xl">
          A modern Model United Nations experience built for young diplomats,
          future leaders, and students ready to shape global conversations.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#applications">
            <Button
              size="lg"
              className="group h-14 rounded-full bg-destructive px-9 text-base font-semibold text-white shadow-2xl shadow-destructive/25 transition-all duration-300 hover:-translate-y-1 hover:bg-destructive/90"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </a>

          <a href="#about">
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-border bg-background/70 px-9 text-base font-semibold text-foreground shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background"
            >
              Explore TEDDMUN
            </Button>
          </a>
        </div>

        {/* Modern Info Cards */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="group rounded-[2rem] border border-border bg-background/70 p-6 text-left shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-destructive/40">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive ring-1 ring-destructive/20 transition-all duration-300 group-hover:bg-destructive group-hover:text-white">
              <CalendarDays className="h-5 w-5" />
            </div>

            <p className="text-sm font-medium text-muted-foreground">
              Date
            </p>
            <h3 className="mt-1 text-xl font-black text-foreground">
              Coming Soon
            </h3>
          </div>

          <div className="group rounded-[2rem] border border-border bg-background/70 p-6 text-left shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-destructive/40">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive ring-1 ring-destructive/20 transition-all duration-300 group-hover:bg-destructive group-hover:text-white">
              <MapPin className="h-5 w-5" />
            </div>

            <p className="text-sm font-medium text-muted-foreground">
              Venue
            </p>
            <h3 className="mt-1 text-xl font-black text-foreground">
              TED Denizli College
            </h3>
          </div>

          <div className="group rounded-[2rem] border border-border bg-background/70 p-6 text-left shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-destructive/40">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive ring-1 ring-destructive/20 transition-all duration-300 group-hover:bg-destructive group-hover:text-white">
              <Globe2 className="h-5 w-5" />
            </div>

            <p className="text-sm font-medium text-muted-foreground">
              Focus
            </p>
            <h3 className="mt-1 text-xl font-black text-foreground">
              Diplomacy & Leadership
            </h3>
          </div>
        </div>

        {/* Bottom Mini Text */}
        <div className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-destructive" />
          <span>Student-led conference experience</span>
        </div>
      </div>
    </section>
  )
}
