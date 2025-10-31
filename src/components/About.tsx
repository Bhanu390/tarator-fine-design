import taratorLogo from "@/assets/tarator-logo.png";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">TARATOR</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                We grew in Tarator with one aim in mind: to share our love of 
                the many wonderful foods we grew up with.
              </p>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                To the Greek community in Melbourne, Tarator is a great name. 
                To the people of Australia it was the start of something new, a 
                traditional way of eating that we proudly think of as 'healthy street food'.
              </p>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                Our ingredients come from the best supplies and restaurants we have 
                known all our lives. When they are blended with traditional flavour and 
                a warm welcome to all at Tarator, we believe you will love eating 
                traditional Mediterranean food.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={taratorLogo}
                alt="Tarator Logo"
                className="w-64 md:w-80 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
