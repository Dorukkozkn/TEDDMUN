"use client"

import { useState } from "react"

export function SecretariatLetter() {
  const [activeTab, setActiveTab] = useState<"secretariat" | "directoria">("secretariat")

  return (
    <section className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-destructive/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-destructive/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-destructive">
            TEDDMUN 2026
          </p>

          <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Letters from the
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              Executive Team
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            A message from the teams who have worked to shape TEDDMUN into a
            meaningful, professional, and unforgettable conference experience.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => setActiveTab("secretariat")}
            className={`rounded-full px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-300 ${
              activeTab === "secretariat"
                ? "bg-destructive text-white shadow-destructive/30"
                : "border border-white/10 bg-white/[0.04] text-muted-foreground backdrop-blur-md hover:bg-white/[0.08] hover:text-foreground"
            }`}
          >
            Secretariat Letter
          </button>

          <button
            onClick={() => setActiveTab("directoria")}
            className={`rounded-full px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-300 ${
              activeTab === "directoria"
                ? "bg-destructive text-white shadow-destructive/30"
                : "border border-white/10 bg-white/[0.04] text-muted-foreground backdrop-blur-md hover:bg-white/[0.08] hover:text-foreground"
            }`}
          >
            Directoria Letter
          </button>
        </div>

        {/* Letter Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md sm:p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-transparent" />
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-destructive/20 blur-[90px]" />

          <div className="relative z-10">
            {activeTab === "secretariat" ? (
              <>
                <p className="mb-7 text-lg font-bold text-foreground">
                  Dear Delegates,
                </p>

                <div className="space-y-5 text-pretty text-base leading-8 text-muted-foreground md:text-lg">
                  <p>
                    It is our greatest pleasure to welcome you to TEDDMUN 2026,
                    a conference built upon the values of diplomacy, academic
                    excellence, leadership, and mutual respect.
                  </p>

                  <p>
                    As the Secretariat, our aim is to create an environment
                    where every delegate feels encouraged to speak, think
                    critically, negotiate with purpose, and represent their
                    assigned nations with confidence. TEDDMUN is not only a
                    simulation of the United Nations; it is also an opportunity
                    for young people to understand the world from different
                    perspectives and to discover the power of dialogue.
                  </p>

                  <p>
                    Throughout the conference, you will discuss global issues,
                    defend policies, build alliances, draft resolutions, and
                    experience the responsibilities of diplomacy. We hope that
                    each session helps you improve your academic skills while
                    also allowing you to form meaningful connections with
                    fellow participants.
                  </p>

                  <p>
                    We sincerely hope TEDDMUN 2026 becomes a memorable
                    experience for every delegate, chair, and member of our
                    team. We look forward to seeing your ideas, your passion,
                    and your dedication throughout the conference.
                  </p>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="mb-7 font-medium text-foreground">
                    Sincerely,
                  </p>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-lg font-bold text-foreground">
                        Doruk Özkan
                      </p>
                      <p className="mt-1 font-medium text-destructive">
                        Co Secretary-General
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-lg font-bold text-foreground">
                        Deniz Akça
                      </p>
                      <p className="mt-1 font-medium text-destructive">
                        Co Secretary-General
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-lg font-bold text-foreground">
                        Celal Canlı
                      </p>
                      <p className="mt-1 font-medium text-destructive">
                        Deputy Secretary-General
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="mb-7 text-lg font-bold text-foreground">
                  Distinguished Participants,
                </p>

                <div className="space-y-5 text-pretty text-base leading-8 text-muted-foreground md:text-lg">
                  <p>
                    On behalf of the Directoria, it is a great honor to welcome
                    you to TEDDMUN 2026. Behind every successful conference,
                    there is a team working with dedication, discipline, and
                    attention to every detail, and our goal has been to prepare
                    an experience that reflects the quality and spirit of
                    TEDDMUN.
                  </p>

                  <p>
                    From logistics to communication, from planning to execution,
                    every step has been shaped with one purpose: to make sure
                    that all participants feel welcomed, guided, and fully ready
                    to enjoy the conference. We believe that a strong
                    organization is what allows academic discussions to take
                    place smoothly and meaningfully.
                  </p>

                  <p>
                    We hope that TEDDMUN 2026 will be remembered not only for
                    its committees and debates, but also for its atmosphere,
                    friendships, and the sense of community it creates. We are
                    excited to welcome you and to share this experience with all
                    of you.
                  </p>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-lg font-bold text-foreground">
                      Arda Sevil
                    </p>
                    <p className="mt-1 font-medium text-destructive">
                      Director-General
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
