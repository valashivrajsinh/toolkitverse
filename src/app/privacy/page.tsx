import Link from 'next/link'
import { Shield, Eye, Cookie, Database, Lock, Users } from 'lucide-react'

export default function PrivacyPage() {
  const lastUpdated = "January 15, 2024"

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            {/* Introduction */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  At ToolkitVerse, we are committed to protecting your privacy and being transparent about 
                  the data we collect. We collect information in the following ways:
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Information You Provide
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information when you reach out to us via our contact form</li>
                  <li>Email address if you subscribe to our newsletter</li>
                  <li>User preferences and settings when using our calculators and tools</li>
                  <li>Feedback and comments you provide about our services</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Information Automatically Collected
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usage data and analytics about how you interact with our website</li>
                  <li>Device information including browser type, operating system, and IP address</li>
                  <li>Cookies and similar tracking technologies (see Cookie Policy below)</li>
                  <li>Performance metrics to help us improve our tools and services</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Provision:</strong> To provide and maintain our calculators, tools, and resources</li>
                  <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
                  <li><strong>Improvement:</strong> To analyze usage patterns and improve our website and tools</li>
                  <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security issues</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  <li><strong>Marketing:</strong> To send you updates about new tools and features (with your consent)</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Information Sharing and Disclosure
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Service Providers
                </h3>
                <p>
                  We may share information with trusted third-party service providers who assist us in operating our website, 
                  conducting our business, or servicing you. These providers are bound by confidentiality agreements and are 
                  only permitted to use your information as necessary to provide services to us.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Legal Requirements
                </h3>
                <p>
                  We may disclose your information if required to do so by law or in response to valid requests by public 
                  authorities (e.g., a court or government agency).
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Business Transfers
                </h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </div>
            </section>

            {/* Cookie Policy */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Cookie Policy
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic.</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Types of Cookies We Use
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences (like dark mode)</li>
                  <li><strong>Advertising Cookies:</strong> Used to display relevant ads (Google AdSense)</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. However, disabling certain cookies may affect 
                  the functionality of our website.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Data Security
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure hosting infrastructure with regular security updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
                <p>
                  While we strive to protect your personal information, no method of transmission over the Internet 
                  or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Your Rights and Choices
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at the email address provided below. We will respond 
                  to your request within a reasonable timeframe and in accordance with applicable law.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Third-Party Services
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>Our website may contain links to third-party websites and integrate with third-party services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google AdSense:</strong> For displaying advertisements</li>
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>External Links:</strong> Links to tools, resources, and educational content</li>
                  <li><strong>Social Media:</strong> Integration with social media platforms</li>
                </ul>
                <p>
                  These third-party services have their own privacy policies, and we encourage you to review them. 
                  We are not responsible for the privacy practices of third-party websites or services.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Children&apos;s Privacy
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Our services are intended for users aged 13 and above. We do not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected personal information 
                  from a child under 13, we will take steps to delete such information promptly.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided us with personal information, 
                  please contact us immediately.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Changes to This Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or 
                  applicable laws. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the &quot;Last updated&quot; date at the top of this policy</li>
                  <li>Sending you an email notification if you have subscribed to our updates</li>
                </ul>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we 
                  protect your information.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Us
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> privacy@toolkitverse.com</li>
                    <li><strong>Website:</strong> <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Form</Link></li>
                    <li><strong>Response Time:</strong> We aim to respond within 72 hours</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
