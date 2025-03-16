
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Motion } from '@/components/ui/motion';

const features = [
  'Expert team with over 15 years of experience',
  'Custom solutions tailored to your business needs',
  'Proactive approach to IT management',
  'Fast response times and reliable support',
  '24/7 monitoring and maintenance',
  'Transparent pricing with no hidden fees'
];

const clients = [
  {
    name: 'Unilever',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Unilever_logo.svg'
  },
  {
    name: 'Lalanka Group',
    logo: 'https://placehold.co/200x80/e4e4e7/18181b?text=Lalanka+Group'
  },
  {
    name: 'New Interiors (Pvt) Ltd',
    logo: 'https://placehold.co/200x80/e4e4e7/18181b?text=New+Interiors'
  },
  {
    name: 'Tuk Tuk Rental',
    logo: 'https://placehold.co/200x80/e4e4e7/18181b?text=Tuk+Tuk+Rental'
  }
];

const vendors = [
  { name: 'Google', type: 'Cloud & Workspace' },
  { name: 'Microsoft', type: 'Azure, 365, etc' },
  { name: 'AWS', type: 'Cloud Services' },
  { name: 'Dell', type: 'Hardware' },
  { name: 'HP', type: 'Hardware' },
  { name: 'Lenovo', type: 'Hardware' },
  { name: 'Adobe', type: 'Software' },
  { name: 'AutoCAD', type: 'Software' },
  { name: 'Sketchup', type: 'Software' }
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
              <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg max-w-xs hidden md:block">
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
            
            <div className="mt-6 space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading technology enabler that transforms businesses across Asia Pacific, 
                  creating a world where technology becomes an invisible yet powerful ally for every organization.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To empower organizations through innovative, reliable, and scalable IT solutions 
                  that drive growth and operational excellence, while building lasting partnerships 
                  based on trust, expertise, and exceptional service.
                </p>
              </div>
            </div>
            
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
        
        {/* Clients Section */}
        <Motion animation="fade-up" className="mt-20">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">Our Clients</span>
            <h2 className="text-3xl font-bold mt-6 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to work with organizations of all sizes across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl h-24">
                <img src={client.logo} alt={client.name} className="max-h-16 max-w-full" />
              </div>
            ))}
          </div>
        </Motion>
        
        {/* Vendors Section */}
        <Motion animation="fade-up" className="mt-20">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">Our Partners</span>
            <h2 className="text-3xl font-bold mt-6 mb-4">Strategic Technology Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide licensing and implementation services in partnership with leading technology vendors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {vendors.map((vendor, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold">{vendor.name}</h4>
                  <p className="text-sm text-gray-500">{vendor.type}</p>
                </div>
              </div>
            ))}
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default About;
