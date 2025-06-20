import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Atom,
  Brain,
  Cpu,
  Rocket,
  Users,
  Award,
  Calendar,
  ArrowRight,
  Microscope,
  Zap,
  Target,
  Star,
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Cpu,
      title: "Microcontroller Workshops",
      description: "Hands-on Arduino and Raspberry Pi programming sessions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI/ML Training",
      description: "Introduction to artificial intelligence and machine learning",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Atom,
      title: "Active Sciences",
      description: "Explore the Science with Fun",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Rocket,
      title: "Robotics Programs",
      description: "Build and program your own robots",
      color: "from-orange-500 to-red-500",
    },
  ]

  const upcomingEvents = [
    {
      title: "Launch Announcement",
      date: "Jan 2025",
      time: "Coming Soon",
      location: "New Delhi",
      spots: "Stay Tuned",
    },
    {
      title: "AI for Beginners",
      date: "Feb 2025",
      time: "To Be Announced",
      location: "Online",
      spots: "Coming Soon",
    },
    {
      title: "Robotics Challenge",
      date: "Mar 2025",
      time: "To Be Announced",
      location: "New Delhi",
      spots: "Coming Soon",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white">
        <div className="absolute inset-0 science-pattern"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">🚀 Launching in 2025</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Making Science & Technology
                  <span className="text-yellow-300"> Engaging</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  Interactive workshops, AI/ML training, and hands-on learning experiences that will prepare students
                  for tomorrow's careers. Coming soon in 2025.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              {/* Coming Soon Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {[
                  { icon: Users, value: "Coming Soon", label: "Student Programs" },
                  { icon: Award, value: "2025", label: "Launch Year" },
                  { icon: Microscope, value: "In Development", label: "DIY Kits" },
                  { icon: Star, value: "Expert Team", label: "Ready" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">🎯 Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    "Hands-on practical learning approach",
                    "Expert instructors with industry experience",
                    "Small batch sizes for personalized attention",
                    "Career-oriented curriculum design",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-yellow-300 rounded-full"></div>
                      <span className="text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Upcoming Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive STEM Learning Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic programming to advanced AI concepts, we're developing a complete range of educational services
              designed to inspire and educate the next generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    Coming in 2025
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Upcoming Events</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Launch Events</h2>
            <p className="text-xl text-gray-600">Stay tuned for our upcoming workshops and events in 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{event.date}</Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {event.spots}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/events">
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Stay Updated on Our Launch</h2>
            <p className="text-xl text-blue-100">
              Join our mailing list to receive updates about our launch and upcoming programs in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Stay Informed
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Link href="/courses">Browse Future Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
