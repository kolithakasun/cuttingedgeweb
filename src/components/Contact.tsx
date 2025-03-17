
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Motion } from '@/components/ui/motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { toast } from 'sonner';

const ContactItem = ({ 
  icon: Icon, 
  title, 
  content, 
  href 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string; 
  href: string;
}) => {
  return (
    <a 
      href={href} 
      className="flex items-start gap-4 p-5 rounded-xl bg-white/50 border border-white/20 transition-all hover:bg-white/80 hover:shadow-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-3 rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  const { toast: uiToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Show both toast notifications to ensure the user gets feedback
    toast.success("Message sent! We'll get back to you as soon as possible.");
    uiToast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Email would normally be sent via a server endpoint
    console.log("Form submitted with data:", formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 px-4 bg-blue-50">
      <div className="container max-w-7xl mx-auto">
        <Motion animation="fade-up" className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">Get In Touch</span>
          <h2 className="text-3xl font-bold mt-6 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need a consultation? Reach out to us and we'll get back to you shortly.
          </p>
        </Motion>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          <Motion animation="fade-right" className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <ContactItem 
                icon={Mail} 
                title="Email" 
                content="sales@cuttingedgesl.com" 
                href="mailto:sales@cuttingedgesl.com" 
              />
              <div className="space-y-4">
                <h4 className="font-medium">Phone</h4>
                <ContactItem 
                  icon={Phone} 
                  title="+94 112 638 532" 
                  content="Sri Lanka" 
                  href="tel:+94112638532" 
                />
                <ContactItem 
                  icon={Phone} 
                  title="+61 420 814 130" 
                  content="Australia" 
                  href="tel:+61420814130" 
                />
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Our Offices</h4>
                
                <ContactItem 
                  icon={MapPin} 
                  title="Sri Lanka Office" 
                  content="27/2, St. Mitchel Road, Hedigama, Piliyandala, Sri Lanka" 
                  href="https://maps.app.goo.gl/sbF14MbaGxoGRmtz6" 
                />
                
                <ContactItem 
                  icon={MapPin} 
                  title="Australia Office" 
                  content="8, Smethurst Road, Tarneit 3029, VIC, Australia" 
                  href="https://maps.google.com/?q=8,+Smethurst+Road,+Tarneit+3029,+VIC,+Australia" 
                />
              </div>
            </div>
          </Motion>
          
          <Motion animation="fade-left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project or inquiry..." 
                  required 
                  className="min-h-[150px]" 
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default Contact;
