import logoImage from "@/images/mosepele-logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImage} alt="Mosepele Green Foundation Logo" className="h-12 w-12 object-contain" />
                <div className="flex flex-col">
                  <span className="font-montserrat font-black text-lg leading-tight tracking-tight">
                    MOSEPELE GREEN
                  </span>
                  <span className="font-montserrat font-bold text-sm leading-tight">
                    FOUNDATION
                  </span>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                A sustainable journey for Africa, one step at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#register" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#impact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Impact Dashboard
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Event Info */}
            <div>
              <h3 className="font-bold mb-4">Event Details</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Date: 17 May 2026</li>
                <li>Location: Gaborone, Botswana</li>
                <li>Categories: 5km, 10km, Fun Run</li>
                <li>Registration: Opening Soon</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Mosepele Green Foundation. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-2">
              Run for Climate 2026 - Together we make a difference 🌱
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
