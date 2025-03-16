
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Motion } from '@/components/ui/motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl mx-auto py-16 px-6">
        <Motion animation="fade-up">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2>1. Introduction</h2>
            <p>
              These Terms of Service govern your use of the website operated by CuttingEdge Technologies and any services offered through the website. By accessing our website or using our services, you agree to be bound by these Terms.
            </p>
            
            <h2>2. Services Description</h2>
            <p>
              CuttingEdge Technologies provides IT solutions, including but not limited to IT infrastructure, cybersecurity, cloud services, and managed IT services. The specific details, prices, and terms of each service are provided in the respective service agreements.
            </p>
            
            <h2>3. User Responsibilities</h2>
            <p>By using our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when using our services</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
              <li>Not use our services in any way that could damage, disable, overburden, or impair our systems</li>
              <li>Not attempt to gain unauthorized access to any part of our services</li>
              <li>Not use automated means to access or use our services without our express permission</li>
            </ul>
            
            <h2>4. Intellectual Property Rights</h2>
            <p>
              The website and all its content, features, and functionality, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of CuttingEdge Technologies and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            
            <h2>5. Payment Terms</h2>
            <p>
              Payment terms for our services are outlined in the specific service agreements. All payments are due according to the terms specified in these agreements. Late payments may result in service interruption or termination.
            </p>
            
            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, CuttingEdge Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of our services.
            </p>
            
            <h2>7. Warranty Disclaimer</h2>
            <p>
              Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will always be available, uninterrupted, or error-free.
            </p>
            
            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.
            </p>
            
            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Sri Lanka and Australia, as applicable based on the service location, without regard to its conflict of law provisions.
            </p>
            
            <h2>10. Changes to These Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us by email at <a href="mailto:legal@cuttingedgesl.com">legal@cuttingedgesl.com</a>.
            </p>
          </div>
        </Motion>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
