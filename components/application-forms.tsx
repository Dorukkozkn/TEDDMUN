"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, User } from "lucide-react"

export function ApplicationForms() {
  const [activeForm, setActiveForm] = useState<"delegation" | "individual" | null>(null)

  const formTypes = [
    {
      id: "delegation" as const,
      title: "Apply as Delegation",
      description: "Apply as a group representing an organization",
      icon: Users,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfYJQ7Bwx3qEkvcl3R7dI3afNY3VGwJgY0OuvEVXi6BYw349A/viewform?usp=publish-editor",
    },
    {
      id: "individual" as const,
      title: "Apply as Individual Delegate",
      description: "Apply as a single delegate to join existing delegations",
      icon: User,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSex5bzJ-bgeCymTz6xwK87vFG5DLH0Qn5Yzmv8cS6yJm1tmNQ/viewform?usp=header",
    },
  ]

  const renderForm = () => {
    if (!activeForm) return null

    const commonFields = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Enter your first name" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Enter your last name" />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Enter your phone number" />
        </div>
        <div>
          <Label htmlFor="school">School/Institution</Label>
          <Input id="school" placeholder="Enter your school or institution" />
        </div>
        <div>
          <Label htmlFor="grade">Grade/Year</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9">9th Grade</SelectItem>
              <SelectItem value="10">10th Grade</SelectItem>
              <SelectItem value="11">11th Grade</SelectItem>
              <SelectItem value="12">12th Grade</SelectItem>
              <SelectItem value="university">University</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </>
    )

    switch (activeForm) {
      case "delegation":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Delegation Application</h3>
            {commonFields}
            <div>
              <Label htmlFor="delegationSize">Number of Delegates</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select delegation size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-5">2-5 delegates</SelectItem>
                  <SelectItem value="6-10">6-10 delegates</SelectItem>
                  <SelectItem value="11-15">11-15 delegates</SelectItem>
                  <SelectItem value="16+">16+ delegates</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="preferredCountry">Preferred Country/Organization</Label>
              <Input id="preferredCountry" placeholder="Enter preferred representation" />
            </div>
            <div>
              <Label htmlFor="experience">MUN Experience</Label>
              <Textarea id="experience" placeholder="Describe your team's MUN experience" />
            </div>
            <div>
              <Label htmlFor="motivation">Motivation Letter</Label>
              <Textarea id="motivation" placeholder="Why do you want to participate as a delegation?" />
            </div>
          </div>
        )

      case "individual":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Individual Delegate Application</h3>
            {commonFields}
            <div>
              <Label htmlFor="experience">Previous MUN Experience</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-1 conferences)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-5 conferences)</SelectItem>
                  <SelectItem value="advanced">Advanced (6+ conferences)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="preferredCommittee">Preferred Committee</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred committee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ga">General Assembly</SelectItem>
                  <SelectItem value="sc">Security Council</SelectItem>
                  <SelectItem value="ecosoc">ECOSOC</SelectItem>
                  <SelectItem value="who">WHO</SelectItem>
                  <SelectItem value="unhcr">UNHCR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="languages">Languages Spoken</Label>
              <Input id="languages" placeholder="e.g., English, Turkish, French" />
            </div>
            <div>
              <Label htmlFor="motivation">Motivation Letter</Label>
              <Textarea id="motivation" placeholder="Why do you want to participate in MUN?" />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="applications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-5 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-black dark:text-white">
            Application Forms
          </h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto text-pretty">
            Choose your application type and join our TEDD MUN community
          </p>
        </div>

        {!activeForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formTypes.map((type) => {
              const Icon = type.icon
              return (
                <Card key={type.id} className="cursor-pointer hover:shadow-lg transition-shadow border-accent/20">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-chart-5 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription className="text-pretty">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href={type.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full hover:bg-accent/90 text-accent-foreground bg-chart-5">Apply Now</Button>
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Application Form</CardTitle>
                    <CardDescription>Fill out all required fields</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setActiveForm(null)}>
                    Back to Options
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {renderForm()}
                  <div className="flex gap-4 pt-6">
                    <Button type="submit" className="flex-1 hover:bg-accent/90 text-accent-foreground bg-chart-5">
                      Submit Application
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setActiveForm(null)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
