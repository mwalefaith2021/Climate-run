import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/images/event-poster.jpg";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-17T06:00:00");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Runners in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      {/* Decorative Leaf Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
            <p className="text-primary font-semibold">Mosepele Green Foundation Presents</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary">Run for Climate</span>
            <br />
            <span className="text-foreground">2026</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
            Climate Change Awareness Run
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-lg">
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-semibold">17 May 2026</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-muted rounded-full"></div>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold">Gaborone, Botswana</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-xl p-4 hover-lift"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="hero"
              onClick={() => scrollToSection("register")}
              className="text-lg px-8"
            >
              Register Now <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="text-lg px-8 border-2"
            >
              Learn More
            </Button>
          </div>

          <p className="mt-6 text-muted-foreground">
            Registration opens soon. Join us in making a difference!
          </p>
        </div>
      </div>
    </section>
  );
};
