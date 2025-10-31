import heroImage from "@/assets/hero-image.jpg";
import brunchImage from "@/assets/brunch-image.jpg";
import cateringImage from "@/assets/catering-image.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Mediterranean Mezze Platter" },
    { src: brunchImage, alt: "Brunch Selection" },
    { src: cateringImage, alt: "Catering Display" },
    { src: heroImage, alt: "Fresh Ingredients" },
    { src: brunchImage, alt: "Breakfast Spread" },
    { src: cateringImage, alt: "Event Catering" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="italic text-primary">Gallery</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our world of authentic Mediterranean cuisine
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="font-inter text-white text-lg font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
