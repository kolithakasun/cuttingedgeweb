
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/#about' },
    // { title: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle anchor links on the home page
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToContact = () => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      // If already on home page, just scroll to contact
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on another page, navigate to home and then to contact section
      window.location.href = '/#contact';
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
    )}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/749b65dc-5ef6-416d-807f-c96312e0a999.png" 
            alt="CuttingEdge Technologies Logo" 
            className="h-10 w-auto" 
          />
          <span className="text-lg font-bold tracking-tight">CuttingEdge Technologies</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => handleNavClick(link.href)}
            >
              {link.title}
            </Link>
          ))}
          <Button 
            className="ml-2"
            onClick={navigateToContact}
          >
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        'md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden',
        isMobileMenuOpen ? 'max-h-[500px] border-b shadow-sm' : 'max-h-0'
      )}>
        <nav className="container flex flex-col py-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => handleNavClick(link.href)}
            >
              {link.title}
            </Link>
          ))}
          <Button 
            className="w-full mt-2"
            onClick={navigateToContact}
          >
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
