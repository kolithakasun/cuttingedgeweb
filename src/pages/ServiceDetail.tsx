
import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
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
      },
      {
        title: "Infrastructure Monitoring",
        description: "Establishment and support of on-premises, private and public cloud platforms with 24/7 monitoring."
      },
      {
        title: "Infrastructure Optimization",
        description: "Proactive and continuous improvement of platform configuration, cost management and performance."
      }
    ],
    approach: "We take a consultative approach to understand your business needs before designing and implementing IT infrastructure solutions. Our team of certified professionals ensures seamless integration with your existing systems and provides ongoing support to maximize performance and reliability.",
    vendorLogos: [
      { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" },
      { name: "HP", logo: "/lovable-uploads/faf8caf7-df16-48bb-8079-3637aee7a0ec.png" },
      { name: "Cisco", logo: "/lovable-uploads/b0af2143-33ae-43e6-9bcc-6dc0035cb1a4.png" },
      { name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1200px-Vmware.svg.png" },
      { name: "Fortinet", logo: "/lovable-uploads/b6c903d7-c3a6-4c77-975c-9482dbe79f65.png" }
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
      },
      {
        title: "Vulnerability Assessment",
        description: "Comprehensive scanning and testing to identify security weaknesses in your systems."
      },
      {
        title: "Penetration Testing",
        description: "Ethical hacking to identify vulnerabilities before malicious actors can exploit them."
      }
    ],
    approach: "We implement defense-in-depth security strategies tailored to your risk profile and business needs. Our approach combines cutting-edge technologies, best practices, and ongoing monitoring to provide comprehensive protection for your digital assets.",
    vendorLogos: [
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "ESET", logo: "/lovable-uploads/3e8feea6-19e6-4dca-beff-9a1ce4c1ec37.png" },
      { name: "Symantec", logo: "/lovable-uploads/84cd7d71-87dd-4a22-a16a-fd7d98f1965a.png" },
      { name: "SentinelOne", logo: "/lovable-uploads/76a455ae-a0e1-43dc-a63f-304c6f4e74f0.png" },
      { name: "Nessus", logo: "https://www.tenable.com/sites/drupal.dmz.tenablesecurity.com/files/images/product/nessus/Nessus-product-logo.svg" }
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
        
        <h3 className="text-xl font-bold mb-4 mt-8">Vulnerability Assessment and Penetration Testing (VAPT)</h3>
        <p className="text-gray-700 mb-6">
          Our VAPT services help identify and address security vulnerabilities before they can be exploited by malicious actors. Using professional tools like Nessus, Metasploit, and other specialized security testing platforms, we provide:
        </p>
        <ul className="space-y-2 list-disc pl-6 text-gray-700 mb-4">
          <li>Comprehensive vulnerability scanning</li>
          <li>Detailed security assessment reports</li>
          <li>Prioritized remediation recommendations</li>
          <li>Security hardening guidance</li>
          <li>Compliance verification for standards like PCI-DSS, HIPAA, and GDPR</li>
        </ul>
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
      },
      {
        title: "Cost Optimization",
        description: "Strategic assessment and continuous optimization to reduce cloud spending while maximizing value."
      },
      {
        title: "Performance Optimization",
        description: "Fine-tuning cloud resources to achieve optimal performance for your applications and workloads."
      }
    ],
    approach: "We help you navigate the complexities of cloud adoption with a strategic approach focused on your business objectives. Our certified cloud specialists ensure smooth migration, optimal configuration, and ongoing management of your cloud environment.",
    vendorLogos: [
      { name: "AWS", logo: "/lovable-uploads/bbce37d3-76e5-4a2a-838b-2b1aebc39945.png" },
      { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" },
      { name: "Google Cloud", logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Cloud Cost & Performance Optimization</h3>
        <p className="mb-6">Our specialized optimization services help you get the most from your cloud investments:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Cost Management</h4>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>Detailed analysis of current cloud spending</li>
              <li>Identification of unused or underutilized resources</li>
              <li>Right-sizing recommendations for instances and services</li>
              <li>Reserved instance planning and optimization</li>
              <li>Automated cost control implementation</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Performance Tuning</h4>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>System-wide performance assessment</li>
              <li>Application load testing and analysis</li>
              <li>Resource allocation optimization</li>
              <li>Content delivery and caching strategy</li>
              <li>Database performance tuning</li>
            </ul>
          </div>
        </div>
      </div>
    )
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
      },
      {
        title: "Linux & Windows Administration",
        description: "Expert management of both Linux and Windows server environments."
      },
      {
        title: "Service Desk Solutions",
        description: "Implementation and management of enterprise service desk platforms."
      }
    ],
    approach: "Our managed services model delivers proactive maintenance, rapid support, and strategic guidance through a team of certified IT professionals. We become your trusted technology partner, ensuring your IT environment supports and enhances your business operations.",
    vendorLogos: [
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" },
      { name: "HP", logo: "/lovable-uploads/faf8caf7-df16-48bb-8079-3637aee7a0ec.png" },
      { name: "Cisco", logo: "/lovable-uploads/b0af2143-33ae-43e6-9bcc-6dc0035cb1a4.png" },
      { name: "Linux", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Service Desk Technologies</h3>
        <p className="mb-6">We implement and manage industry-leading service desk and IT management platforms:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img 
              src="https://www.servicenow.com/content/dam/servicenow-assets/images/meganav/servicenow-header-logo.svg" 
              alt="ServiceNow" 
              className="h-10 mx-auto mb-4" 
            />
            <h4 className="text-lg font-semibold mb-2">ServiceNow</h4>
            <p className="text-gray-600">Enterprise service management platform</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img 
              src="https://www.pagerduty.com/wp-content/uploads/2021/10/pd-logo-color-no-tm.svg" 
              alt="PagerDuty" 
              className="h-10 mx-auto mb-4" 
            />
            <h4 className="text-lg font-semibold mb-2">PagerDuty</h4>
            <p className="text-gray-600">Incident management platform</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img 
              src="https://www.xmatters.com/hubfs/xmatters-logo-black-svg.svg" 
              alt="xMatters" 
              className="h-10 mx-auto mb-4" 
            />
            <h4 className="text-lg font-semibold mb-2">xMatters</h4>
            <p className="text-gray-600">Service reliability platform</p>
          </div>
        </div>
      </div>
    )
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
      { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" },
      { name: "Hubspot", logo: "https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg" },
      { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" }
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
        
        <h3 className="text-2xl font-bold mb-4 mt-8">Technology Platforms</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png" 
                 alt="WordPress" 
                 className="h-12 mb-3" />
            <span className="text-sm font-medium">WordPress</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                 alt="React" 
                 className="h-12 mb-3" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" 
                 alt="Tailwind CSS" 
                 className="h-12 mb-3" />
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg" 
                 alt="Node.js" 
                 className="h-12 mb-3" />
            <span className="text-sm font-medium">Node.js</span>
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
      },
      {
        title: "API Development",
        description: "Facilitate effective integration and automation by allowing your applications to communicate and exchange data."
      }
    ],
    approach: "Our development process follows industry best practices, combining agile methodologies with rigorous quality assurance. We collaborate closely with stakeholders throughout the development lifecycle to ensure the final solution precisely meets your business requirements.",
    vendorLogos: [
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "AWS", logo: "/lovable-uploads/bbce37d3-76e5-4a2a-838b-2b1aebc39945.png" },
      { name: "Google Cloud", logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png" }
    ],
    additionalContent: (
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Our Development Technologies</h3>
        <p className="mb-6 text-gray-700">We work with a wide range of technologies to ensure we can build the best solution for your needs. While not exhaustive, here's a sample of the technologies we work with:</p>
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
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png" alt="WordPress" className="max-h-8" />
                </div>
                <span>WordPress</span>
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
              <li className="flex items-center">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="Kotlin" className="max-h-8" />
                </div>
                <span>Kotlin</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4">API Development</h4>
          <p className="text-gray-700 mb-4">
            Our API development services facilitate effective integration and automation by enabling your applications to communicate and exchange data efficiently. We build secure, reliable, and well-documented APIs that:
          </p>
          <ul className="space-y-2 list-disc pl-6 text-gray-700">
            <li>Connect disparate systems and platforms</li>
            <li>Enable third-party integrations</li>
            <li>Provide mobile app backend services</li>
            <li>Support microservices architectures</li>
            <li>Enable data sharing between business units or partners</li>
          </ul>
        </div>
      </div>
    )
  },
  "data-management": {
    title: "Data Management",
    description: "Effectively store, manage and analyze your data with industry leading technology and fast implementations",
    icon: "Database",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    fullDescription: `Our Data Management services provide comprehensive solutions for storing, organizing, analyzing, and securing your valuable business data. From data warehousing to advanced analytics, we help you leverage your data as a strategic asset.`,
    benefits: [
      "Improved data accessibility and usability",
      "Enhanced data security and compliance",
      "Better decision making through reliable data",
      "Reduced operational costs",
      "Simplified data architecture",
      "Increased data quality and consistency"
    ],
    offerings: [
      {
        title: "Data Architecture Design",
        description: "Strategic design of data structures, models, and flows tailored to your business needs."
      },
      {
        title: "Database Implementation",
        description: "Deployment of relational, NoSQL, or hybrid database solutions based on your requirements."
      },
      {
        title: "Data Warehouse Solutions",
        description: "Design and implementation of comprehensive data warehousing solutions."
      },
      {
        title: "Data Migration & Integration",
        description: "Accurate and efficient transfer of data using the best available tools and proven practices."
      },
      {
        title: "Master Data Management",
        description: "Establishing a single source of truth for critical business data domains."
      },
      {
        title: "Data Governance",
        description: "Implementation of policies and procedures to ensure data quality and compliance."
      }
    ],
    approach: "We take a strategic approach to data management, understanding your business needs before designing and implementing solutions. Our focus is on creating sustainable data ecosystems that grow with your organization, ensuring data remains accessible, secure, and valuable.",
    vendorLogos: [
      { name: "Microsoft SQL Server", logo: "https://www.microsoft.com/en-us/sql-server/img/sql-server-logo.svg" },
      { name: "Oracle", logo: "https://www.oracle.com/a/ocom/img/rc30v1-oracle-logo.png" },
      { name: "MongoDB", logo: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" },
      { name: "AWS", logo: "/lovable-uploads/bbce37d3-76e5-4a2a-838b-2b1aebc39945.png" },
      { name: "Snowflake", logo: "https://www.snowflake.com/wp-content/themes/snowflake/assets/img/logo-blue.svg" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Data Migration & Transitions</h3>
        <p className="mb-6">Our data migration services ensure accurate and efficient transfer of your valuable data assets:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Methodology</h4>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>Comprehensive data assessment and mapping</li>
              <li>Detailed migration planning and risk assessment</li>
              <li>Test migrations with validation protocols</li>
              <li>Carefully executed production migration</li>
              <li>Post-migration verification and optimization</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Key Benefits</h4>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>Minimal business disruption</li>
              <li>Data integrity preservation</li>
              <li>Improved data quality through cleansing</li>
              <li>Reduced risk of data loss</li>
              <li>Optimized performance in the new environment</li>
            </ul>
          </div>
        </div>
        
        <p className="text-gray-700 text-center">
          We handle migrations across diverse platforms, including legacy systems, on-premises databases, 
          cloud environments, and SaaS platforms, ensuring a smooth transition regardless of complexity.
        </p>
      </div>
    )
  },
  "enterprise-integration": {
    title: "Enterprise Integration",
    description: "Remove manual processes to improve the accuracy and timeliness of information across your systems",
    icon: "Network",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    fullDescription: `Our Enterprise Integration solutions streamline your business processes by connecting disparate systems and applications. We eliminate information silos and manual data transfer, creating a unified ecosystem where information flows seamlessly between your business systems.`,
    benefits: [
      "Increased operational efficiency",
      "Improved data accuracy and consistency",
      "Automated business processes",
      "Enhanced visibility across systems",
      "Reduced manual data entry and associated errors",
      "Faster time-to-market for products and services"
    ],
    offerings: [
      {
        title: "API Strategy & Development",
        description: "Strategic design and implementation of APIs to enable system communication."
      },
      {
        title: "System Integration",
        description: "Connecting existing applications and platforms to create a unified business ecosystem."
      },
      {
        title: "Enterprise Service Bus (ESB)",
        description: "Implementation of middleware solutions to facilitate communication between systems."
      },
      {
        title: "B2B Integration",
        description: "Connecting your business systems with partners, suppliers, and customers."
      },
      {
        title: "iPaaS Implementation",
        description: "Cloud-based integration platform deployment for flexible system connectivity."
      },
      {
        title: "Workflow Automation",
        description: "Streamlining business processes through automated workflows and integrations."
      }
    ],
    approach: "We take a methodical approach to enterprise integration, beginning with a thorough analysis of your current systems and business processes. Our team designs integration architectures that are scalable, maintainable, and aligned with your long-term business strategy, ensuring maximum return on your investment.",
    vendorLogos: [
      { name: "MuleSoft", logo: "https://www.mulesoft.com/sites/default/files/2020-05/Mulesoft%20Logo.png" },
      { name: "Dell Boomi", logo: "https://boomi.com/wp-content/uploads/2018/12/Boomi_Logo_Light-BG_Registered_S-1.png" },
      { name: "Informatica", logo: "https://www.informatica.com/content/dam/informatica-com/global/informatica-logo.png" },
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">API Development & Management</h3>
        <p className="mb-6">Our comprehensive API development services include:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">API Design</h4>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>RESTful API architecture</li>
              <li>GraphQL implementations</li>
              <li>SOAP and legacy API support</li>
              <li>API documentation standards</li>
              <li>Security-first approach</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">API Development</h4>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>Custom API implementation</li>
              <li>Microservices architecture</li>
              <li>API gateway configuration</li>
              <li>Authentication & authorization</li>
              <li>Error handling & logging</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">API Management</h4>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>Lifecycle management</li>
              <li>Version control & migration</li>
              <li>Traffic monitoring & throttling</li>
              <li>Analytics & reporting</li>
              <li>Developer portal setup</li>
            </ul>
          </div>
        </div>
        
        <p className="text-gray-700 text-center">
          Our API solutions facilitate seamless integration and automation, allowing your applications to communicate 
          effectively and exchange data securely, driving innovation and operational efficiency.
        </p>
      </div>
    )
  },
  "service-desk": {
    title: "Service Desk",
    description: "Level 1, 2 & 3 triage and issue management for all your IT needs",
    icon: "RefreshCw",
    heroImage: "https://images.unsplash.com/photo-1573497019726-1c43aad9b004",
    fullDescription: `Our Service Desk solutions provide comprehensive technical support through a structured approach to IT service management. From handling day-to-day user inquiries to resolving complex technical issues, our team ensures your technology continues to serve your business needs efficiently.`,
    benefits: [
      "Single point of contact for all IT issues",
      "Faster resolution of technical problems",
      "Consistent support experience",
      "Reduced IT downtime",
      "Detailed tracking and reporting of IT issues",
      "Continuous service improvement"
    ],
    offerings: [
      {
        title: "Level 1 Support",
        description: "First-line response for common issues, user account management, and basic troubleshooting."
      },
      {
        title: "Level 2 Support",
        description: "Advanced technical support for more complex issues requiring specialized knowledge."
      },
      {
        title: "Level 3 Support",
        description: "Expert-level support involving system architects and senior specialists for critical issues."
      },
      {
        title: "IT Service Management",
        description: "Implementation of ITIL-aligned processes for efficient service delivery."
      },
      {
        title: "Knowledge Base Development",
        description: "Creation and maintenance of self-service resources for common issues."
      },
      {
        title: "Service Desk Software Implementation",
        description: "Deployment and configuration of leading service desk platforms."
      }
    ],
    approach: "Our service desk approach combines people, processes, and technology to deliver responsive, effective IT support. We implement industry best practices and continuously monitor performance metrics to ensure we're meeting and exceeding service level agreements, providing your business with reliable technical support when you need it.",
    vendorLogos: [
      { name: "ServiceNow", logo: "https://www.servicenow.com/content/dam/servicenow-assets/images/meganav/servicenow-header-logo.svg" },
      { name: "Zendesk", logo: "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/zendesk-logo-horizontal.svg" },
      { name: "PagerDuty", logo: "https://www.pagerduty.com/wp-content/uploads/2021/10/pd-logo-color-no-tm.svg" },
      { name: "Jira Service Management", logo: "https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/apple-touch-icon.png" },
      { name: "xMatters", logo: "https://www.xmatters.com/hubfs/xmatters-logo-black-svg.svg" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Application Management</h3>
        <p className="mb-6">Our comprehensive application management services include:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Patch Management</h4>
            <p className="text-gray-600 mb-4">Systematic approach to keeping your applications updated and secure:</p>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>Regular security patch deployment</li>
              <li>Feature updates and enhancements</li>
              <li>Compatibility testing</li>
              <li>Rollback procedures</li>
              <li>Update documentation</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Configuration Management</h4>
            <p className="text-gray-600 mb-4">Ensuring optimal application settings for performance and security:</p>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>Application optimization</li>
              <li>Security hardening</li>
              <li>User access management</li>
              <li>Performance tuning</li>
              <li>Configuration documentation</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6 mt-8">Monitoring and Reporting</h3>
        <p className="mb-6">Comprehensive visibility into your IT environment:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <svg className="h-12 w-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h4 className="text-lg font-semibold mb-2">Performance Monitoring</h4>
            <p className="text-gray-600">Real-time tracking of system performance metrics and availability.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <svg className="h-12 w-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h4 className="text-lg font-semibold mb-2">Incident Management</h4>
            <p className="text-gray-600">Proactive detection and rapid resolution of system issues.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <svg className="h-12 w-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h4 className="text-lg font-semibold mb-2">Reporting & Analytics</h4>
            <p className="text-gray-600">Comprehensive reports on service performance, trends, and improvements.</p>
          </div>
        </div>
      </div>
    )
  },
  "analytics-ai": {
    title: "Analytics & AI",
    description: "Business intelligence and Data Analytics platforms that enable informed decision making",
    icon: "Brain",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    fullDescription: `Our Analytics and AI services transform your raw data into actionable insights and intelligent solutions. From basic business intelligence to advanced machine learning models, we help you leverage data to make better decisions, optimize operations, and create new opportunities for growth.`,
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Enhanced customer experiences",
      "Predictive capabilities for proactive planning",
      "Competitive advantage through innovation",
      "Automated processes and workflows"
    ],
    offerings: [
      {
        title: "Business Intelligence",
        description: "Dashboards and reporting solutions for visualizing key business metrics and trends."
      },
      {
        title: "Data Analytics",
        description: "Advanced analysis techniques to extract meaningful insights from your data."
      },
      {
        title: "Predictive Analytics",
        description: "Statistical models and forecasting to anticipate future trends and outcomes."
      },
      {
        title: "Machine Learning Solutions",
        description: "Custom ML models to automate processes, detect patterns, and make predictions."
      },
      {
        title: "AI Implementation",
        description: "Practical applications of artificial intelligence to solve business challenges."
      },
      {
        title: "Natural Language Processing",
        description: "Systems that understand, interpret, and generate human language for various applications."
      }
    ],
    approach: "We take a pragmatic approach to analytics and AI, focusing on real business outcomes rather than buzzwords. Our team works closely with your stakeholders to understand your challenges and opportunities, developing solutions that deliver tangible value and can evolve with your changing needs.",
    vendorLogos: [
      { name: "Tableau", logo: "https://www.tableau.com/sites/default/files/2021-05/tableau_rgb_500x500.png" },
      { name: "Power BI", logo: "https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png" },
      { name: "TensorFlow", logo: "https://www.tensorflow.org/images/tf_logo_social.png" },
      { name: "Databricks", logo: "https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg" },
      { name: "AWS", logo: "/lovable-uploads/bbce37d3-76e5-4a2a-838b-2b1aebc39945.png" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Advanced Analytics Solutions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Business Intelligence & Data Analytics</h4>
            <p className="text-gray-700 mb-4">
              Our BIDA platforms provide comprehensive solutions for visualizing and analyzing your business data:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-gray-700">
              <li>Interactive dashboards and reporting</li>
              <li>Data warehousing and modeling</li>
              <li>KPI tracking and performance analytics</li>
              <li>Self-service analytics tools</li>
              <li>Embedded analytics for applications</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Machine Learning & AI</h4>
            <p className="text-gray-700 mb-4">
              We develop custom machine learning and AI solutions that address specific business challenges:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-gray-700">
              <li>Predictive maintenance for infrastructure</li>
              <li>Customer behavior analysis and prediction</li>
              <li>Recommendation engines</li>
              <li>Natural language processing for document analysis</li>
              <li>Computer vision for image and video analysis</li>
              <li>Anomaly detection for security and fraud prevention</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
          <h4 className="text-xl font-semibold mb-4 text-center">Our Analytics & AI Development Process</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">1</span>
              </div>
              <h5 className="font-medium mb-2">Discovery</h5>
              <p className="text-sm text-gray-600">Understanding your data, challenges, and goals</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">2</span>
              </div>
              <h5 className="font-medium mb-2">Data Preparation</h5>
              <p className="text-sm text-gray-600">Collecting, cleaning, and organizing your data</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">3</span>
              </div>
              <h5 className="font-medium mb-2">Model Development</h5>
              <p className="text-sm text-gray-600">Creating and training analytical or AI models</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">4</span>
              </div>
              <h5 className="font-medium mb-2">Implementation</h5>
              <p className="text-sm text-gray-600">Deploying solutions with ongoing monitoring and refinement</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
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
              className="mb-8 pl-0 text-blue-100 border-blue-200 hover:bg-white/10" 
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
                <p className="text-lg leading-relaxed text-center">
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
