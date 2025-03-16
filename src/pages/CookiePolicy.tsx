
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Motion } from '@/components/ui/motion';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl mx-auto py-16 px-6">
        <Motion animation="fade-up">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you.
            </p>
            
            <h2>How We Use Cookies</h2>
            <p>
              When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
            </p>
            <ul>
              <li><strong>Essential cookies</strong>: These are necessary for the website to function properly.</li>
              <li><strong>Functionality cookies</strong>: These are used to recognize you when you return to our website.</li>
              <li><strong>Analytics cookies</strong>: These help us understand how visitors interact with our website.</li>
              <li><strong>Advertising cookies</strong>: These are used to deliver advertisements that are relevant to you and your interests.</li>
            </ul>
            
            <h2>Types of Cookies We Use</h2>
            <p>We use both session and persistent cookies on our website and we use different types of cookies to run the website:</p>
            <ul>
              <li><strong>Session cookies</strong>: We use session cookies to operate our website.</li>
              <li><strong>Preference cookies</strong>: We use preference cookies to remember your preferences and various settings.</li>
              <li><strong>Security cookies</strong>: We use security cookies for security purposes.</li>
            </ul>
            
            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. These may include:
            </p>
            <ul>
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Facebook Pixel</li>
              <li>LinkedIn Insights</li>
            </ul>
            
            <h2>How to Control Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.
            </p>
            
            <h2>More Information</h2>
            <p>
              If you'd like more information about how we use cookies and how to control them, please contact us at <a href="mailto:privacy@cuttingedgesl.com">privacy@cuttingedgesl.com</a>.
            </p>
          </div>
        </Motion>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
