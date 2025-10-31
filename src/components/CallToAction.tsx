import { Button } from "@/components/ui/button";
import cateringImage from "@/assets/catering-image.jpg";

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${cateringImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 text-white">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience <span className="italic">Tarator</span>?
            </h2>
            <p className="font-inter text-xl mb-8 max-w-2xl">
              Whether you're joining us for a delightful meal or need catering for your special event, we're here to serve you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium px-8"
              >
                Make a Reservation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground font-inter font-medium px-8"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
