"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Users, User, GraduationCap } from "lucide-react"

export function ApplicationForms() {
  const [activeForm, setActiveForm] = useState<
    "delegation" | "individual" | "academy" | null
  >(null)

  const formTypes = [
    {
      id: "delegation" as const,
      title: "Apply as Delegation",
      description: "Apply as a group representing an organization",
      icon: Users,
      link: "",
    },
    {
      id: "individual" as const,
      title: "Apply as Individual Delegate",
      description: "Apply as a single delegate to join existing delegations",
      icon: User,
      link: "",
    },
    {
      id: "academy" as const,
      title: "Apply as Academy Member",
      description: "Join our MUN academy and enhance your skills",
      icon: GraduationCap,
      link: "",
    },
  ]

  const renderForm = () => {
    if (!activeForm) return null

    const commonFields = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" />
        </div>

        <div>
          <Label htmlFor="school">School / Institution</Label>
          <Input id="school" />
        </div>

        <div>
          <Label>Grade / Year</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="11">11</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="university">University</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </>
    )

    if (activeForm === "delegation") {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Delegation Application</h3>
          {commonFields}
          <Textarea placeholder="Delegation experience" />
        </div>
      )
    }

    if (activeForm === "individual") {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Individual Application</h3>
          {commonFields}
          <Textarea placeholder="Motivation letter" />
        </div>
      )
    }

    if (activeForm === "academy") {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Academy Application</h3>
          {commonFields}
          <Textarea placeholder="Why do you want to join?" />
        </div>
      )
    }
  }

  return (
    <section
      id="applications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Application Forms</h2>
          <p className="mt-4 text-lg">
            Choose your application type
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formTypes.map((type) => {
            const Icon = type.icon
            return (
              <Card key={type.id}>
                <CardHeader className="text-center">
                  <Icon className="mx-auto h-8 w-8 mb-4" />
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={type.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Applications Are Closed</Button>
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
