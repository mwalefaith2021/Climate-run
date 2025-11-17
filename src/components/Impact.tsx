import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Users, TreePine, TrendingDown, Calculator } from "lucide-react";

export const Impact = () => {
  const [distance, setDistance] = useState<number>(5);
  const [co2Saved, setCo2Saved] = useState<number>(0);
  const [participantCount, setParticipantCount] = useState<number>(0);

  useEffect(() => {
    // Get participant count from localStorage
    const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
    setParticipantCount(registrations.length);
  }, []);

  const calculateCO2 = () => {
    // Average car emits ~120g CO2 per km
    // Running saves this emission
    const co2PerKm = 0.12; // kg
    const saved = distance * co2PerKm;
    setCo2Saved(parseFloat(saved.toFixed(2)));
  };

  const totalCO2Saved = participantCount * 10 * 0.12; // Assuming average 10km per participant
  const treesPledged = Math.floor(participantCount / 5); // 1 tree per 5 participants

  const categoryData = [
    { name: "5km", value: Math.floor(participantCount * 0.4) },
    { name: "10km", value: Math.floor(participantCount * 0.4) },
    { name: "Fun Run", value: Math.floor(participantCount * 0.2) },
  ];

  const impactData = [
    { month: "Jan", participants: 0 },
    { month: "Feb", participants: 0 },
    { month: "Mar", participants: Math.floor(participantCount * 0.3) },
    { month: "Apr", participants: Math.floor(participantCount * 0.6) },
    { month: "May", participants: participantCount },
  ];

  const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--secondary))"];

  const stats = [
    {
      icon: Users,
      label: "Total Participants",
      value: participantCount,
      suffix: "",
      color: "primary",
    },
    {
      icon: TrendingDown,
      label: "Estimated CO₂ Saved",
      value: totalCO2Saved.toFixed(2),
      suffix: "kg",
      color: "accent",
    },
    {
      icon: TreePine,
      label: "Trees Pledged",
      value: treesPledged,
      suffix: "",
      color: "primary",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Impact</span> Dashboard
            </h2>
            <p className="text-xl text-muted-foreground">
              Track our collective environmental impact
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                </div>
                <p className="text-3xl font-bold mb-1 text-card-foreground">
                  {stat.value}
                  {stat.suffix && <span className="text-xl ml-1">{stat.suffix}</span>}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Carbon Calculator */}
          <Card className="p-8 mb-12 animate-fade-in bg-secondary/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-card-foreground">Carbon Footprint Calculator</h3>
                <p className="text-muted-foreground">Calculate your environmental impact</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="distance">Distance to Run (km)</Label>
                  <Input
                    id="distance"
                    type="number"
                    min="1"
                    max="50"
                    value={distance}
                    onChange={(e) => setDistance(parseFloat(e.target.value) || 0)}
                    className="text-lg"
                  />
                </div>
                <Button onClick={calculateCO2} variant="hero" className="w-full">
                  Calculate CO₂ Saved
                </Button>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-2">Estimated CO₂ Saved vs. Driving</p>
                <p className="text-5xl font-bold text-primary mb-4">{co2Saved}</p>
                <p className="text-xl text-muted-foreground mb-4">kilograms of CO₂</p>
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    That's equivalent to removing a car from the road for {Math.round(distance)} km!
                    🌱
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Participant Growth Chart */}
            <Card className="p-6 animate-fade-in">
              <h3 className="text-xl font-bold mb-6 text-card-foreground">Registration Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="participants" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Category Distribution Chart */}
            <Card className="p-6 animate-fade-in">
              <h3 className="text-xl font-bold mb-6 text-card-foreground">Category Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
