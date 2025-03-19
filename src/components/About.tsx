
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Motion } from '@/components/ui/motion';
import ClientsCarousel from './ClientsCarousel';

const features = [
  'Expert team with over 15 years of experience',
  'Custom solutions tailored to your business needs',
  'Proactive approach to IT management',
  'Fast response times and reliable support',
  '24/7 monitoring and maintenance',
  'Transparent pricing with no hidden fees'
];

// Reordered clients as requested
const clients = [
  {
    name: 'Unilever',
    logo: 'https://www.unilever.com.lk/core-assets/logos/logo-animated.svg',
    url: 'https://www.unilever.com.lk/'
  },
  {
    name: 'Tuk Tuk Rental',
    logo: '/lovable-uploads/dc4fa504-0329-46ac-bfb5-727b77691322.png',
    url: 'https://tuktukrental.com/'
  },
  {
    name: 'Lalanka Group',
    logo: 'https://www.lalanka.com/wp-content/uploads/2024/11/Lalanka-Logo-1.png',
    url: 'https://www.lalanka.com'
  },
  {
    name: 'MBE International',
    logo: '/lovable-uploads/mbeinternational.png',
    url: 'http://www.mbeinternational.com/'
  },
  {
    name: 'New Interiors',
    logo: '/lovable-uploads/newinterior-logo.png',
    url: 'https://www.newinteriorslk.com'
  },
  {
    name: 'Worldwide International',
    logo: 'http://www.wweinternational.com/wp-content/uploads/2021/05/WWE.png',
    url: 'http://www.wweinternational.com/'
  },
  {
    name: 'CCE International',
    logo: 'http://www.cceinternational.com/images/logo.png',
    url: 'http://www.cceinternational.com/'
  },
  {
    name: 'VElevenOne',
    logo: '/lovable-uploads/31803e88-5eb7-4ba2-8524-1411fed0ee36.png',
    url: '#'
  }
];

const partners = [
  { 
    name: 'Google', 
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    technologies: [
      'Google Workspace',
      'Google Cloud Platform',
      'Google Ads'
    ],
    description: 'Google Cloud and Workspace solutions for businesses of all sizes, enabling seamless collaboration and secure cloud infrastructure with tools including Gmail, Drive, Docs, Sheets, Slides, Meet, Compute Engine, Cloud Storage, BigQuery, and Kubernetes Engine.'
  },
  { 
    name: 'Microsoft', 
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    technologies: [
      'Microsoft 365',
      'Azure',
      'Dynamics 365',
      'Client and Server Operating Systems'
    ],
    description: 'Comprehensive Microsoft solutions including cloud services, productivity software, and enterprise applications to drive digital transformation with Office 365, Teams, SharePoint, Azure services, SQL Server, and Windows operating systems.'
  },
  { 
    name: 'AWS', 
    logo: '/lovable-uploads/94e73714-9d64-4918-8f00-2e5647c1d1ff.png',
    technologies: [
      'EC2',
      'EKS',
      'ECS',
      'Lambda'
    ],
    description: 'Amazon Web Services cloud solutions providing scalable, reliable, and cost-effective infrastructure for your business needs including compute resources, container orchestration, serverless applications, and enterprise-grade storage.'
  },
  { 
    name: 'Adobe', 
    logo: '/lovable-uploads/8799d3aa-f884-4605-ad48-04cf6128a870.png',
    technologies: [
      'Creative Cloud',
      'Acrobat',
      'Adobe Sign'
    ],
    description: 'Adobe creative and document solutions empowering your team to design, create, and manage digital content efficiently with Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, and document management tools.'
  },
  { 
    name: 'Autodesk', 
    logo: '/lovable-uploads/f2d62ca4-1e4f-4d6b-990f-ab0ae33b8f70.png',
    technologies: [
      'AutoCAD',
      'Revit',
      'Fusion 360'
    ],
    description: 'Autodesk design and engineering software solutions for architecture, construction, manufacturing, and entertainment industries with powerful 3D modeling, simulation, and visualization capabilities.'
  },
  { 
    name: 'SketchUp', 
    logo: 'https://static.trimble.com/sites/default/files/styles/large_3x/public/2021-03/logo-sketchup.png',
    technologies: [
      'SketchUp Pro',
      'SketchUp Studio'
    ],
    description: 'SketchUp 3D modeling software for architecture, design, construction, and engineering professionals with easy-to-use tools for conceptual design, detailed documentation, and collaborative workflows.'
  },
  { 
    name: 'Dell', 
    logo: '/lovable-uploads/038b2bab-ed59-4bc1-9808-d0b9dded77dc.png',
    technologies: [
      'Servers & Storage',
      'Desktops & Laptops',
      'Networking'
    ],
    description: 'Dell hardware solutions and services providing reliable, high-performance computing and IT infrastructure for businesses including PowerEdge servers, OptiPlex desktops, Latitude laptops, and enterprise storage solutions.'
  },
  { 
    name: 'HP', 
    logo: '/lovable-uploads/eaed3217-c110-4be2-8e0a-6aa78382ebc5.png',
    technologies: [
      'Computing Devices',
      'Printing Solutions',
      'Networking & Servers'
    ],
    description: 'HP enterprise solutions covering printing, personal computing, and IT infrastructure to address diverse business requirements with Elite and ProBook laptops, LaserJet printers, and ProLiant servers.'
  },
  { 
    name: 'Lenovo', 
    logo: '/lovable-uploads/2ad6c412-0db4-45ff-9712-6789fc543253.png',
    technologies: [
      'ThinkPad',
      'ThinkCentre',
      'ThinkServer'
    ],
    description: 'Lenovo business computing solutions offering reliable, secure, and high-performance devices for enterprise environments including ThinkPad laptops, ThinkCentre desktops, and enterprise-grade servers with comprehensive support.'
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
                  "Technology is our passion, your success is our mission."
                </p>
                <p className="text-primary mt-2 font-medium">— CuttingEdge Technologies</p>
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
        
        {/* Clients Section with Carousel */}
        <Motion animation="fade-up" className="mt-20">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">Our Clients</span>
            <h2 className="text-3xl font-bold mt-6 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to work with organizations of all sizes across various industries.
            </p>
          </div>
          
          <ClientsCarousel clients={clients} />
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
                  </div>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="h-10 max-w-[120px] object-contain" 
                  />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {partner.technologies.map((tech, techIdx) => (
                        <li key={techIdx} className="text-sm">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
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
