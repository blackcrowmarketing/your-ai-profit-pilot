/**
 * Disclaimer Page
 */

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-[#003366] hover:underline text-sm">
            ← Back to Home
          </a>
          <h1 className="text-3xl font-bold text-[#003366] mt-4">Disclaimer</h1>
        </div>
      </header>

      <main className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: January 2025</p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">General Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The information provided on youraiprofitpilot.com is for educational and informational purposes only. We do not provide professional financial, legal, or investment advice. Before making any decisions related to the Vyvo Business Opportunity or any investment, please consult with qualified professionals.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Business Opportunity Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The Vyvo Business Opportunity is not a guarantee of income. Your success depends on many factors including, but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Your personal effort and commitment</li>
            <li>Market conditions and timing</li>
            <li>Your ability to build and maintain relationships</li>
            <li>Economic and technological factors beyond your control</li>
            <li>Your understanding of the business model</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Income Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            Earnings from the Vyvo Business Opportunity vary widely. We make no claims about average earnings or typical results. Some participants may earn significant income, while others may earn little or no income. Past results do not guarantee future results.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">No Guarantees</h2>
          <p className="text-gray-700 mb-4">
            We make no guarantees regarding:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Future value of GPU infrastructure ownership</li>
            <li>Market growth or adoption of AI technology</li>
            <li>Your ability to build a successful community</li>
            <li>Returns on investment or time spent</li>
            <li>Continued operation or success of Vyvo or its products</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Independent Influencer Status</h2>
          <p className="text-gray-700 mb-4">
            Your AI Profit Pilot is an independent influencer promoting the Vyvo Business Opportunity. We are not an official representative of Vyvo, and our views and experiences are our own. We are not affiliated with or endorsed by any government agency.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Technology Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            While we believe in the potential of AI, blockchain, and GPU infrastructure technology, these are emerging and rapidly evolving fields. Technology changes, market conditions shift, and unforeseen challenges may arise. We cannot guarantee the success or viability of these technologies.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Data Privacy Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            While we emphasize privacy and data security, we cannot guarantee absolute protection of your data. Internet transmission is not 100% secure. By using our service, you acknowledge and accept the inherent risks of online communication.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Third-Party Content</h2>
          <p className="text-gray-700 mb-4">
            This website may contain links to third-party websites and services. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party services is at your own risk and subject to their terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            To the fullest extent permitted by law, Your AI Profit Pilot and its owners, operators, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website or the information provided herein.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Changes to Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify this disclaimer at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the website constitutes acceptance of any changes.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about this disclaimer, please contact us at: support@youraiprofitpilot.com
          </p>

          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-yellow-800 font-semibold">
              ⚠️ Important: Please read all disclaimers, terms, and privacy policies carefully before proceeding. If you do not agree with any part of these terms, please do not use this service.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
