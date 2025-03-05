
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Motion, MotionGroup } from '@/components/ui/motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
      
      {/* Background dots pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
      
      {/* Hero content */}
      <div className="container mx-auto px-8 pt-32 pb-24 md:pb-32 relative z-10 max-w-7xl">
        <MotionGroup className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
          <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">
            IT Solutions for Modern Businesses
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
            Transforming Business Through <span className="text-primary">Technology</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            We deliver cutting-edge IT services and solutions that help businesses optimize operations, enhance security, and drive growth in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="h-12 px-8 text-base">
              Explore Our Services
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8 text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </MotionGroup>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Motion animation="fade-up" delay={1000}>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to services"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </Motion>
      </div>
    </section>
  );
};

export default Hero;
