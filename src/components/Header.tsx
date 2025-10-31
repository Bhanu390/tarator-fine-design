    import { useState, useEffect } from 'react';
import logo from '../assets/images/tarator.png';
import { Menu, X, Clock, Phone, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemCount?: number;
  onCartClick?: () => void;
}

export default function Header({ currentPage, onNavigate, cartItemCount = 0, onCartClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'MENU', id: 'menu' },
    // { name: 'GALLERY', id: 'gallery' },
    // { name: 'Our Story', id: 'about' },
    { name: 'CATERING & EVENTS', id: 'events' }, 
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleLogoError = () => setLogoError(true);

  const handleOrderNow = () => {
    onNavigate('menu');
    setIsMobileMenuOpen(false);
  };

  const handleBookTable = () => {
    onNavigate('contact');
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    if (onCartClick) {
      onCartClick();
    }
    setIsMobileMenuOpen(false);
  };

  // Check if current page is menu
  const isMenuPage = currentPage === 'menu';

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block w-full text-white" style={{ backgroundColor: "#591B1B" }}>
        <div className="container-custom py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">MON-FRI 7:00AM - 3:00PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1300 827 286</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleOrderNow}
                className="px-6 py-2 border-2 border-[#B43F3F] text-[#B43F3F] rounded-full text-sm font-semibold hover:bg-[#B43F3F] hover:text-white transition-colors duration-300"
              >
                ORDER NOW
              </button>
              <button 
                onClick={handleBookTable}
                className="px-6 py-2 border-2 border-white text-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300"
              >
                BOOK A TABLE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden w-full text-white" style={{ backgroundColor: "#591B1B" }}>
        <div className="container-custom py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span className="text-xs">MON-FRI 7AM-3PM</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span className="text-xs">1300 827 286</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`w-full transition-all duration-300 sticky top-0 z-50 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <nav className="container-custom py-3 md:py-4 mobile-menu-container">
          <div className="flex items-center justify-between">
            {/* Logo Section - Adjusted spacing */}
            <div
              className="flex items-center cursor-pointer md:ml-12"
              onClick={() => onNavigate('home')}
            >
              {!logoError ? (
                <img
                  src={logo}
                  alt="Tarator Logo"
                  className="h-16 md:h-32 w-auto"
                  onError={handleLogoError}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-[#6B3E3A] flex items-center justify-center">
                    <span className="text-[#6B3E3A] font-bold text-sm md:text-lg">T</span>
                  </div>
                  <span className="text-lg md:text-2xl font-bold text-[#6B3E3A]">TARATOR</span>
                </div>
              )}
            </div>

            {/* Desktop Navigation - Adjusted spacing */}
            <div className="hidden md:flex items-center gap-8 md:mr-12">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`transition-all duration-300 hover:text-[#B43F3F] text-sm font-semibold tracking-wide whitespace-nowrap ${
                    currentPage === link.id ? 'text-[#B43F3F]' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Action Buttons & Menu */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Show cart and order buttons only when NOT on menu page */}
              {!isMenuPage && (
                <>
                 
                  <button 
                    onClick={handleOrderNow}
                    className="px-3 py-2 bg-[#B43F3F] text-white rounded-full text-xs font-semibold hover:bg-[#932F2F] transition-colors duration-300 whitespace-nowrap min-h-[40px] flex items-center justify-center"
                  >
                    ORDER
                  </button>
                </>
              )}
              
              {/* Menu Button - Always show */}
              <button
                className="p-2 z-50 menu-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-xl z-50 animate-slideDown max-h-screen overflow-y-auto">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center gap-2">
                    {!logoError ? (
                      <img
                        src={logo}
                        alt="Tarator Logo"
                        className="h-12 w-auto"
                        onError={handleLogoError}
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full border-2 border-[#6B3E3A] flex items-center justify-center">
                          <span className="text-[#6B3E3A] font-bold text-sm">T</span>
                        </div>
                        <span className="text-lg font-bold text-[#6B3E3A]">TARATOR</span>
                      </div>
                    )}
                  </div>
                  <button
                    className="p-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="p-4 space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`block w-full text-left py-4 px-4 transition-colors rounded-lg text-lg ${
                        currentPage === link.id 
                          ? 'text-[#B43F3F] font-semibold bg-red-50 border-l-4 border-[#B43F3F]' 
                          : 'text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
                
                {/* Mobile Contact Info */}
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">Monday - Friday: 7:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">1300 827 286</span>
                    </div>
                  </div>
                  
                  {/* Mobile Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={handleOrderNow}
                      className="w-full px-6 py-3 bg-[#B43F3F] text-white rounded-full text-base font-semibold hover:bg-[#932F2F] transition-colors duration-300 text-center"
                    >
                      ORDER NOW
                    </button>
                    <button 
                      onClick={handleBookTable}
                      className="w-full px-6 py-3 border-2 border-[#B43F3F] text-[#B43F3F] rounded-full text-base font-semibold hover:bg-[#B43F3F] hover:text-white transition-colors duration-300 text-center"
                    >
                      BOOK A TABLE
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
}