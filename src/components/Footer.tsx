import taratorLogo from "@/assets/tarator-logo.png";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <img src={taratorLogo} alt="Tarator Logo" className="h-20 mb-6 brightness-0 invert" />
            <p className="font-inter text-background/80 leading-relaxed">
              Authentic Mediterranean cuisine served with passion and tradition.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-background/80 hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 font-inter">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/80">(03) 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/80">info@tarator.com.au</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/80">Melbourne, VIC Australia</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2 font-inter text-background/80">
              <li>Monday - Friday: 7am - 4pm</li>
              <li>Saturday - Sunday: 8am - 4pm</li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="font-inter text-background/60">
            © {new Date().getFullYear()} Tarator. All rights reserved. | Crafted with love in Melbourne
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
