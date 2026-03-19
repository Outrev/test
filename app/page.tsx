'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, MessageSquare, Globe, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { DemoSignupModal } from "@/components/demo-signup-modal"

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b border-border backdrop-blur transition-all duration-300 ${isScrolled ? 'py-2 bg-background/50' : 'py-4 bg-background/95'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/outrev-logo.png" alt="Outrev" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {!isScrolled && (
              <>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
                <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Success Stories</a>
              </>
            )}
            <Button size={isScrolled ? "sm" : "sm"} onClick={() => setDemoModalOpen(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {isScrolled ? 'Book a Free Demo' : 'Free Demo'}
            </Button>
            {isScrolled && (
              <Button size="sm" variant="outline" className="text-sm text-muted-foreground hover:text-foreground transition-colors border-border">
                See How It Works
              </Button>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{backgroundImage: "url('/mechanic-shop-hero.jpg')"}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold text-foreground mb-6 leading-tight text-balance">
            Your next customer is calling. <span className="gradient-text">Don't miss it.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {'AI made easy for your mechanic shop - streamlining communication, optimizing visibility, and bringing customers to you, so you can focus on what you do best.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setDemoModalOpen(true)} className="bg-gradient-to-r from-[#1100bb] to-[#1a00ff] hover:from-[#0d007a] hover:to-[#140099] text-white font-bold text-lg px-10 py-7 shadow-lg">
              Get a Free Demo
            </Button>
            <Button size="lg" className="bg-white text-[#1100bb] hover:bg-gray-50 font-bold text-lg px-10 py-7 shadow-lg">
              See How It Works
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">2,200+</div>
            <div className="text-lg md:text-xl font-semibold text-white">Shops using Outrev</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">98%</div>
            <div className="text-lg md:text-xl font-semibold text-white">Call answer rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">40%</div>
            <div className="text-lg md:text-xl font-semibold text-white">More bookings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-lg md:text-xl font-semibold text-white">AI availability</div>
          </div>
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
      <section id="cta" className="gradient-bg-blue-slate py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Start <span className="gradient-text-yellow">growing</span> your shop with <span className="gradient-text-yellow">AI</span> today
            </h2>
            <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
              {'Get started with Outrev today and start capturing calls, booking jobs, and growing your shop immediately.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setDemoModalOpen(true)} className="bg-white hover:bg-gray-50 text-[#1100bb] font-bold text-lg px-10 py-7">
                Schedule Your Free Demo
              </Button>
              <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-2 border-white text-lg px-10 py-7">
                Call 1-888-221-6878
              </Button>
            </div>
            <p className="text-sm text-white/80 mt-8">{'No contracts. No pressure. Just a test drive.'}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo Section */}
            <div>
              <img src="/outrev-logo.png" alt="Outrev" className="h-12 w-auto mb-3" />
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
      
      <DemoSignupModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  )
}
