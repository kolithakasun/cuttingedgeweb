
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

// Updated Tuk Tuk Rental logo with the newly uploaded image
const clients = [
  {
    name: 'Unilever',
    logo: 'https://www.unilever.com.lk/core-assets/logos/logo-animated.svg',
    url: 'https://www.unilever.com.lk/'
  },
  {
    name: 'Tuk Tuk Rental',
    logo: 'lovable-uploads/7cdbc548-87fd-4d70-ad02-626876564e8c.png',
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
    logo: '/lovable-uploads/WWE.png',
    url: 'http://www.wweinternational.com/'
  },
  {
    name: 'CCE International',
    logo: '/lovable-uploads/cce-logo.png',
    url: 'http://www.cceinternational.com/'
  },
  {
    name: 'VElevenOne',
    logo: '/lovable-uploads/V-Eleven-One-logo.png',
    url: 'https://www.velevenone.com/'
  }
];

const partners = [
  {
    name: 'Google',
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    technologies: [
      {
        name: 'Google Workspace',
        description: 'Gmail, Drive, Docs, Sheets, Slides, Meet and more'
      },
      {
        name: 'Google Cloud Platform',
        description: 'Compute Engine, Cloud Storage, BigQuery, Kubernetes Engine'
      },
      {
        name: 'Google Ads',
        description: 'Search, Display, Video, Shopping campaigns and analytics'
      }
    ]
  },
  {
    name: 'Microsoft',
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    technologies: [
      {
        name: 'Microsoft 365',
        description: 'Word, Excel, PowerPoint, Outlook, Teams, SharePoint and more'
      },
      {
        name: 'Azure',
        description: 'Virtual Machines, App Services, SQL Database, Blob Storage'
      },
      {
        name: 'Dynamics 365',
        description: 'Sales, Customer Service, Field Service, Marketing modules'
      },
      {
        name: 'Windows',
        description: 'Client and Server operating systems, security and management'
      }
    ]
  },
  {
    name: 'AWS',
    logo: '/lovable-uploads/cc8fb853-4c1f-4b10-8fe0-752100360a7c.png',
    technologies: [
      {
        name: 'Compute',
        description: 'EC2, Lambda, EKS, ECS, Fargate, Elastic Beanstalk'
      },
      {
        name: 'Databases',
        description: 'RDS, DynamoDB, Aurora, Redshift, ElastiCache'
      },
      {
        name: 'Networking',
        description: 'VPC, CloudFront, Route 53, API Gateway, Direct Connect'
      },
      {
        name: 'Containers',
        description: 'EKS, ECS, ECR, App Mesh, Copilot'
      }
    ]
  },
  {
    name: 'Adobe',
    logo: '/lovable-uploads/adobe-logo-1.png',
    technologies: [
      {
        name: 'Creative Cloud',
        description: 'Photoshop, Illustrator, InDesign, Premiere Pro, After Effects'
      },
      {
        name: 'Document Cloud',
        description: 'Acrobat DC, PDF services, e-signature solutions'
      },
      {
        name: 'Experience Cloud',
        description: 'Analytics, Target, Campaign, Experience Manager'
      }
    ]
  },
  {
    name: 'Autodesk',
    logo: '/lovable-uploads/autodesk-logo.jpg',
    technologies: [
      {
        name: 'AutoCAD',
        description: '2D and 3D CAD design, drafting, modeling, and drawing'
      },
      {
        name: 'Revit',
        description: 'BIM software for architects, engineers, and construction'
      },
      {
        name: 'Fusion 360',
        description: 'Integrated CAD, CAM, CAE, and PCB design platform'
      }
    ]
  },
  {
    name: 'SketchUp',
    logo: '/lovable-uploads/sketchup-logo.png',
    technologies: [
      {
        name: 'SketchUp Pro',
        description: '3D modeling for architecture, interior design, and construction'
      },
      {
        name: 'SketchUp Studio',
        description: 'Advanced energy analysis and high-fidelity visualization'
      },
      {
        name: 'SketchUp for Web',
        description: 'Cloud-based 3D modeling accessible from any browser'
      }
    ]
  },
  {
    name: 'Dell',
    logo: '/lovable-uploads/Dell_Logo.svg.png',
    technologies: [
      {
        name: 'Servers & Storage',
        description: 'PowerEdge servers, PowerStore, Unity XT, PowerScale storage'
      },
      {
        name: 'Client Solutions',
        description: 'Latitude, OptiPlex, Precision, XPS laptops and desktops'
      },
      {
        name: 'Networking',
        description: 'PowerSwitch networking, SD-WAN solutions, data protection'
      }
    ]
  },
  {
    name: 'HP',
    logo: '/lovable-uploads/Hewlett-Packard-Logo-2009.png',
    technologies: [
      {
        name: 'Computing',
        description: 'EliteBook, ProBook, Z workstations, Elite desktops'
      },
      {
        name: 'Printing',
        description: 'LaserJet, OfficeJet, DesignJet, Managed Print Services'
      },
      {
        name: 'Enterprise Systems',
        description: 'ProLiant servers, Storage, Networking, Aruba wireless'
      }
    ]
  },
  {
    name: 'Lenovo',
    logo: '/lovable-uploads/88d6cc73-451e-4266-8a99-d89216eefeb8.png',
    technologies: [
      {
        name: 'ThinkPad & ThinkBook',
        description: 'Business laptops, ultrabooks, and mobile workstations'
      },
      {
        name: 'ThinkCentre & ThinkStation',
        description: 'Business desktops, all-in-ones, and workstations'
      },
      {
        name: 'ThinkSystem & ThinkAgile',
        description: 'Servers, storage, networking, and hyperconverged systems'
      }
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

        {/* Clients Section with Carousel */}
        <Motion animation="fade-up" className="mt-20">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-4xl font-bold font-4xl bg-secondary text-primary rounded-full">Our Clients</span>
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
            <span className="px-3 py-1 text-4xl font-bold font-4xl bg-secondary text-primary rounded-full">Our Partners</span>
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
                  <div className="space-y-3">
                    {partner.technologies.map((tech, techIdx) => (
                      <div key={techIdx}>
                        <h4 className="font-medium text-primary">{tech.name}</h4>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    ))}
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
