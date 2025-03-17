
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Globe, Code } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define a proper type for the service details
type ServiceDetail = {
  title: string;
  description: string;
  icon: string;
  heroImage: string;
  fullDescription: string;
  benefits: string[];
  offerings: { title: string; description: string; }[];
  approach: string;
  vendorLogos: { name: string; logo: string; }[];
  additionalContent?: React.ReactNode;
};

// Define service details with more comprehensive information
const serviceDetails: Record<string, ServiceDetail> = {
  "it-infrastructure": {
    title: "IT Infrastructure",
    description: "Comprehensive IT infrastructure solutions tailored to your business needs",
    icon: "Server",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    fullDescription: `Our IT Infrastructure services provide the foundation for your business technology needs. We design, implement, and manage robust infrastructure solutions that are scalable, secure, and aligned with your business objectives.`,
    benefits: [
      "Improved reliability and performance",
      "Reduced downtime and operational disruptions",
      "Scalable solutions that grow with your business",
      "Cost-effective infrastructure management",
      "Enhanced security and compliance",
      "24/7 monitoring and support"
    ],
    offerings: [
      {
        title: "Network Design & Implementation",
        description: "Custom network architecture designed for reliability, security, and performance."
      },
      {
        title: "Server Infrastructure",
        description: "Physical and virtual server solutions with redundancy and disaster recovery capabilities."
      },
      {
        title: "Storage Solutions",
        description: "Scalable and secure data storage systems with backup and recovery options."
      },
      {
        title: "Virtualization",
        description: "Optimize resource utilization and improve flexibility with virtualization technologies."
      }
    ],
    approach: "We take a consultative approach to understand your business needs before designing and implementing IT infrastructure solutions. Our team of certified professionals ensures seamless integration with your existing systems and provides ongoing support to maximize performance and reliability.",
    vendorLogos: [
      { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" },
      { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png" },
      { name: "Cisco", logo: "https://www.cisco.com/c/dam/en/us/td/i/300001-400000/310001-320000/319001-320000/319641.jpg" },
      { name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1200px-Vmware.svg.png" }
    ],
    additionalContent: null
  },
  "cybersecurity": {
    title: "Cybersecurity",
    description: "Protecting your business from evolving cyber threats",
    icon: "Shield",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    fullDescription: `In today's digital landscape, cybersecurity is not optional. Our comprehensive security solutions protect your business from increasing cyber threats, safeguarding your data, systems, and reputation.`,
    benefits: [
      "Protection against evolving cyber threats",
      "Compliance with industry regulations",
      "Reduced risk of data breaches",
      "Minimized downtime from security incidents",
      "Enhanced customer trust and confidence",
      "Security awareness across your organization"
    ],
    offerings: [
      {
        title: "Security Assessment & Auditing",
        description: "Comprehensive evaluation of your security posture with detailed recommendations."
      },
      {
        title: "Endpoint Protection",
        description: "Advanced solutions to secure all devices connected to your network."
      },
      {
        title: "Email Security",
        description: "Protection against phishing, malware, and other email-based threats."
      },
      {
        title: "Security Monitoring & Response",
        description: "24/7 monitoring with rapid incident response capabilities."
      },
      {
        title: "Advanced Threat Protection",
        description: "Multi-layered defense against sophisticated threats and zero-day vulnerabilities."
      }
    ],
    approach: "We implement defense-in-depth security strategies tailored to your risk profile and business needs. Our approach combines cutting-edge technologies, best practices, and ongoing monitoring to provide comprehensive protection for your digital assets.",
    vendorLogos: [
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "ESET", logo: "https://www.eset.com/fileadmin/en/home/company/brand-design/logo/eset-logo-400x250.png" },
      { name: "Symantec", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Symantec_logo10.svg/2560px-Symantec_logo10.svg.png" },
      { name: "Sentinel", logo: "https://miro.medium.com/v2/resize:fit:1400/1*S3nFu_D3JQaD9sXLNVfDtg.png" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Enterprise Security Solutions</h3>
        <p className="mb-6">Our enterprise security offerings include implementation and management of industry-leading platforms:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <img 
              src="https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/microsoft-brand-guidelines/logos/azure-sentinel-logo.png" 
              alt="Azure Sentinel" 
              className="h-12 mb-4" 
            />
            <h4 className="text-lg font-semibold mb-2">Azure Sentinel</h4>
            <p className="text-gray-600">Cloud-native SIEM solution that provides intelligent security analytics for your entire enterprise.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <img 
              src="https://www.microsoft.com/en-us/security/assets/images/hero/defender-logo.png" 
              alt="Microsoft Defender" 
              className="h-12 mb-4" 
            />
            <h4 className="text-lg font-semibold mb-2">Microsoft Defender</h4>
            <p className="text-gray-600">Advanced threat protection for endpoints, identity, email, and applications.</p>
          </div>
        </div>
        
        <p>Our security experts will help you implement these solutions, configure them to your specific requirements, and provide ongoing management to ensure your organization stays protected from evolving threats.</p>
      </div>
    )
  },
  "cloud-services": {
    title: "Cloud Services",
    description: "Seamless migration and management of cloud solutions",
    icon: "Cloud",
    heroImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    fullDescription: `Our cloud services help businesses leverage the flexibility, scalability, and cost-efficiency of cloud computing. We provide strategic guidance and implementation support for public, private, and hybrid cloud environments.`,
    benefits: [
      "Increased operational agility",
      "Improved collaboration and accessibility",
      "Reduced capital expenditure",
      "Scalability to meet changing business needs",
      "Enhanced disaster recovery capabilities",
      "Access to advanced technologies"
    ],
    offerings: [
      {
        title: "Cloud Migration",
        description: "Seamless transition of applications and data to cloud environments."
      },
      {
        title: "Cloud Infrastructure Management",
        description: "Ongoing optimization and management of cloud resources."
      },
      {
        title: "Multi-Cloud Strategy",
        description: "Strategic implementations across multiple cloud providers."
      },
      {
        title: "Cloud Security",
        description: "Specialized security measures for cloud environments."
      }
    ],
    approach: "We help you navigate the complexities of cloud adoption with a strategic approach focused on your business objectives. Our certified cloud specialists ensure smooth migration, optimal configuration, and ongoing management of your cloud environment.",
    vendorLogos: [
      { name: "AWS", logo: "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png" },
      { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" },
      { name: "Google Cloud", logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png" }
    ],
    additionalContent: null
  },
  "managed-it-services": {
    title: "Managed IT Services",
    description: "Proactive monitoring and management of your IT environment",
    icon: "Smartphone",
    heroImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
    fullDescription: `Our Managed IT Services provide comprehensive support for your technology infrastructure, allowing you to focus on your core business. We proactively monitor, manage, and optimize your IT environment to ensure reliability and performance.`,
    benefits: [
      "Predictable IT costs with fixed monthly pricing",
      "Reduced downtime through proactive maintenance",
      "Fast resolution of IT issues",
      "Access to specialized IT expertise",
      "Improved security and compliance",
      "Strategic IT planning and guidance"
    ],
    offerings: [
      {
        title: "24/7 Monitoring & Support",
        description: "Round-the-clock monitoring with rapid response to issues."
      },
      {
        title: "Help Desk Services",
        description: "User support for day-to-day technology challenges."
      },
      {
        title: "Patch Management",
        description: "Timely updates to ensure security and performance."
      },
      {
        title: "IT Strategy & Consulting",
        description: "Strategic guidance for technology investments and roadmaps."
      }
    ],
    approach: "Our managed services model delivers proactive maintenance, rapid support, and strategic guidance through a team of certified IT professionals. We become your trusted technology partner, ensuring your IT environment supports and enhances your business operations.",
    vendorLogos: [
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" },
      { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png" },
      { name: "Cisco", logo: "https://www.cisco.com/c/dam/en/us/td/i/300001-400000/310001-320000/319001-320000/319641.jpg" }
    ],
    additionalContent: null
  },
  "digital-transformation": {
    title: "Digital Transformation",
    description: "Strategic guidance to help your business leverage digital technologies",
    icon: "MonitorSmartphone",
    heroImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1",
    fullDescription: `Our Digital Transformation services help businesses reimagine their operations through the strategic application of digital technologies. We guide you through the journey of adapting to the digital age, enhancing customer experiences and operational efficiency.`,
    benefits: [
      "Enhanced customer experience",
      "Streamlined business processes",
      "Improved operational efficiency",
      "Data-driven decision making",
      "Competitive advantage through innovation",
      "Adaptability to market changes"
    ],
    offerings: [
      {
        title: "Digital Strategy Development",
        description: "Custom roadmaps for digital initiatives aligned with business goals."
      },
      {
        title: "Process Automation",
        description: "Streamlining operations through automated workflows."
      },
      {
        title: "Data Analytics & Insights",
        description: "Solutions to extract meaningful insights from your data."
      },
      {
        title: "Customer Experience Enhancement",
        description: "Digital tools to improve customer engagement and satisfaction."
      },
      {
        title: "Web Development",
        description: "Custom websites and web applications that drive business growth."
      }
    ],
    approach: "We approach digital transformation as a strategic journey unique to each organization. Our consultative process identifies opportunities for digital enhancement, develops implementation strategies, and guides you through the change management required for successful transformation.",
    vendorLogos: [
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "Adobe", logo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" },
      { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Web Development Services</h3>
        <p className="mb-6">Our web development team creates custom websites and web applications that help your business succeed online:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <Globe className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-lg font-semibold mb-2">Corporate Websites</h4>
            <p className="text-gray-600">Professional business websites that establish your online presence and brand identity.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <Code className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-lg font-semibold mb-2">Web Applications</h4>
            <p className="text-gray-600">Custom web apps for internal processes, customer portals, and business automation.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <svg className="h-10 w-10 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
            <h4 className="text-lg font-semibold mb-2">E-Commerce</h4>
            <p className="text-gray-600">Online stores with secure payment processing, inventory management, and customer accounts.</p>
          </div>
        </div>
      </div>
    )
  },
  "custom-software": {
    title: "Custom Software",
    description: "Tailored software solutions designed to address your unique business challenges",
    icon: "Code",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    fullDescription: `Our Custom Software Development services deliver tailor-made applications designed specifically for your business needs. When off-the-shelf solutions aren't enough, we create custom software that streamlines your operations and enhances your competitive advantage.`,
    benefits: [
      "Solutions tailored to your specific requirements",
      "Streamlined workflows and processes",
      "Improved operational efficiency",
      "Integration with existing systems",
      "Scalability to accommodate business growth",
      "Ongoing support and enhancements"
    ],
    offerings: [
      {
        title: "Custom Application Development",
        description: "Bespoke applications built from the ground up to meet specific needs."
      },
      {
        title: "Web Applications",
        description: "Custom web-based solutions that can be accessed from anywhere."
      },
      {
        title: "Software Integration",
        description: "Connecting disparate systems for seamless data flow."
      },
      {
        title: "Legacy System Modernization",
        description: "Updating and enhancing existing software applications."
      },
      {
        title: "Mobile Application Development",
        description: "Custom apps for iOS and Android platforms."
      }
    ],
    approach: "Our development process follows industry best practices, combining agile methodologies with rigorous quality assurance. We collaborate closely with stakeholders throughout the development lifecycle to ensure the final solution precisely meets your business requirements.",
    vendorLogos: [
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "AWS", logo: "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png" },
      { name: "Google Cloud", logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png" }
    ],
    additionalContent: (
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Our Development Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Frontend Technologies</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="max-h-8" />
                </div>
                <span>React</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue.js" className="max-h-8" />
                </div>
                <span>Vue.js</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="Angular" className="max-h-8" />
                </div>
                <span>Angular</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="max-h-8" />
                </div>
                <span>TypeScript</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Backend Technologies</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="max-h-8" />
                </div>
                <span>Node.js</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" className="max-h-8" />
                </div>
                <span>PHP</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt=".NET" className="max-h-8" />
                </div>
                <span>.NET</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="max-h-8" />
                </div>
                <span>Python</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  // Get the service details or redirect if not found
  const service = serviceId && serviceDetails[serviceId as keyof typeof serviceDetails];
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Button onClick={() => navigate('/services')} className="mt-4">
            See all services
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Service Hero Section */}
        <section className="relative bg-blue-800 text-white py-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={service.heroImage} 
              alt={service.title} 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-blue-900/70" />
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <Button 
              variant="outline" 
              className="mb-8 pl-0 text-white border-white hover:bg-white/10" 
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <Motion animation="fade-up">
              <span className="px-3 py-1 text-sm font-medium bg-white/20 text-white rounded-full">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">{service.title}</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {service.description}
              </p>
            </Motion>
          </div>
        </section>
        
        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <Motion animation="fade-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-10">
                  {service.fullDescription}
                </p>
              </div>
            </Motion>
            
            {/* Benefits */}
            <Motion animation="fade-up" className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Service Offerings */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <Motion animation="fade-up">
              <h2 className="text-3xl font-bold mb-12 text-center">Our {service.title} Offerings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.offerings.map((offering, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{offering.title}</h3>
                    <p className="text-gray-600">{offering.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Technology Partners */}
              {service.vendorLogos && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">Technologies We Work With</h3>
                  <div className="flex flex-wrap justify-center gap-8 bg-white p-8 rounded-xl">
                    {service.vendorLogos.map((vendor, index) => (
                      <div key={index} className="flex items-center justify-center">
                        <img 
                          src={vendor.logo} 
                          alt={vendor.name} 
                          className="max-h-12 max-w-[150px] object-contain" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Additional Content if available */}
              {service.additionalContent && service.additionalContent}
              
            </Motion>
          </div>
        </section>
        
        {/* Approach */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <Motion animation="fade-up">
              <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
              <div className="bg-blue-50 p-8 rounded-xl">
                <p className="text-lg leading-relaxed">
                  {service.approach}
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold mb-6">Ready to get started?</h3>
                <Button 
                  size="lg" 
                  onClick={() => {
                    navigate('/#contact');
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </Motion>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
