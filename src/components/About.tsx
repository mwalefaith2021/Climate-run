import { Leaf, Heart, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import climateImage from "@/images/mosepele-logo.jpg";

export const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Environmental Action",
      description: "Every step counts towards reducing our carbon footprint and protecting our planet.",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Together we build awareness and inspire collective action for climate change.",
    },
    {
      icon: Users,
      title: "Unity & Participation",
      description: "Bringing people together from all walks of life to run for a common cause.",
    },
    {
      icon: Target,
      title: "Measurable Goals",
      description: "Track our collective impact through carbon savings and environmental pledges.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Run for Climate 2026</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A sustainable journey for Africa, one step at a time
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <img
                src={climateImage}
                alt="Climate Impact"
                className="rounded-2xl shadow-lg hover-lift"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">About Mosepele Green Foundation</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  The Mosepele Green Foundation is committed to creating a sustainable future for Africa. 
                  Through innovative programs and community engagement, we work to raise awareness about 
                  climate change and inspire actionable solutions.
                </p>
                <p className="text-foreground leading-relaxed">
                  Our mission is to empower communities across the continent to take meaningful steps 
                  towards environmental conservation and climate resilience.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">The Run's Purpose</h3>
                <p className="text-foreground leading-relaxed">
                  Run for Climate 2026 is more than just a race—it's a movement. By participating, you're 
                  not only promoting personal health and wellness but also demonstrating your commitment to 
                  fighting climate change. Every kilometer run represents a pledge to reduce carbon emissions 
                  and protect our environment for future generations.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover-lift animate-fade-in bg-card border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
