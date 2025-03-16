
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
    )}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/e44b6988-8639-4875-86d4-8bf052f2215d.png" 
            alt="CuttingEdge Technologies Logo" 
            className="h-10 w-auto" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.title}
            </a>
          ))}
          <Button className="ml-2">Get in Touch</Button>
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
            <a
              key={link.title}
              href={link.href}
              className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <Button 
            className="w-full mt-2"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
