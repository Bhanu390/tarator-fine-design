import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuShowcase from "@/components/MenuShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MenuShowcase />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
