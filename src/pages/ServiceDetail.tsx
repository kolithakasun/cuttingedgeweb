
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Globe, Code, Shield, Server, RefreshCw } from 'lucide-react';
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
  vendorLogos: { name: string; logo: string; url: string; }[];
  additionalContent?: React.ReactNode;
};

// Define service details with more comprehensive information
const serviceDetails: Record<string, ServiceDetail> = {
  "it-infrastructure": {
    title: "IT Infrastructure",
    description: "Comprehensive IT infrastructure solutions tailored to your business needs",
    icon: "Server",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    fullDescription: `Our IT Infrastructure services provide the foundation for your business technology needs. We design, implement, and manage robust infrastructure solutions that are scalable, secure, and aligned with your business objectives. From network architecture to server infrastructure and storage solutions, we ensure your technology backbone supports your business operations effectively.`,
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
        description: "Proactive monitoring of all infrastructure components to ensure optimal performance."
      },
      {
        title: "On-premises & Cloud Infrastructure",
        description: "Establishment and support of on-premises, private and public cloud platforms."
      },
      {
        title: "Home & Office Security Systems",
        description: "CCTV installation, access control systems, and integrated security solutions for homes and offices."
      }
    ],
    approach: "We take a consultative approach to understand your business needs before designing and implementing IT infrastructure solutions. Our team of certified professionals ensures seamless integration with your existing systems and provides ongoing support to maximize performance and reliability.",
    vendorLogos: [
      { name: "Dell", logo: "/lovable-uploads/Dell_Logo.svg.png", url: "https://www.dell.com/" },
      { name: "HP", logo: "/lovable-uploads/1200px-HP_logo_2012.svg.png", url: "https://www.hp.com/" },
      { name: "Cisco", logo: "/lovable-uploads/0/08/Cisco_logo_blue_2016.svg.png", url: "https://www.cisco.com/" },
      { name: "VMware", logo: "/lovable-uploads/9/9a/Vmware.svg.png", url: "https://www.vmware.com/" },
      { name: "Lenovo", logo: "/lovable-uploads/Lenovo.png", url: "https://www.lenovo.com/" },
      { name: "Fortinet", logo: "/lovable-uploads/Fortinet.png", url: "https://www.fortinet.com/" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Home & Office Security Systems</h3>
        <p className="mb-6">We provide comprehensive security solutions for homes and businesses:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">CCTV Installation</h4>
            <p className="text-gray-600">High-quality surveillance systems with remote monitoring capabilities.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Access Control</h4>
            <p className="text-gray-600">Secure entry systems including key cards, biometric scanners, and integrated door controls.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Alarm Systems</h4>
            <p className="text-gray-600">Advanced intruder detection with immediate notification protocols.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Integrated Security</h4>
            <p className="text-gray-600">Unified management of multiple security components through a single interface.</p>
          </div>
        </div>
      </div>
    )
  },
  "cybersecurity": {
    title: "Cybersecurity",
    description: "Protecting your business from evolving cyber threats",
    icon: "Shield",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    fullDescription: `In today's digital landscape, cybersecurity is not optional. Our comprehensive security solutions protect your business from increasing cyber threats, safeguarding your data, systems, and reputation. We implement multi-layered security strategies that combine advanced technologies, best practices, and proactive monitoring to provide comprehensive protection for your digital assets.`,
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
        description: "Comprehensive security evaluations including vulnerability scanning, penetration testing and detailed assessment reports."
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
        title: "Data Loss Prevention",
        description: "Strategies and tools to prevent sensitive data from leaving your organization."
      }
    ],
    approach: "We implement defense-in-depth security strategies tailored to your risk profile and business needs. Our approach combines cutting-edge technologies, best practices, and ongoing monitoring to provide comprehensive protection for your digital assets.",
    vendorLogos: [
      { name: "Microsoft", logo: "/lovable-uploads/Microsoft_Sentinel.png", url: "https://www.microsoft.com/" },
      { name: "ESET", logo: "/lovable-uploads/ESET.png", url: "https://www.eset.com/" },
      { name: "Symantec", logo: "/lovable-uploads/Symantec.png", url: "https://www.broadcom.com/products/cyber-security" },
      { name: "SentinelOne", logo: "/lovable-uploads/SentinelOne.png", url: "https://www.sentinelone.com/" },
      { name: "Nessus", logo: "/lovable-uploads/Nessus.png", url: "https://www.tenable.com/products/nessus" },
      { name: "Fortinet", logo: "/lovable-uploads/Fortinet.png", url: "https://www.fortinet.com/" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Enterprise Security Solutions</h3>
        <p className="mb-6">Our enterprise security offerings include implementation and management of industry-leading platforms:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Azure Sentinel</h4>
            <p className="text-gray-600 mb-4">Cloud-native SIEM solution that provides intelligent security analytics for your entire enterprise.</p>
            <a href="https://azure.microsoft.com/en-us/products/microsoft-sentinel" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Learn more</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Microsoft Defender</h4>
            <p className="text-gray-600 mb-4">Advanced threat protection for endpoints, identity, email, and applications.</p>
            <a href="https://www.microsoft.com/en-us/security/business/microsoft-defender" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Learn more</a>
          </div>
        </div>
      </div>
    )
  },
  "cloud-services": {
    title: "Cloud Services",
    description: "Seamless migration and management of cloud solutions",
    icon: "Cloud",
    heroImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    fullDescription: `Our cloud services help businesses leverage the flexibility, scalability, and cost-efficiency of cloud computing. We provide strategic guidance and implementation support for public, private, and hybrid cloud environments, ensuring your cloud implementation aligns with your business objectives and delivers measurable value.`,
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
        description: "Continuous monitoring and optimization of cloud resources to minimize costs."
      },
      {
        title: "Performance Optimization",
        description: "Fine-tuning cloud resources to deliver optimal application performance."
      },
      {
        title: "Cloud Disaster Recovery",
        description: "Robust backup and recovery solutions to ensure business continuity."
      }
    ],
    approach: "We help you navigate the complexities of cloud adoption with a strategic approach focused on your business objectives. Our certified cloud specialists ensure smooth migration, optimal configuration, and ongoing management of your cloud environment.",
    vendorLogos: [
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png", url: "https://aws.amazon.com/" },
      { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png", url: "https://azure.microsoft.com/" },
      { name: "Google Cloud", logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png", url: "https://cloud.google.com/" },
      { name: "Oracle Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", url: "https://www.oracle.com/cloud/" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Cloud Optimization Services</h3>
        <p className="mb-6">Our optimization services help you maximize the value of your cloud investment:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Cost Management</h4>
            <p className="text-gray-600">We help you identify and eliminate wasteful spending, right-size resources, and implement policies to control cloud costs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Performance Enhancement</h4>
            <p className="text-gray-600">Our experts optimize your cloud configuration to ensure maximum performance for your applications and workloads.</p>
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
    fullDescription: `Our Managed IT Services provide comprehensive support for your technology infrastructure, allowing you to focus on your core business. We proactively monitor, manage, and optimize your IT environment to ensure reliability and performance, handling everything from day-to-day support to strategic planning.`,
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
        title: "Service Desk",
        description: "Level 1, 2 & 3 triage and issue management for all your IT needs."
      },
      {
        title: "Infrastructure Management",
        description: "Proactive management of servers, networks, and other infrastructure."
      },
      {
        title: "Vendor Management",
        description: "Coordination with technology vendors to resolve issues efficiently."
      }
    ],
    approach: "Our managed services model delivers proactive maintenance, rapid support, and strategic guidance through a team of certified IT professionals. We become your trusted technology partner, ensuring your IT environment supports and enhances your business operations.",
    vendorLogos: [
      { name: "PagerDuty", logo: "/lovable-uploads/PagerDuty.png", url: "https://www.pagerduty.com/" },
      { name: "xMatters", logo: "/lovable-uploads/xMatters.png", url: "https://www.xmatters.com/" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Service Desk Solutions</h3>
        <p className="mb-6">Our comprehensive Service Desk solutions provide multi-level support for all your IT needs:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Level 1 Support</h4>
            <p className="text-gray-600">First point of contact for all IT issues, providing immediate assistance for common problems and basic troubleshooting.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Level 2 Support</h4>
            <p className="text-gray-600">Handling more complex issues that require specialized knowledge and technical expertise beyond basic troubleshooting.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Level 3 Support</h4>
            <p className="text-gray-600">Advanced support for the most challenging technical problems, typically provided by subject matter experts with deep domain knowledge.</p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6">Operating System Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Windows Platforms</h4>
            <p className="text-gray-600">Comprehensive support for all Microsoft Windows desktop and server operating systems.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Linux Technologies</h4>
            <p className="text-gray-600">Expert management of various Linux distributions including Ubuntu, Red Hat, CentOS, and more.</p>
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
    fullDescription: `Our Digital Transformation services help businesses reimagine their operations through the strategic application of digital technologies. We guide you through the journey of adapting to the digital age, enhancing customer experiences and operational efficiency through innovative solutions and strategic implementation.`,
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
      },
      {
        title: "Business Process Reengineering",
        description: "Redesigning core processes to leverage digital capabilities."
      }
    ],
    approach: "We approach digital transformation as a strategic journey unique to each organization. Our consultative process identifies opportunities for digital enhancement, develops implementation strategies, and guides you through the change management required for successful transformation.",
    vendorLogos: [
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31", url: "https://www.microsoft.com/" },
      { name: "Adobe", logo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg", url: "https://www.adobe.com/" },
      { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png", url: "https://www.salesforce.com/" },
      { name: "SAP", logo: "https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg", url: "https://www.sap.com/" },
      { name: "Odoo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Odoo_logo_rgb.svg/1200px-Odoo_logo_rgb.svg.png", url: "https://www.odoo.com/" }
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
    fullDescription: `Our Custom Software Development services deliver tailor-made applications designed specifically for your business needs. When off-the-shelf solutions aren't enough, we create custom software that streamlines your operations and enhances your competitive advantage through innovative, purpose-built solutions.`,
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
        description: "Custom interfaces that allow different software systems to communicate."
      },
      {
        title: "WordPress Development",
        description: "Custom WordPress themes, plugins, and enterprise solutions."
      }
    ],
    approach: "Our development process follows industry best practices, combining agile methodologies with rigorous quality assurance. We collaborate closely with stakeholders throughout the development lifecycle to ensure the final solution precisely meets your business requirements.",
    vendorLogos: [
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31", url: "https://www.microsoft.com/" },
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png", url: "https://aws.amazon.com/" },
      { name: "Google Cloud", logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png", url: "https://cloud.google.com/" },
      { name: "WordPress", logo: "https://s.w.org/style/images/about/WordPress-logotype-standard.png", url: "https://wordpress.org/" }
    ],
    additionalContent: (
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Our Development Technologies</h3>
        <p className="mb-6">Our technology stack includes, but is not limited to, the following technologies:</p>
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
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" className="max-h-8" />
                </div>
                <span>HTML5/CSS3</span>
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
                  <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" className="max-h-8" />
                </div>
                <span>Java</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h4 className="text-xl font-semibold mb-4">Content Management Systems</h4>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="flex items-center">
              <div className="w-8 h-8 mr-3 flex items-center justify-center">
                <img src="https://s.w.org/style/images/about/WordPress-logotype-standard.png" alt="WordPress" className="max-h-8" />
              </div>
              <span>WordPress</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 mr-3 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Drupal_logo.svg/2560px-Drupal_logo.svg.png" alt="Drupal" className="max-h-8" />
              </div>
              <span>Drupal</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 mr-3 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" alt="Shopify" className="max-h-8" />
              </div>
              <span>Shopify</span>
            </li>
          </ul>
          <p className="mt-4 text-gray-600">Note: This is not an exhaustive list. We work with many other technologies and platforms based on project requirements.</p>
        </div>
      </div>
    )
  },
  "data-management": {
    title: "Data Management",
    description: "Effectively store, manage and analyze your data with industry leading technology",
    icon: "Database",
    heroImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    fullDescription: `Our Data Management services enable organizations to effectively collect, store, and analyze data. We implement robust solutions that transform your data into a strategic asset, driving better decision-making and business outcomes through secure, efficient, and scalable data platforms.`,
    benefits: [
      "Enhanced data quality and consistency",
      "Improved decision making through reliable data",
      "Reduced data management costs",
      "Better compliance with data regulations",
      "Elimination of data silos",
      "Faster access to critical information"
    ],
    offerings: [
      {
        title: "Data Governance",
        description: "Frameworks and policies to ensure data quality, compliance, and security."
      },
      {
        title: "Database Design & Implementation",
        description: "Customized database solutions optimized for your business requirements."
      },
      {
        title: "Data Integration",
        description: "Connecting disparate data sources for a unified view of your information."
      },
      {
        title: "Data Migration & Transitions",
        description: "Accurate and efficient transfer of data using proven practices."
      },
      {
        title: "Data Warehousing",
        description: "Centralized repositories designed for analysis and reporting."
      },
      {
        title: "Master Data Management",
        description: "Creating a single source of truth for critical business data."
      },
      {
        title: "Data Quality Management",
        description: "Processes and tools to maintain high-quality, reliable data."
      }
    ],
    approach: "We take a holistic approach to data management, focusing on your organization's unique data challenges and objectives. Our experts implement industry best practices and cutting-edge technologies to ensure your data is accurate, accessible, and secure throughout its lifecycle.",
    vendorLogos: [
      { name: "Microsoft SQL", logo: "/lovable-uploads/Microsoft_SQL.png", url: "https://www.microsoft.com/en-us/sql-server" },
      { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", url: "https://www.oracle.com/" },
      { name: "Snowflake", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg", url: "https://www.snowflake.com/" },
      { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", url: "https://www.mongodb.com/" },
      { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", url: "https://www.postgresql.org/" },
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png", url: "https://aws.amazon.com/" },
      { name: "Azure", logo: "/lovable-uploads/Microsoft_Azure_Logo.svg.png", url: "https://azure.microsoft.com/"}
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Data Migration Services</h3>
        <p className="mb-6">Our comprehensive data migration services ensure smooth transitions between systems:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">ETL Processes</h4>
            <p className="text-gray-600">Extract, Transform, and Load processes tailored to your specific migration needs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Data Mapping</h4>
            <p className="text-gray-600">Detailed mapping between source and target systems to ensure data integrity.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Data Cleansing</h4>
            <p className="text-gray-600">Identification and correction of errors before migration to ensure high data quality.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Migration Testing</h4>
            <p className="text-gray-600">Rigorous testing protocols to validate data integrity and system functionality after migration.</p>
          </div>
        </div>
      </div>
    )
  },
  "enterprise-integration": {
    title: "Enterprise Integration",
    description: "Remove manual processes to improve the accuracy and timeliness of information",
    icon: "Network",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    fullDescription: `Our Enterprise Integration solutions connect disparate systems, applications, and data sources to create a cohesive IT ecosystem. We eliminate information silos and automate workflows to enhance operational efficiency and data accuracy, enabling seamless communication between all your business systems.`,
    benefits: [
      "Streamlined business processes",
      "Automated data exchange between systems",
      "Reduced manual intervention and errors",
      "Improved real-time visibility across systems",
      "Enhanced operational efficiency",
      "Better scalability of IT infrastructure"
    ],
    offerings: [
      {
        title: "API Development",
        description: "Custom APIs to facilitate seamless communication between applications."
      },
      {
        title: "Middleware Integration",
        description: "Implementation of middleware solutions to connect diverse systems."
      },
      {
        title: "ERP Integration",
        description: "Connecting ERP systems with other business applications for unified operations."
      },
      {
        title: "Legacy System Integration",
        description: "Bridging the gap between legacy systems and modern applications."
      },
      {
        title: "EDI Solutions",
        description: "Electronic Data Interchange solutions for automated business document exchange."
      },
      {
        title: "Integration Platform Implementation",
        description: "Deployment of industry-leading integration platforms to connect your systems."
      },
      {
        title: "SOA Architecture",
        description: "Service-Oriented Architecture design for modular, flexible system integration."
      }
    ],
    approach: "We employ a methodical integration approach, first understanding your IT landscape and business processes, then designing integration solutions that optimize data flow and eliminate redundancies. Our implementations are scalable, adaptable, and built to support your evolving business needs.",
    vendorLogos: [
      { name: "MuleSoft", logo: "/lovable-uploads/MuleSoft.png", url: "https://www.mulesoft.com/" },
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31", url: "https://www.microsoft.com/" },
      { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", url: "https://www.ibm.com/" },
      { name: "Dell Boomi", logo: "/lovable-uploads/Dell_Boomi.png", url: "https://www.boomi.com/" },
      { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", url: "https://www.oracle.com/" },
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png", url: "https://aws.amazon.com/" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">API Development Capabilities</h3>
        <p className="mb-6">Our API development services facilitate effective integration and automation by allowing your applications to communicate and exchange data:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">RESTful APIs</h4>
            <p className="text-gray-600">Development of modern, standards-based REST APIs for web and mobile applications.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">SOAP Services</h4>
            <p className="text-gray-600">Implementation of SOAP-based web services for enterprise system integration.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Microservices</h4>
            <p className="text-gray-600">Design and development of microservices architectures for flexible, scalable integrations.</p>
          </div>
        </div>
      </div>
    )
  },
  "analytics-ai": {
    title: "Analytics & AI",
    description: "Business intelligence and Data Analytics platforms that enable informed decision making",
    icon: "Brain",
    heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    fullDescription: `Our Analytics and AI services help organizations harness the power of their data through advanced analytics, business intelligence, and artificial intelligence solutions. We transform raw data into actionable insights that drive strategic decision-making and business growth, giving you a competitive edge in today's data-driven world.`,
    benefits: [
      "Data-driven decision making",
      "Predictive insights for future planning",
      "Identification of new revenue opportunities",
      "Enhanced customer understanding",
      "Optimized operational processes",
      "Competitive advantage through innovation"
    ],
    offerings: [
      {
        title: "Business Intelligence",
        description: "Dashboards and reporting solutions for visualizing key business metrics."
      },
      {
        title: "Predictive Analytics",
        description: "Advanced statistical models to forecast trends and outcomes."
      },
      {
        title: "Machine Learning Solutions",
        description: "Custom AI models trained on your data to solve specific business challenges."
      },
      {
        title: "Data Visualization",
        description: "Interactive visual representations of complex data for easier understanding."
      },
      {
        title: "Advanced Analytics",
        description: "Sophisticated analysis techniques to uncover hidden patterns and insights."
      },
      {
        title: "Natural Language Processing",
        description: "AI-powered text analysis for sentiment analysis, content classification, and more."
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis for object recognition and automated visual inspections."
      }
    ],
    approach: "We follow a systematic approach to analytics and AI implementation, starting with understanding your business questions, then designing solutions that leverage the right combination of technologies and methodologies. Our focus is on delivering practical, actionable insights rather than theoretical models.",
    vendorLogos: [
      { name: "Microsoft Power BI", logo: "https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png", url: "https://powerbi.microsoft.com/" },
      { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png", url: "https://www.tableau.com/" },
      { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", url: "https://www.tensorflow.org/" },
      { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", url: "https://www.python.org/" },
      { name: "R", logo: "https://www.r-project.org/logo/Rlogo.svg", url: "https://www.r-project.org/" },
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png", url: "https://aws.amazon.com/" }
    ],
    additionalContent: (
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Machine Learning Capabilities</h3>
        <p className="mb-6">Our machine learning experts develop custom AI solutions for a wide range of business applications:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Predictive Maintenance</h4>
            <p className="text-gray-600">AI systems that predict equipment failures before they occur, reducing downtime and maintenance costs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Customer Segmentation</h4>
            <p className="text-gray-600">Advanced clustering algorithms to identify distinct customer groups for targeted marketing.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Demand Forecasting</h4>
            <p className="text-gray-600">Accurate predictions of product demand to optimize inventory and supply chain management.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Anomaly Detection</h4>
            <p className="text-gray-600">Identification of unusual patterns that may indicate fraud, security threats, or business opportunities.</p>
          </div>
        </div>
        
        <p className="text-center text-gray-700">We work with you to identify the right AI solutions for your specific business challenges, ensuring practical applications that deliver measurable results.</p>
      </div>
    )
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  // Get the service details or redirect if not found
  const service = serviceId ? serviceDetails[serviceId] : undefined;
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  
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
              className="mb-8 bg-blue-700/50 text-white border-white/70 hover:bg-white/20 hover:text-white" 
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
                  <div className="flex flex-wrap justify-center items-center gap-8 bg-white p-8 rounded-xl">
                    {service.vendorLogos.map((vendor, index) => (
                      <a 
                        key={index} 
                        href={vendor.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center hover:opacity-80 transition-opacity"
                      >
                        <img 
                          src={vendor.logo} 
                          alt={vendor.name} 
                          className="h-12 max-w-[150px] object-contain" 
                        />
                      </a>
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
                    window.location.href = '/#contact';
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
