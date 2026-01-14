import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, Award, BookOpen } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Develop international diplomacy skills by understanding world problems",
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description: "Strengthen teamwork and leadership abilities",
    },
    {
      icon: Award,
      title: "Prestigious Conferences",
      description: "Participate in national and international MUN conferences",
    },
    {
      icon: BookOpen,
      title: "Academic Development",
      description: "Advance research, presentation and negotiation skills",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">About TEDDMUN</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            As TEDDMUN, we help our students develop diplomacy, leadership and global awareness
            skills. Through United Nations simulations, we enable young people to produce solutions to world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
