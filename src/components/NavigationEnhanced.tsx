import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import brandLogo from "@/assets/brand-logo-main.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "#about" },
    { 
      label: "SERVICES", 
      href: "#services",
      hasDropdown: true,
      submenu: [
        { label: "Custom Branded Products", href: "#custom-products" },
        { label: "Corporate Gifting", href: "#corporate-gifting" },
        { label: "Uniform Programs", href: "#uniforms" },
        { label: "Corporate Webstores", href: "#webstores" },
        { label: "On-Site Events", href: "#events" },
        { label: "Factory Direct Importing", href: "#importing" }
      ]
    },
    { label: "SUPPLY CHAIN", href: "#supply-chain" },
    { label: "BLOG", href: "#blog" },
  ];

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in">
            <img 
              src={brandLogo} 
              alt="SoleMuchBetter Branding Solutions - Women-owned corporate branding company logo" 
              className="h-8 w-auto hover-scale" 
            />
            <div className="text-xl font-bold">
              <span className="text-white">SOLEMUCHBETTER</span>
              <div className="text-sm text-white/70 font-normal">Branding Solutions</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className="text-white hover:text-primary transition-colors duration-200 font-medium text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-2 py-1 flex items-center gap-1"
                      aria-label={`Navigate to ${item.label}`}
                      aria-expanded={isServicesOpen}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border animate-scale-in z-10">
                        <div className="py-2">
                          {item.submenu?.map((subItem) => (
                            <button
                              key={subItem.label}
                              onClick={() => handleSmoothScroll(subItem.href)}
                              className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors focus:outline-none focus:bg-gray-50"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleSmoothScroll(item.href)}
                    className="text-white hover:text-primary transition-colors duration-200 font-medium text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-2 py-1 story-link"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold tracking-wide hover-scale animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleSmoothScroll('#contact')}
            >
              CONTACT US
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded p-1 hover-scale"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-slide-in-right">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => handleSmoothScroll(item.href)}
                    className="text-white hover:text-primary transition-colors duration-200 font-medium text-sm tracking-wide w-full text-left hover-scale"
                  >
                    {item.label}
                  </button>
                  {item.hasDropdown && item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleSmoothScroll(subItem.href)}
                          className="block text-white/70 hover:text-primary text-sm transition-colors w-full text-left"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-bold tracking-wide w-fit hover-scale"
                onClick={() => handleSmoothScroll('#contact')}
              >
                CONTACT US
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;