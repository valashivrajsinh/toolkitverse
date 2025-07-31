import Link from 'next/link'
import { FileText, AlertCircle, Shield, Users, Gavel, Copyright } from 'lucide-react'

export default function TermsPage() {
  const lastUpdated = "January 15, 2024"

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Please read these terms carefully before using ToolkitVerse. By using our services, you agree to these terms.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            {/* Agreement */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Agreement to Terms
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  By accessing and using ToolkitVerse (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your use of our website located at toolkitverse.com and all 
                  related services, features, and content offered by ToolkitVerse.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Description of Service
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  ToolkitVerse provides a comprehensive productivity platform featuring:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Academic calculators (GPA, CGPA, percentage calculators)</li>
                  <li>Financial calculators (SIP, EMI, investment tools)</li>
                  <li>Curated developer tools and resources directory</li>
                  <li>Educational content and learning roadmaps</li>
                  <li>Downloadable templates and planners</li>
                  <li>Blog and informational content</li>
                </ul>
                <p>
                  Our services are provided free of charge with optional premium content and affiliate partnerships.
                </p>
              </div>
            </section>

            {/* User Accounts */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  User Accounts and Responsibilities
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Account Creation
                </h3>
                <p>
                  While most of our services do not require account creation, certain features may require you to provide 
                  contact information or create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>Notifying us of any unauthorized use of your account</li>
                  <li>Being responsible for all activities under your account</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Acceptable Use
                </h3>
                <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Attempt to reverse engineer, hack, or compromise our systems</li>
                  <li>Upload or distribute viruses, malware, or malicious code</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Scrape, harvest, or collect user information without permission</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Use our services to spam or send unsolicited communications</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Copyright className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Intellectual Property Rights
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Our Content
                </h3>
                <p>
                  The service and its original content, features, and functionality are and will remain the exclusive 
                  property of ToolkitVerse and its licensors. The service is protected by copyright, trademark, and 
                  other laws. Our trademarks and trade dress may not be used without our prior written consent.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  User Content
                </h3>
                <p>
                  By submitting content to our service (including feedback, suggestions, or comments), you grant us a 
                  non-exclusive, worldwide, royalty-free license to use, modify, and display such content in connection 
                  with our services.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Third-Party Content
                </h3>
                <p>
                  Our service may contain links to third-party websites or services. We do not own or control these 
                  third parties and are not responsible for their content, privacy policies, or practices.
                </p>
              </div>
            </section>

            {/* Privacy and Data */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Privacy and Data Protection
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your 
                  information when you use our service. By using our service, you agree to the collection and use of 
                  information in accordance with our Privacy Policy.
                </p>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method 
                  of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Disclaimers and Limitations
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Service Availability
                </h3>
                <p>
                  We strive to provide reliable service, but we cannot guarantee that our service will be available 
                  at all times. We may experience downtime due to maintenance, updates, or technical issues.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Accuracy of Information
                </h3>
                <p>
                  While we strive for accuracy in our calculators and tools, we make no warranties about the accuracy, 
                  reliability, or completeness of any information provided. Users should verify important calculations 
                  and consult with professionals when making significant decisions.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Educational Purpose
                </h3>
                <p>
                  Our tools and content are provided for educational and informational purposes only. They should not 
                  be considered as professional advice for financial, academic, or career decisions.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Limitation of Liability
                </h3>
                <p>
                  To the maximum extent permitted by law, ToolkitVerse shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, 
                  arising out of or in connection with your use of our service.
                </p>
              </div>
            </section>

            {/* Monetization */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Monetization and Affiliate Links
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Our service may include advertising, sponsored content, and affiliate links. We may earn commissions 
                  from purchases made through affiliate links. This does not affect the price you pay or our recommendations.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Premium Content
                </h3>
                <p>
                  Some content and features may be available only through purchase or subscription. Payment terms and 
                  refund policies will be clearly stated at the time of purchase.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Advertising
                </h3>
                <p>
                  We may display advertisements through third-party advertising networks. We are not responsible for 
                  the content of these advertisements or the practices of advertisers.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Termination
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  We may terminate or suspend your access to our service immediately, without prior notice or liability, 
                  for any reason whatsoever, including but not limited to a breach of these Terms.
                </p>
                <p>
                  Upon termination, your right to use the service will cease immediately. If you wish to terminate your 
                  account, you may contact us or simply discontinue using the service.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Changes to Terms
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a 
                  revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our sole discretion. By continuing to access 
                  or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Governing Law and Jurisdiction
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in 
                  which ToolkitVerse operates, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising under these Terms shall be resolved through binding arbitration in accordance 
                  with the rules of the applicable arbitration organization.
                </p>
              </div>
            </section>

            {/* Severability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Severability
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining 
                  provisions of these Terms will remain in effect. These Terms constitute the entire agreement between 
                  us regarding our service.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> legal@toolkitverse.com</li>
                    <li><strong>Website:</strong> <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Form</Link></li>
                    <li><strong>Response Time:</strong> We aim to respond within 72 hours</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Acknowledgment
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  By using ToolkitVerse, you acknowledge that you have read this Terms of Service agreement and agree 
                  to all its terms and conditions. If you do not agree with any of these terms, you are prohibited 
                  from using or accessing this site.
                </p>
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
