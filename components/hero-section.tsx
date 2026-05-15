import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Users,
  Landmark,
} from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black px-4 pt-28 text-white sm:px-6 lg:px-8"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/ted-denizli-school.jpg"
          alt="TED Denizli School Campus"
          className="h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Red Accent Glow */}
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-red-600/25 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/20 blur-[140px]" />

      {/* Big Background Text */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 select-none text-[11rem] font-black leading-none tracking-tighter text-white/[0.035] lg:block">
        TEDDMUN
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Left Content */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-white/80 shadow-2xl backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-red-500" />
            <span className="tracking-wide">
              TED Denizli Model United Nations
            </span>
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-white/50">
            Diplomacy • Leadership • Future
          </p>

          <h1 className="max-w-5xl text-balance text-6xl font-black tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
            TEDDMUN
            <span className="ml-4 bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              II
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-white/75 sm:text-xl md:text-2xl">
            A student-led Model United Nations experience where young minds
            debate global challenges, represent nations, and discover the power
            of diplomacy.
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <a href="#applications">
              <Button
                size="lg"
                className="group h-14 rounded-full bg-red-600 px-9 text-base font-semibold text-white shadow-2xl shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>

            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/20 bg-white/10 px-9 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Explore Conference
              </Button>
            </a>
          </div>
        </div>

        {/* Right Info Panel */}
        <div className="relative">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">
                Conference Info
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
                TEDDMUN II
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Date
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Coming Soon
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Venue
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    TED Denizli College
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <Landmark className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Format
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Model United Nations Conference
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Participants
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Delegates, chairs, academy members and guests
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Small corner label */}
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-red-600 px-5 py-4 text-white shadow-2xl shadow-red-600/30 sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Edition
            </p>
            <p className="mt-1 text-3xl font-black">II</p>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
