import { Button } from "@/components/ui/button";
import { CheckCircle2, ExternalLink, AlertTriangle } from "lucide-react";

export default function GPUClusterSetup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* DEV ONLY: Quick Navigation */}
      <div className="bg-yellow-100 border-b-2 border-yellow-400 py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4 text-sm">
          <span className="font-bold text-yellow-800">🔧 DEV MODE:</span>
          <a href="/" className="text-blue-600 hover:underline">Squeeze Page</a>
          <a href="/sales" className="text-blue-600 hover:underline">Sales Page</a>
          <a href="/member-pack-setup" className="text-blue-600 hover:underline">Member Pack Setup</a>
          <a href="/gpu-cluster-setup" className="text-blue-600 hover:underline">GPU Cluster Setup</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-[#002244] to-[#003366] text-white py-8">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Vyvo GPU Cluster Purchasing Guide</h1>
          <p className="text-blue-100 text-lg">For New Member Bundle Owners Only</p>
        </div>
      </header>

      <main className="container py-12 max-w-4xl">
        {/* Important Notice */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-900 text-lg mb-2">Important Prerequisite</h3>
              <p className="text-red-800">
                You must have already purchased your <strong>VAI OS New Member Bundle</strong> before proceeding with GPU Cluster purchase.
              </p>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center text-xl font-bold">
              1
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Download inPersona App</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#003366]">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-amber-900 font-medium">
                ⚠️ Ensure you have the LATEST iOS or Android software version BEFORE PROCEEDING!
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>iOS users:</strong> Download <strong>inPersona PRO</strong> from the Apple App Store
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Android users:</strong> Download <strong>inPersona</strong> from Google Play Store (PRO not required)
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 text-xl mb-4">Registration Process</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Open the app and enter the same email address from your Vyvo registration</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Click Continue (no invitation code needed - you've already registered!)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Enter the 6-digit OTP sent to your email to verify your address</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center text-xl font-bold">
              2
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Set Up Your inPersona Wallet</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#003366]">
            <p className="text-lg text-gray-700 mb-6">
              After registration, you'll be prompted to create your inPersona wallet. Select <strong>"Create Wallet"</strong> and follow these steps:
            </p>

            <div className="space-y-6">
              {/* Wallet Step 1 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">1. Name Your Wallet</h4>
                <p className="text-gray-700">Enter a name for your wallet, carefully read all information, and click Continue.</p>
              </div>

              {/* Wallet Step 2 - Critical */}
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <h4 className="font-bold text-red-900 text-lg">2. CRITICAL: Save Your Secret Phrase!</h4>
                </div>
                <div className="space-y-3 text-gray-800">
                  <p>• Click "Reveal my secret phrase" to display it</p>
                  <p>• <strong>Write it down in a physical notebook</strong> (strongly recommended)</p>
                  <p>• Store the notebook in a secure location only you know</p>
                  <p>• Check "Yes I copied my mnemonic phrase to somewhere safe"</p>
                  <p>• Click Continue</p>
                </div>
                <div className="mt-4 bg-red-100 rounded p-3">
                  <p className="text-red-900 font-medium text-sm">
                    ⚠️ If you lose your secret phrase, you will lose access to your wallet permanently!
                  </p>
                </div>
              </div>

              {/* Wallet Step 3 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">3. Verify Your Secret Phrase</h4>
                <p className="text-gray-700">
                  Recreate your secret phrase by selecting the correct word from each group of 3 in the correct order, then click Continue.
                </p>
              </div>

              {/* Wallet Step 4 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">4. Create Your 8-Digit PIN</h4>
                <p className="text-gray-700 mb-3">
                  Create and enter an 8-digit PIN to encrypt your wallet. Write this down and keep it safe.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="text-amber-900 text-sm">
                    <strong>Note:</strong> If you forget your PIN, you cannot recover it. It's not stored anywhere in the app or on servers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-blue-900 font-medium">
                ✅ Before moving to Step 3, complete your Profile setup by navigating to the Profile Menu (tap "Hi" at top left). 
                This is required to complete your GPU Cluster purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center text-xl font-bold">
              3
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Purchase Your GPU Cluster</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#003366]">
            <p className="text-lg text-gray-700 mb-6">
              Visit <strong>shop.vyvo.com</strong> and click LOGIN in the top right corner. Use your Vyvo account email and enter the OTP sent to your email.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Select <strong>Vyvo Smart Chain Products</strong> in the center</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Select <strong>GPU Cluster</strong> on the right-hand side</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Choose your GPU Cluster level and click Buy Now</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Review order summary and click Continue</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Select <strong>STRIPE</strong> as payment method (recommended for cards)</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Critical Step Before Checkout!</h4>
                  <p className="text-red-800">
                    Before completing your purchase, <strong>copy and paste your inPersona wallet address</strong> into the 
                    "Receiving Wallet" field. You will access your GPU Cluster through this wallet.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-amber-900 mb-3 text-lg">Alternative: Purchasing with Crypto</h3>
              <p className="text-amber-900 mb-4">
                You can purchase using USDC, BUSD (Polygon network), or USDT (BEP20 on Binance network) via your ODEE wallet.
              </p>
              <div className="space-y-2 text-sm text-amber-800">
                <p>1. Create an ODEE account at <strong>odee.com</strong> using your Vyvo email</p>
                <p>2. Enter the OTP to access your ODEE Dashboard</p>
                <p>3. Transfer cryptocurrency to your ODEE wallet address (top right of dashboard)</p>
                <p>4. Funds auto-convert to USDV Stable Coin</p>
                <p>5. Select "Odee Wallet" as payment method at checkout</p>
                <p className="text-amber-900 font-medium mt-2">⚠️ Ensure sufficient funds to cover transfer and gas fees</p>
              </div>
            </div>

            <Button 
              className="w-full sm:w-auto bg-[#003366] hover:bg-[#002244]"
              onClick={() => window.open('https://shop.vyvo.com', '_blank')}
            >
              Visit Vyvo Store <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Success Message */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center border-2 border-green-200">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Congratulations! 🎉
          </h3>
          <p className="text-lg text-gray-700">
            You now own your slice of the AI infrastructure! Your GPU Cluster is ready to start generating value.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="container text-center">
          <p>© 2025 Your AI Profit Pilot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
