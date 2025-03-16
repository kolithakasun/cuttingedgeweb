
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Motion, MotionGroup } from '@/components/ui/motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Smartphone, 
  MonitorSmartphone, 
  Code, 
  ArrowRight 
} from 'lucide-react';

const serviceItems = [
  {
    icon: Server,
    title: 'IT Infrastructure',
    description: 'Design, implementation and management of robust IT infrastructure tailored to your business needs.',
    link: '/services/it-infrastructure'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
    link: '/services/cybersecurity'
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Seamless migration and management of cloud solutions that scale with your business.',
    link: '/services/cloud-services'
  },
  {
    icon: Smartphone,
    title: 'Managed IT Services',
    description: 'Proactive monitoring and management of your IT environment to ensure optimal performance.',
    link: '/services/managed-it-services'
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Transformation',
    description: 'Strategic guidance to help your business leverage digital technologies for growth.',
    link: '/services/digital-transformation'
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to address your unique business challenges.',
    link: '/services/custom-software'
  }
];

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  link
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  link: string;
}) => {
  return (
    <Link to={link} className="group p-8 rounded-2xl glass-card flex flex-col items-start transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="p-3 rounded-xl bg-primary/10 text-primary mb-5">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="mt-auto flex items-center text-primary font-medium">
        Learn more 
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-7xl mx-auto">
        <Motion animation="fade-up" className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">Our Services</span>
          <h2 className="section-title mt-6">Comprehensive IT Solutions</h2>
          <p className="section-subtitle mx-auto">We offer a full range of IT services to help your business thrive in the digital landscape.</p>
        </Motion>
        
        <MotionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              link={service.link}
            />
          ))}
        </MotionGroup>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View all services
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
