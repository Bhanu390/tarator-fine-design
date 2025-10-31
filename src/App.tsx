import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuShowcase from "@/components/MenuShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FullMenu from "@/pages/FullMenu";
import Contact from "@/pages/Contact";
import Events from "@/pages/Events";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <FullMenu onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'events':
        return <Events onNavigate={handleNavigate} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <MenuShowcase onNavigate={handleNavigate} />
            <WhyChooseUs />
            <Gallery />
            <Testimonials />
            <CallToAction />
          </>
        );
    }
  };

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        {renderPage()}
        <Footer onNavigate={handleNavigate} />
      </div>
    </TooltipProvider>
  );
}

export default App;
