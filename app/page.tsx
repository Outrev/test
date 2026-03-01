import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, MessageSquare, Globe, Star } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-foreground">Outrev</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Success Stories</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-thin text-foreground mb-6 leading-tight text-balance">
            {'Your next customer is calling. Don\'t miss it.'}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {'AI made easy for your mechanic shop - streamlining communication, optimizing visibility, and bringing customers to you, so you can focus on what you do best.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              Get a Free Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-muted-foreground/30 hover:bg-muted bg-transparent">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "2,200+", label: "Shops using Outrev" },
            { value: "98%", label: "Call answer rate" },
            { value: "40%", label: "More bookings" },
            { value: "24/7", label: "AI availability" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin gradient-text mb-4">Tools that handle the office, so you can focus on the bays.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {'Fill your bays, capture every call, and grow your shop—without extra staff. Our AI works behind the scenes so you can focus on what you do best.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              title: "AI Voice Answering",
              description: "Our AI answers calls 24/7, captures customer details, and books appointments for you— so no opportunity is lost when you're busy in the bay or closed for the day."
            },
            {
              icon: Calendar,
              title: "Smart Booking",
              description: "Customers book appointments instantly through your website, phone, or text. Syncs seamlessly with your shop calendar."
            },
            {
              icon: Globe,
              title: "Optimize Website & SEO",
              description: "We optimize your website and Google presence so your shop ranks higher, loads faster, and turns searches into real customers—not just clicks."
            }
          ].map((feature, i) => (
            <Card key={i} className="gradient-bg-blue-slate border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20 md:py-32 bg-secondary/50 -mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-4">Mechanics Who Revved Up Their Business</h2>
            <p className="text-xl text-muted-foreground">{'See how independent mechanics are filling bays, capturing more calls, and growing their business with Outrev.'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Outrev increased our bookings by 45% in the first month. The AI answers calls even when we're swamped, and customers love the instant scheduling.",
                author: "Mike Rodriguez",
                shop: "Rodriguez Auto Repair"
              },
              {
                quote: "We were missing 30% of calls before Outrev. Now we capture every opportunity. The ROI was clear within two weeks.",
                author: "Sarah Chen",
                shop: "Precision Auto Service"
              },
              {
                quote: "The automated follow-ups and reminders brought back customers we hadn't seen in years. It's like having a full-time customer service team.",
                author: "James Walker",
                shop: "Walker's Garage"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="gradient-bg-blue-slate border-none">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-white mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/70">{testimonial.shop}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              {'Start growing your shop with AI today'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {'Get started with Outrev today and start capturing calls, booking jobs, and growing your shop immediately.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-white/90 text-blue-600 font-bold text-lg px-10 py-7">
                Schedule Your Free Demo
              </Button>
              <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-2 border-white text-lg px-10 py-7">
                Call 1-888-221-6878
              </Button>
            </div>
            <p className="text-sm text-white/80 mt-8">{'No credit card required • Setup in under 24 hours'}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">O</span>
                </div>
                <span className="text-lg font-bold text-foreground">Outrev</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {'AI made easy for your mechanic shop'}
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Back to Top</a></li>
                <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Success Stories</a></li>
                <li><a href="#cta" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Free Demo</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:1-888-221-6878" className="text-sm font-medium text-foreground hover:text-primary transition-colors">1-888-221-6878</a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@outrev.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">info@outrev.com</a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a href="https://outrev.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">outrev.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2026 Outrev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
