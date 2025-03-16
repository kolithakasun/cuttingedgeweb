
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define service details with more comprehensive information
const serviceDetails = {
  "it-infrastructure": {
    title: "IT Infrastructure",
    description: "Comprehensive IT infrastructure solutions tailored to your business needs",
    icon: "Server",
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
    approach: "We take a consultative approach to understand your business needs before designing and implementing IT infrastructure solutions. Our team of certified professionals ensures seamless integration with your existing systems and provides ongoing support to maximize performance and reliability."
  },
  "cybersecurity": {
    title: "Cybersecurity",
    description: "Protecting your business from evolving cyber threats",
    icon: "Shield",
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
      }
    ],
    approach: "We implement defense-in-depth security strategies tailored to your risk profile and business needs. Our approach combines cutting-edge technologies, best practices, and ongoing monitoring to provide comprehensive protection for your digital assets."
  },
  "cloud-services": {
    title: "Cloud Services",
    description: "Seamless migration and management of cloud solutions",
    icon: "Cloud",
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
    approach: "We help you navigate the complexities of cloud adoption with a strategic approach focused on your business objectives. Our certified cloud specialists ensure smooth migration, optimal configuration, and ongoing management of your cloud environment."
  },
  "managed-it-services": {
    title: "Managed IT Services",
    description: "Proactive monitoring and management of your IT environment",
    icon: "Smartphone",
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
    approach: "Our managed services model delivers proactive maintenance, rapid support, and strategic guidance through a team of certified IT professionals. We become your trusted technology partner, ensuring your IT environment supports and enhances your business operations."
  },
  "digital-transformation": {
    title: "Digital Transformation",
    description: "Strategic guidance to help your business leverage digital technologies",
    icon: "MonitorSmartphone",
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
      }
    ],
    approach: "We approach digital transformation as a strategic journey unique to each organization. Our consultative process identifies opportunities for digital enhancement, develops implementation strategies, and guides you through the change management required for successful transformation."
  },
  "custom-software": {
    title: "Custom Software",
    description: "Tailored software solutions designed to address your unique business challenges",
    icon: "Code",
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
    approach: "Our development process follows industry best practices, combining agile methodologies with rigorous quality assurance. We collaborate closely with stakeholders throughout the development lifecycle to ensure the final solution precisely meets your business requirements."
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
        <section className="bg-blue-50 py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <Button 
              variant="ghost" 
              className="mb-8 pl-0" 
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <Motion animation="fade-up">
              <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">{service.title}</h1>
              <p className="text-xl text-gray-600 max-w-3xl">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.offerings.map((offering, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{offering.title}</h3>
                    <p className="text-gray-600">{offering.description}</p>
                  </div>
                ))}
              </div>
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
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
