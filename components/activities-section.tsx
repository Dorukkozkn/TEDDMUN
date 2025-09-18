import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ActivitiesSection() {
  const activities = [
    {
      title: "Engaging Debates",
      description: "Participants will represent different countries and debate global issues. They will defend their ideas and develop diplomatic skills.",
      image: "/students-sitting-in-circle-discussing-in-modern-cl.jpg",
    },
    {
      title: "Skill Development",
      description: "They will gain MUN-specific skills such as research, public speaking, negotiation, and writing formal reports.",
      image: "/students-researching-with-laptops-and-books-in-lib.jpg",
    },
    {
      title: "Networking Opportunities",
      description: "Participants will meet students from different schools and countries, building connections that can serve as a foundation for future academic or career opportunities.",
      image: "/student-giving-presentation-to-audience-in-modern-.jpg",
    },
    {
      title: "Fun and Interactive Activities ",
      description: "Beyond simulations, social events, games, and cultural exchanges will make the MUN experience more enjoyable.",
      image: "/dancing.jpg",
    },
  ]

  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Awaits You In Teddmun</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Regular activities and training programs that our TEDDMUN members participate in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl text-balance">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-pretty text-base">{activity.description}</CardDescription>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
