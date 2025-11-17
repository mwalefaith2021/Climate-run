import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Registration } from "@/components/Registration";
import { Impact } from "@/components/Impact";
import { Sponsors } from "@/components/Sponsors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Registration />
      <Impact />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
