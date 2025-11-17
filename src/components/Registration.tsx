import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  category: string;
}

export const Registration = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.city || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would save to Firebase/Google Sheets
    console.log("Registration data:", formData);

    // Store in localStorage as a simple demo
    const existingRegistrations = JSON.parse(localStorage.getItem("registrations") || "[]");
    existingRegistrations.push({
      ...formData,
      id: Date.now(),
      registeredAt: new Date().toISOString(),
    });
    localStorage.setItem("registrations", JSON.stringify(existingRegistrations));

    setIsSubmitted(true);
    toast({
      title: "Registration Successful!",
      description: "Thank you for joining Run for Climate 2026",
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-12 text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-card-foreground">
                Thank You for Joining!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Welcome to Run for Climate 2026! We've received your registration and will send 
                you more details via email as the event approaches.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="mx-auto"
              >
                Register Another Participant
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Register</span> for the Run
            </h2>
            <p className="text-xl text-muted-foreground">
              Secure your spot and be part of the climate action movement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="p-8 animate-slide-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder=""
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder=""
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder=""
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder=""
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Race Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5km">5km Run</SelectItem>
                      <SelectItem value="10km">10km Run</SelectItem>
                      <SelectItem value="fun">Fun Run</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Complete Registration
                </Button>
              </form>
            </Card>

            {/* Info Card */}
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">Race Categories</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">5km Run</p>
                      <p className="text-sm text-muted-foreground">Perfect for beginners and casual runners</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">10km Run</p>
                      <p className="text-sm text-muted-foreground">For experienced runners seeking a challenge</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Fun Run</p>
                      <p className="text-sm text-muted-foreground">Family-friendly walk/jog for all ages</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-accent/5 border-accent/20">
                <h3 className="text-xl font-bold mb-4 text-accent">What's Included</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Official race T-shirt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Race bib and timing chip</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Finisher's medal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Refreshments and water stations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Post-race celebration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Carbon offset certificate</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
