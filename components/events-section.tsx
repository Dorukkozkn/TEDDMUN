import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "TEDMUN 2025 Konferansı",
      date: "15-17 Mart 2025",
      location: "TED Denizli Koleji",
      time: "09:00 - 17:00",
      description: "Yıllık geleneksel MUN konferansımız. Ulusal ve uluslararası delegelerin katılımıyla.",
      status: "Yaklaşan",
      image: "/formal-conference-hall-with-students-in-business-a.jpg",
    },
    {
      title: "MUN Eğitim Semineri",
      date: "28 Şubat 2025",
      location: "Okul Konferans Salonu",
      time: "14:00 - 16:00",
      description: "Yeni üyeler için temel MUN prosedürleri ve diplomasi eğitimi.",
      status: "Kayıt Açık",
      image: "/classroom-with-students-learning-about-diplomacy.jpg",
    },
    {
      title: "İstanbul MUN 2025",
      date: "5-7 Nisan 2025",
      location: "İstanbul",
      time: "Tam Gün",
      description: "Türkiye'nin en büyük MUN konferanslarından birine katılım.",
      status: "Planlanan",
      image: "/istanbul-skyline-with-conference-building.jpg",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Yaklaşan":
        return "bg-accent text-accent-foreground"
      case "Kayıt Açık":
        return "bg-green-500 text-white"
      case "Planlanan":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    null
  )
}
