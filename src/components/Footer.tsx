
import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/" className="inline-flex items-center gap-2">
                  <img 
                    src="/lovable-uploads/05210934-5ae8-499f-87bc-acaa4792d0d3.png" 
                    alt="CuttingEdge Technologies Logo" 
                    className="h-12 w-auto" 
                  />
                  <span className="text-xl font-bold tracking-tight">CuttingEdge Technologies</span>
                </Link>
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
                <li><Link to="/services/it-infrastructure" className="text-muted-foreground hover:text-foreground transition-colors">IT Infrastructure</Link></li>
                <li><Link to="/services/cybersecurity" className="text-muted-foreground hover:text-foreground transition-colors">Cybersecurity</Link></li>
                <li><Link to="/services/cloud-services" className="text-muted-foreground hover:text-foreground transition-colors">Cloud Services</Link></li>
                <li><Link to="/services/managed-it-services" className="text-muted-foreground hover:text-foreground transition-colors">Managed IT</Link></li>
                <li><Link to="/services/digital-transformation" className="text-muted-foreground hover:text-foreground transition-colors">Digital Transformation</Link></li>
                <li><Link to="/services/custom-software" className="text-muted-foreground hover:text-foreground transition-colors">Custom Software</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} CuttingEdge Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Motion>
  );
};

export default Footer;
