import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Menu } from "lucide-react";
import { useState } from "react";
import taratorLogo from "@/assets/tarator-logo.png";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <img src={taratorLogo} alt="Tarator Logo" className="h-16 md:h-20" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="font-inter text-white hover:text-primary-foreground transition-colors">
                About
              </a>
              <a href="#menu" className="font-inter text-white hover:text-primary-foreground transition-colors">
                Menu
              </a>
              <a href="#gallery" className="font-inter text-white hover:text-primary-foreground transition-colors">
                Gallery
              </a>
              <a href="#contact" className="font-inter text-white hover:text-primary-foreground transition-colors">
                Contact
              </a>
              <Button variant="default" className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium px-6">
                Book Now
              </Button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-white/95 backdrop-blur rounded-lg p-6 shadow-lg">
              <div className="flex flex-col gap-4">
                <a href="#about" className="font-inter text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
                <a href="#menu" className="font-inter text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Menu
                </a>
                <a href="#gallery" className="font-inter text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Gallery
                </a>
                <a href="#contact" className="font-inter text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
                <Button variant="default" className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium w-full">
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
            Authentic <span className="italic">Mediterranean</span> Flavours
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the rich traditions of Mediterranean cuisine with fresh, unforgettable ingredients
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium px-8 py-6 text-lg"
          >
            Explore Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
