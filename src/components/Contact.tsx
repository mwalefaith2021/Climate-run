import { Card } from "@/components/ui/card";
import { Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@mosepelegreenfn.co.bw",
      href: "mailto:info@mosepelegreenfn.co.bw",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+267 77673163",
      href: "tel:+26777673163",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://web.facebook.com/people/Mosepele-Green-Foundation/100083303660961/?_rdc=1&_rdr#",
      color: "hover:text-[#1877F2]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/mosepele-green-foundation/posts/?feedView=all",
      color: "hover:text-[#0A66C2]",
    },
   /*{
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/mosepelegreenfoundation",
      color: "hover:text-[#E4405F]",
    },*/
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Get in Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in">
              <Card className="p-8 bg-card">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 group hover-lift"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-lg font-medium text-card-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">For Sponsorship Inquiries:</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contact us using the information above to discuss partnership opportunities 
                    and sponsorship packages.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-card">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all hover:-translate-y-1 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* About Organization */}
            <Card className="p-8 bg-primary/5 border-primary/20 animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-primary">Mosepele Green Foundation</h3>
              <p className="text-foreground mb-6 leading-relaxed">
                We are dedicated to creating a sustainable future for Africa through environmental 
                education, community engagement, and climate action initiatives.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To empower communities across Africa to take meaningful steps towards 
                    environmental conservation and climate resilience through innovative programs 
                    and partnerships.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Get Involved</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Whether you're a runner, volunteer, or sponsor, there are many ways to 
                    support our mission. Contact us to learn more about partnership opportunities.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-muted-foreground">
              Registration will open soon. Follow us on social media for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
