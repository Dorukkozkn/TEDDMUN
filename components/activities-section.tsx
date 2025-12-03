import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ActivitiesSection() {
  const activities = [
    {
      title: "Weekly Meetings",
      description: "In our club meetings held every Wednesday, we discuss current topics and prepare for conferences.",
    },
    {
      title: "Research Projects",
      description: "We develop solution proposals by conducting in-depth research on global issues.",
    },
    {
      title: "Presentation Training",
      description: "We receive regular training to develop effective speaking and presentation skills.",
    },
    {
      title: "Diplomatic Simulations",
      description: "We develop our diplomacy and negotiation skills by simulating real UN sessions.",
    },
  ]

  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Club Activities</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Regular activities and training programs that our TEDD MUN members participate in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-balance">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty text-base">{activity.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
