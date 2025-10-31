import { Heart, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with passion and care, using recipes passed down through generations.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source the finest, freshest ingredients from trusted local and Mediterranean suppliers.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Bringing people together through authentic Mediterranean food and warm hospitality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why We're the <span className="italic text-primary">Best</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
