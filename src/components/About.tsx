
import React from 'react';
import { cn } from '@/lib/utils';
import { Motion } from '@/components/ui/motion';
import { CheckCircle } from 'lucide-react';

const features = [
  'Expert team with over 15 years of experience',
  'Custom solutions tailored to your business needs',
  'Proactive approach to IT management',
  'Fast response times and reliable support',
  '24/7 monitoring and maintenance',
  'Transparent pricing with no hidden fees'
];

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Motion animation="fade-right" className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="IT Professional" 
                  className="w-full h-auto object-cover aspect-[4/3]" 
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card rounded-2xl p-6 shadow-lg max-w-xs hidden md:block">
                <p className="text-lg font-medium">
                  "Our mission is to empower businesses through technology that works seamlessly."
                </p>
                <p className="text-primary mt-2 font-medium">— Our Commitment</p>
              </div>
            </div>
          </Motion>
          
          <Motion animation="fade-left" className="order-1 lg:order-2">
            <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">About Us</span>
            <h2 className="text-3xl font-bold mt-6 mb-4">We Make Technology Work for Your Business</h2>
            <p className="text-muted-foreground mt-6">
              With over 15 years of experience, we've helped countless businesses leverage technology to overcome challenges and achieve their goals. Our team of certified IT professionals is dedicated to providing exceptional service and innovative solutions.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default About;
