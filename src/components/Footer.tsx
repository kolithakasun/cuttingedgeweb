
import React from 'react';
import { cn } from '@/lib/utils';
import { Motion } from '@/components/ui/motion';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Motion animation="fade-up">
      <footer className="bg-white border-t border-gray-100">
        <div className="container max-w-7xl mx-auto py-12 px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <a href="#" className="text-2xl font-bold">TechSolutions</a>
              </div>
              <p className="text-muted-foreground max-w-md mb-6">
                Providing innovative IT solutions to help businesses thrive in the digital era. We're your trusted technology partner.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">IT Infrastructure</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cloud Services</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Managed IT</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} TechSolutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </Motion>
  );
};

export default Footer;
