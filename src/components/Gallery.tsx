import heroImage from "@/assets//images/wraps (1).jpeg";
import brunchImage from "@/assets/images/pasta.jpg";
import cateringImage from "@/assets/images/salads.jpg";
import s1 from "@/assets/images/pizza.jpg";
import s2 from "@/assets/images/coffee.jpeg";
import s3 from "@/assets/images/salads.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Wraps" },
    { src: brunchImage, alt: "Pasta" },
    { src: cateringImage, alt: "Salads" },
    { src: s1, alt: "Pizza" },
    { src: s2, alt: "Coffe" },
    { src: s3, alt: "Salads" },
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
