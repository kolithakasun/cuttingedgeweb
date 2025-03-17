
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
    logo: 'https://www.unilever.com.lk/core-assets/logos/logo-animated.svg',
    url: 'https://www.unilever.com.lk/'
  },
  {
    name: 'Lalanka Group',
    logo: 'https://www.lalanka.com/wp-content/uploads/2024/11/Lalanka-Logo-1.png',
    url: 'https://www.lalanka.com'
  },
  {
    name: 'New Interiors',
    logo: 'https://cuttingedgesl.com/lovable-uploads/newinterior-logo.png',
    url: 'https://www.newinteriorslk.com'
  },
  {
    name: 'Tuk Tuk Rental',
    logo: 'https://cuttingedgesl.com/lovable-uploads/tuktukrental.png',
    url: 'https://tuktukrental.com/'
  },
  {
    name: 'Worldwide International',
    logo: 'http://www.wweinternational.com/wp-content/uploads/2021/05/WWE.png',
    url: 'http://www.wweinternational.com/'
  },
  {
    name: 'MBE International',
    logo: 'https://cuttingedgesl.com/lovable-uploads/mbeinternational.png',
    url: 'http://www.mbeinternational.com/'
  },
  {
    name: 'CCE International',
    logo: 'http://www.cceinternational.com/images/logo.png',
    url: 'http://www.cceinternational.com/'
  }
];

const partners = [
  { 
    name: 'Google', 
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    services: [
      { name: 'Google Workspace', description: 'Gmail, Drive, Docs, Sheets, Slides, Meet and more' },
      { name: 'Google Cloud Platform', description: 'Compute Engine, Cloud Storage, BigQuery, Kubernetes Engine' },
      { name: 'Google Ads', description: 'Search, Display, Video, Shopping campaigns and analytics' }
    ]
  },
  { 
    name: 'Microsoft', 
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    services: [
      { name: 'Microsoft 365', description: 'Teams, Word, Excel, PowerPoint, Outlook, SharePoint and more' },
      { name: 'Azure', description: 'VMs, App Services, Storage, SQL, AI & Machine Learning' },
      { name: 'Dynamics 365', description: 'Sales, Customer Service, Finance, Supply Chain Management' },
      { name: 'Windows', description: 'Windows 11, Windows 10, Windows Server' }
    ]
  },
  { 
    name: 'AWS', 
    logo: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png',
    services: [
      { name: 'EC2', description: 'Virtual servers in the cloud with various instance types' },
      { name: 'S3', description: 'Object storage with industry-leading scalability and availability' },
      { name: 'RDS', description: 'Managed database service for MySQL, PostgreSQL, SQL Server' },
      { name: 'Lambda', description: 'Run code without provisioning or managing servers' }
    ]
  },
  { 
    name: 'Adobe', 
    logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg',
    services: [
      { name: 'Creative Cloud', description: 'Photoshop, Illustrator, InDesign, Premiere Pro, After Effects' },
      { name: 'Acrobat', description: 'Create, edit, sign, and manage PDFs professionally' },
      { name: 'Adobe Sign', description: 'Digital document signing and approval workflows' }
    ]
  },
  { 
    name: 'Autodesk', 
    logo: 'https://www.autodesk.com/content/dam/autodesk/www/images/resources/logo-autodesk-300x100.png',
    services: [
      { name: 'AutoCAD', description: 'Computer-aided design software for precise 2D and 3D drafting' },
      { name: 'Revit', description: 'BIM software for architects, structural engineers and contractors' },
      { name: 'Fusion 360', description: 'Integrated CAD, CAM, CAE, and PCB design software' }
    ]
  },
  { 
    name: 'SketchUp', 
    logo: 'https://static.trimble.com/sites/default/files/styles/large_3x/public/2021-03/logo-sketchup.png',
    services: [
      { name: 'SketchUp Pro', description: 'Intuitive 3D modeling tool for architects and designers' },
      { name: 'SketchUp Studio', description: 'Professional 3D modeling with advanced features and rendering' }
    ]
  },
  { 
    name: 'Dell', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png',
    services: [
      { name: 'Servers & Storage', description: 'PowerEdge servers, PowerVault storage, and Dell EMC solutions' },
      { name: 'Desktops & Laptops', description: 'OptiPlex, Latitude, Precision, and XPS systems' },
      { name: 'Networking', description: 'Switches, routers, and network management solutions' }
    ]
  },
  { 
    name: 'HP', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png',
    services: [
      { name: 'Computing Devices', description: 'EliteBook, ProBook, Z workstations, and commercial desktops' },
      { name: 'Printing Solutions', description: 'LaserJet, OfficeJet, DesignJet, and managed print services' },
      { name: 'Security Solutions', description: 'HP Sure Suite, device security, and secure document workflows' }
    ]
  },
  { 
    name: 'Lenovo', 
    logo: 'https://www.lenovo.com/medias/lenovo-logo-full.png?context=bWFzdGVyfHJvb3R8MzcyODl8aW1hZ2UvcG5nfGhmNy9oZDMvOTQ3MDU0MDUyMzU1MC5wbmd8M2Y1NDEzYTQ4ZTQ2MTNhZmZlZmZkZDYwMmJkZmU2YjcyN2YxNTgzYzc4OTVhZDg0YTFhOGRmZGEyMzMyY2JhMA',
    services: [
      { name: 'ThinkPad', description: 'Business laptops with industry-leading reliability and security' },
      { name: 'ThinkCentre', description: 'Commercial desktops optimized for business performance' },
      { name: 'ThinkServer', description: 'Enterprise-grade servers for businesses of all sizes' }
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
              <a 
                key={index} 
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl h-24 hover:shadow-md transition-shadow"
              >
                <img src={client.logo} alt={client.name} className="max-h-16 max-w-full" />
              </a>
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
