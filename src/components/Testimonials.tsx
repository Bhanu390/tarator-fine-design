import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely love this place! The Turkish eggs are to die for, and the atmosphere is so warm and welcoming. Best Mediterranean food in Melbourne!",
  },
  {
    name: "James K.",
    rating: 5,
    text: "Tarator never disappoints. Fresh ingredients, authentic flavors, and generous portions. The mezze platter is perfect for sharing with friends.",
  },
  {
    name: "Elena P.",
    rating: 5,
    text: "As someone from Greece, I can say this is the real deal. The food reminds me of home. Highly recommend to anyone looking for authentic Mediterranean cuisine.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="italic text-primary">Customers</span> Say
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-inter font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
