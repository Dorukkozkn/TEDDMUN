import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Globe,
  Users,
  Award,
  BookOpen,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Students explore international issues, understand different countries’ policies, and develop a wider view of global affairs.",
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description:
        "TEDDMUN encourages teamwork, public speaking, responsibility, and confident decision-making in a diplomatic environment.",
    },
    {
      icon: Award,
      title: "Prestigious Experience",
      description:
        "Participants experience the atmosphere of professional MUN conferences through committees, debates, and formal procedures.",
    },
    {
      icon: BookOpen,
      title: "Academic Development",
      description:
        "Students improve their research, writing, negotiation, and presentation skills while discussing real-world problems.",
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-destructive/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-destructive/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top label */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-muted-foreground shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-destructive" />
            <span className="tracking-wide">About the Conference</span>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
            More than a conference,
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              a diplomatic experience.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            As TEDDMUN, we aim to create an academic environment where students
            develop diplomacy, leadership, public speaking, and global awareness
            through realistic United Nations simulations.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.95fr]">
          {/* Left big card */}
          <Card className="group relative overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 via-transparent to-transparent opacity-70" />
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-destructive/20 blur-[70px]" />

            <CardHeader className="relative z-10 p-8">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive text-white shadow-xl shadow-destructive/30">
                <Globe className="h-7 w-7" />
              </div>

              <CardTitle className="text-3xl font-black tracking-tight text-foreground">
                TEDDMUN
              </CardTitle>

              <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
                TEDDMUN brings students together to discuss global problems,
                represent countries, write resolutions, and experience the
                culture of diplomacy in a professional conference atmosphere.
              </p>
            </CardHeader>
          </Card>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-destructive/40 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <CardHeader className="relative z-10 p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-destructive/15 text-destructive ring-1 ring-destructive/20 transition-all duration-300 group-hover:bg-destructive group-hover:text-white group-hover:shadow-lg group-hover:shadow-destructive/30">
                      <feature.icon className="h-6 w-6" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-destructive group-hover:opacity-100" />
                  </div>

                  <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 px-7 pb-7 pt-0">
                  <p className="text-pretty text-sm leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
