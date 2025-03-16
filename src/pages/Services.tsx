
import React from 'react';
import { Link } from 'react-router-dom';
import { Motion, MotionGroup } from '@/components/ui/motion';
import { Server, Shield, Cloud, Smartphone, MonitorSmartphone, Code, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    description: 'Strategic guidance to help your business leverage digital technologies for growth including web development.',
    link: '/services/digital-transformation'
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions including web applications designed to address your unique business challenges.',
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="section-padding bg-gradient-to-b from-white to-blue-50">
          <div className="container max-w-7xl mx-auto px-4">
            <Motion animation="fade-up" className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Comprehensive IT Solutions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a full range of IT services to help your business thrive in the digital landscape.
                Click on any service to learn more about our offerings.
              </p>
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
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <Motion animation="fade-up" className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">Why Choose Us</span>
              <h2 className="text-3xl font-bold mt-6 mb-4">The CuttingEdge Advantage</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We differentiate ourselves through our customer-first approach and technical excellence.
              </p>
            </Motion>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Motion animation="fade-right" delay={0.1}>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Expertise & Experience</h3>
                  <p className="text-gray-600">
                    Our team consists of certified professionals with decades of combined experience across diverse IT domains.
                  </p>
                </div>
              </Motion>
              
              <Motion animation="fade-up" delay={0.2}>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Tailored Solutions</h3>
                  <p className="text-gray-600">
                    We recognize that every business is unique, crafting customized solutions that align perfectly with your specific needs.
                  </p>
                </div>
              </Motion>
              
              <Motion animation="fade-left" delay={0.3}>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our relationship doesn't end with implementation - we provide continuous support to ensure your technology consistently performs.
                  </p>
                </div>
              </Motion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
