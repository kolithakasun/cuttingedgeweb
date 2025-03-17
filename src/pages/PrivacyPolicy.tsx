
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Motion } from '@/components/ui/motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl mx-auto py-24 px-6">
        <Motion animation="fade-up">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-700">
                CuttingEdge Technologies ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and share information about you when you use our website, products, and services.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect several different types of information for various purposes to provide and improve our services to you:</p>
              <ul className="space-y-2 list-disc pl-6 text-gray-700">
                <li><strong>Personal Data</strong>: Name, email address, phone number, company information, and other data you provide when contacting us or using our services.</li>
                <li><strong>Usage Data</strong>: Information about how you use our website and services, including IP address, browser type, pages visited, and time spent.</li>
                <li><strong>Cookies and Tracking Technologies</strong>: We use cookies and similar tracking technologies to track activity on our website and to improve user experience.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="space-y-2 list-disc pl-6 text-gray-700">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To provide you with news, special offers, and general information about other goods, services, and events which we offer</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="space-y-2 list-disc pl-6 text-gray-700">
                <li><strong>Service Providers</strong>: We may employ third-party companies to facilitate our service, provide the service on our behalf, or assist us in analyzing how our service is used.</li>
                <li><strong>Business Partners</strong>: We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                <li><strong>Legal Requirements</strong>: We may disclose your information where required to do so by law.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-700">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal data.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
              <p className="text-gray-700 mb-4">You have certain data protection rights, including:</p>
              <ul className="space-y-2 list-disc pl-6 text-gray-700">
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification</li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please <Link to="/#contact" className="text-primary hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </Motion>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
