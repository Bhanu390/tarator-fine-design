import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import brunchImage from "@/assets/brunch-image.jpg";

const menuCategories = [
  {
    title: "All Day Brunch",
    description: "Start your day with our delicious brunch selection",
    items: [
      { name: "Turkish Eggs", price: "22.5", description: "Garlic yoghurt, grilled sujuk, poached eggs, chilli oil" },
      { name: "Shakshuka", price: "24.5", description: "Tomato sauce, poached eggs, sujuk, herbs" },
      { name: "Avo Toast", price: "22.5", description: "Smashed avocado, cherry tomatoes, feta, poached egg" },
      { name: "French Toast", price: "21.5", description: "Brioche, cinnamon-vanilla, lemon ricotta, berries" },
    ],
  },
  {
    title: "Sandwiches & Wraps",
    description: "Freshly made with premium ingredients",
    items: [
      { name: "Prosciutto & Ricotta", price: "24", description: "Italian prosciutto, fresh ricotta, rocket" },
      { name: "Sujuk Wrap", price: "18", description: "Grilled sujuk, fresh vegetables, tzatziki" },
      { name: "Chicken Souvlaki", price: "22", description: "Marinated chicken, pita, fresh salad" },
    ],
  },
  {
    title: "Mediterranean Plates",
    description: "Authentic flavours from the Mediterranean",
    items: [
      { name: "Mezze Platter", price: "32", description: "Hummus, baba ganoush, olives, pita, falafel" },
      { name: "Grilled Lamb", price: "34", description: "Tender lamb, herbs, lemon, vegetables" },
      { name: "Seafood Special", price: "36", description: "Fresh catch of the day, Mediterranean style" },
    ],
  },
];

const MenuShowcase = () => {
  return (
    <section id="menu" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="italic text-primary">Menu</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted dishes using the finest Mediterranean ingredients and traditional recipes
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <img
            src={brunchImage}
            alt="Mediterranean Brunch"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {menuCategories.map((category, idx) => (
            <Card key={idx} className="border-border bg-card hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-border pb-3 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-inter font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <span className="font-inter font-bold text-primary">
                          ${item.price}
                        </span>
                      </div>
                      <p className="font-inter text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-inter font-medium px-8"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;
