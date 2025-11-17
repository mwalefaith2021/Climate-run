import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Award, Medal, ArrowRight, Handshake } from "lucide-react";

export const Sponsors = () => {
  const sponsorTiers = [
   
    
  ];

  const benefits = [
    { tier: "Gold", amount: "BWP ", perks: ["Logo on all materials", "VIP booth space", "Social media features", "Speaking opportunity"] },
    { tier: "Silver", amount: "BWP ", perks: ["Logo on website & shirts", "Booth space", "Social media mentions"] },
    { tier: "Bronze", amount: "BWP ", perks: ["Logo on website", "Social media recognition"] },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Partners & Sponsors</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Thank you to our amazing sponsors who make this event possible
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="space-y-12 mb-16">
            {sponsorTiers.map((tier, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${tier.bgColor} rounded-lg flex items-center justify-center`}>
                    <tier.icon className={`w-6 h-6 ${tier.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{tier.tier}</h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tier.sponsors.map((sponsor, idx) => (
                    <Card
                      key={idx}
                      className={`p-6 text-center hover-lift ${tier.bgColor} ${tier.borderColor} border-2`}
                    >
                      <div className="text-5xl mb-3">{sponsor.logo}</div>
                      <h4 className="font-bold text-card-foreground mb-2">{sponsor.name}</h4>
                      <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action for Sponsors */}
          <Card className="p-8 md:p-12 bg-primary/5 border-primary/20 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Become a Sponsor</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Join us in making a difference! Partner with Run for Climate 2026 and showcase 
                  your commitment to environmental sustainability while reaching thousands of 
                  participants and supporters.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Brand exposure to 1,000+ participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Positive environmental impact association</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Extensive social media reach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Community engagement opportunities</span>
                  </div>
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Sponsorship Info <ArrowRight className="ml-2" />
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-xl mb-4 text-foreground">Sponsorship Packages</h4>
                {benefits.map((benefit, idx) => (
                  <Card key={idx} className="p-4 bg-card hover-lift">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-bold text-lg text-card-foreground">{benefit.tier} Tier</h5>
                      <span className="text-primary font-semibold">{benefit.amount}</span>
                    </div>
                    <ul className="space-y-1">
                      {benefit.perks.map((perk, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </Card>

          {/* Partner Opportunities */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-lift animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-card-foreground">Media Partners</h4>
              <p className="text-sm text-muted-foreground">
                Help us spread awareness through your platforms and reach
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-card-foreground">In-Kind Sponsors</h4>
              <p className="text-sm text-muted-foreground">
                Provide products or services to support our runners and event
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-card-foreground">NGO Partners</h4>
              <p className="text-sm text-muted-foreground">
                Collaborate with us to amplify environmental impact and awareness
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
