import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Users,
  User,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
  Lock,
} from "lucide-react"

export function ApplicationForms() {
  const formTypes = [
    {
      title: "Apply as Individual Delegate",
      description:
        "Apply individually and take part in TEDDMUN as a single delegate.",
      icon: User,
      link: "",
    },
    {
      title: "Apply as Academy Member",
      description:
        "Join our academy program to improve your MUN knowledge and academic skills.",
      icon: GraduationCap,
      link: "",
    },
  ]

  return (
    <section
      id="applications"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-destructive/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-destructive/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-muted-foreground shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-destructive" />
            <span className="tracking-wide">Join TEDDMUN</span>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Application
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              Forms
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            Choose your application type and follow the relevant form once
            applications are officially opened.
          </p>
        </div>

        {/* Application cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {formTypes.map((type, index) => {
            const Icon = type.icon

            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-destructive/40 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-destructive/10 blur-[70px] transition-all duration-300 group-hover:bg-destructive/20" />

                <CardHeader className="relative z-10 p-7 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/15 text-destructive ring-1 ring-destructive/20 transition-all duration-300 group-hover:bg-destructive group-hover:text-white group-hover:shadow-lg group-hover:shadow-destructive/30">
                    <Icon className="h-7 w-7" />
                  </div>

                  <CardTitle className="text-balance text-2xl font-bold tracking-tight text-foreground">
                    {type.title}
                  </CardTitle>

                  <CardDescription className="text-pretty text-sm leading-7 text-muted-foreground">
                    {type.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 p-7 pt-0">
                  <a
                    href={type.link || "#applications"}
                    target={type.link ? "_blank" : undefined}
                    rel={type.link ? "noopener noreferrer" : undefined}
                  >
                    <Button
                      disabled={!type.link}
                      className="group/btn h-12 w-full rounded-full bg-destructive font-semibold text-white shadow-lg shadow-destructive/25 transition-all duration-300 hover:bg-destructive/90 disabled:cursor-not-allowed disabled:opacity-80"
                    >
                      <Lock className="mr-2 h-4 w-4" />
                      Applications Are Closed
                      <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:opacity-100" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
