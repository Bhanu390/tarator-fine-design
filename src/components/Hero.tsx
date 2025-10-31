import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Menu } from "lucide-react";
import { useState } from "react";
import taratorLogo from "@/assets/tarator-logo.png";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation - Europa Pizza Style */}
      <nav className="bg-[#1a1a1a] border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={taratorLogo} alt="Tarator Logo" className="h-12 md:h-16" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="font-inter text-sm text-white hover:text-primary transition-colors">
                ABOUT
              </a>
              <a href="#menu" className="font-inter text-sm text-white hover:text-primary transition-colors">
                MENU
              </a>
              <a href="#gallery" className="font-inter text-sm text-white hover:text-primary transition-colors">
                GALLERY
              </a>
              <a href="#contact" className="font-inter text-sm text-white hover:text-primary transition-colors">
                CONTACT
              </a>
              <Button variant="default" className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium px-6 text-sm">
                BOOK NOW
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
                <a href="#about" className="font-inter text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  ABOUT
                </a>
                <a href="#menu" className="font-inter text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  MENU
                </a>
                <a href="#gallery" className="font-inter text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  GALLERY
                </a>
                <a href="#contact" className="font-inter text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT
                </a>
                <Button variant="default" className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium w-full text-sm">
                  BOOK NOW
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Tarator Grid Style */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Tarator Card */}
        <div className="relative min-h-[400px] md:min-h-0 overflow-hidden group">
          <img src={heroImage} alt="Tarator" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Tarator
            </h2>
            <p className="font-inter text-white/90 mb-6 max-w-md">
              Fresh Mediterranean cuisine made with authentic ingredients and traditional recipes
            </p>
            <Button className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium">
              Read More
            </Button>
          </div>
        </div>

        {/* Europa Pizza Card */}
        <div className="relative min-h-[400px] md:min-h-0 overflow-hidden group">
          <img src={heroImage} alt="Europa Pizza" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Europa Pizza
            </h2>
            <p className="font-inter text-white/90 mb-6 max-w-md">
              Authentic Italian pizzas crafted with premium ingredients and wood-fired perfection
            </p>
            <Button className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium">
              Read More
            </Button>
          </div>
        </div>

        {/* Catering Card */}
        <div className="relative min-h-[400px] md:min-h-0 overflow-hidden group">
          <img src={heroImage} alt="Catering" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Catering
            </h2>
            <p className="font-inter text-white/90 mb-6 max-w-md">
              Professional catering services for all occasions with custom menu options
            </p>
            <Button className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium">
              Enquire
            </Button>
          </div>
        </div>

        {/* Events Card */}
        <div className="relative min-h-[400px] md:min-h-0 overflow-hidden group">
          <img src={heroImage} alt="Events" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Events
            </h2>
            <p className="font-inter text-white/90 mb-6 max-w-md">
              Host your special events with us - birthdays, corporate events, and celebrations
            </p>
            <Button className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium">
              Enquire
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
