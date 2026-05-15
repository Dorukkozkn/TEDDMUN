import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  CalendarDays,
  Search,
  Mic2,
  Landmark,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

export function ActivitiesSection() {
  const activities = [
    {
      icon: CalendarDays,
      title: "Weekly Meetings",
      description:
        "In our weekly meetings, members discuss current global topics, improve their understanding of MUN procedure, and prepare for upcoming conferences.",
    },
    {
      icon: Search,
      title: "Research Projects",
      description:
        "Students conduct detailed research on international issues, analyze country policies, and develop realistic solution proposals.",
    },
    {
      icon: Mic2,
      title: "Presentation Training",
      description:
        "Members strengthen their public speaking, formal expression, and presentation skills through regular practice and feedback sessions.",
    },
    {
      icon: Landmark,
      title: "Diplomatic Simulations",
      description:
        "Through realistic United Nations simulations, students practice debate, negotiation, resolution writing, and diplomatic communication.",
    },
  ]

  return (
    <section
      id="activities"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-destructive/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-muted-foreground shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-destructive" />
            <span className="tracking-wide">What We Do</span>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Our Club
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              Activities
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            Regular activities and training programs that help TEDDMUN members
            improve their academic, diplomatic, and leadership skills.
          </p>
        </div>

        {/* Activities */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-destructive/40 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-destructive/10 blur-[70px] transition-all duration-300 group-hover:bg-destructive/20" />

              <CardHeader className="relative z-10 p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/15 text-destructive ring-1 ring-destructive/20 transition-all duration-300 group-hover:bg-destructive group-hover:text-white group-hover:shadow-lg group-hover:shadow-destructive/30">
                    <activity.icon className="h-6 w-6" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-destructive group-hover:opacity-100" />
                </div>

                <CardTitle className="text-balance text-2xl font-bold tracking-tight text-foreground">
                  {activity.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 px-7 pb-7 pt-0">
                <p className="text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
