
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

const partners = [
  { 
    name: 'Google', 
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    services: [
      { name: 'Google Workspace', description: 'Comprehensive productivity and collaboration tools' },
      { name: 'Google Cloud Platform', description: 'Scalable cloud computing services' },
      { name: 'Google Ads', description: 'Digital advertising solutions' }
    ]
  },
  { 
    name: 'Microsoft', 
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    services: [
      { name: 'Microsoft 365', description: 'Business productivity apps and cloud services' },
      { name: 'Azure', description: 'Cloud computing platform and services' },
      { name: 'Dynamics 365', description: 'Business applications and CRM' },
      { name: 'Windows', description: 'Operating system and management' }
    ]
  },
  { 
    name: 'AWS', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    services: [
      { name: 'EC2', description: 'Secure and resizable compute capacity' },
      { name: 'S3', description: 'Scalable storage infrastructure' },
      { name: 'RDS', description: 'Managed relational database service' },
      { name: 'Lambda', description: 'Serverless computing service' }
    ]
  },
  { 
    name: 'Adobe', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png',
    services: [
      { name: 'Creative Cloud', description: 'Collection of creative apps and services' },
      { name: 'Acrobat', description: 'PDF creation and management' },
      { name: 'Adobe Sign', description: 'Electronic signature solution' }
    ]
  },
  { 
    name: 'Autodesk', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Autodesk_logo.svg',
    services: [
      { name: 'AutoCAD', description: '2D and 3D design and drafting' },
      { name: 'Revit', description: 'Building information modeling software' },
      { name: 'Fusion 360', description: 'Cloud-based 3D CAD/CAM tool' }
    ]
  },
  { 
    name: 'Sketchup', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/SketchUp_logo.png',
    services: [
      { name: 'SketchUp Pro', description: '3D modeling for professionals' },
      { name: 'SketchUp Studio', description: 'Advanced 3D modeling and design tools' }
    ]
  },
  { 
    name: 'Dell', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
    services: [
      { name: 'Servers & Storage', description: 'Enterprise-grade hardware solutions' },
      { name: 'Desktops & Laptops', description: 'Business computing devices' },
      { name: 'Networking', description: 'Connectivity and network management' }
    ]
  },
  { 
    name: 'HP', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg',
    services: [
      { name: 'Computing Devices', description: 'Workstations, laptops, and desktops' },
      { name: 'Printing Solutions', description: 'Enterprise printing and scanning' },
      { name: 'Security Solutions', description: 'Security services and products' }
    ]
  },
  { 
    name: 'Lenovo', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Lenovo_Logo_2015.svg',
    services: [
      { name: 'ThinkPad', description: 'Business-class laptops and tablets' },
      { name: 'ThinkCentre', description: 'Commercial desktop computers' },
      { name: 'ThinkServer', description: 'Server solutions for businesses' }
    ]
  }
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
        
        {/* Strategic Partners Section */}
        <Motion animation="fade-up" className="mt-20">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">Our Partners</span>
            <h2 className="text-3xl font-bold mt-6 mb-4">Strategic Technology Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide licensing and implementation services in partnership with leading technology vendors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 transition-all hover:shadow-md">
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                    <p className="text-sm text-gray-500">Technology Partner</p>
                  </div>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="h-10 max-w-[120px] object-contain" 
                  />
                </div>
                <div className="bg-gray-50 p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Services we provide:</h4>
                  <ul className="space-y-2">
                    {partner.services.map((service, serviceIdx) => (
                      <li key={serviceIdx} className="text-sm">
                        <span className="font-medium">{service.name}</span>
                        {service.description && (
                          <span className="text-gray-500 block text-xs">
                            {service.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
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
