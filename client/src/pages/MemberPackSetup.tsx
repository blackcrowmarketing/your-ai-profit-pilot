import { Button } from "@/components/ui/button";
import { CheckCircle2, ExternalLink } from "lucide-react";

export default function MemberPackSetup() {
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
          <h1 className="text-4xl font-bold mb-2">Vyvo Quick Set-Up & Purchasing Guide</h1>
          <p className="text-blue-100 text-lg">Your step-by-step guide to getting started with Vyvo</p>
        </div>
      </header>

      <main className="container py-12 max-w-4xl">
        {/* Step 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center text-xl font-bold">
              1
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Account Registration</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#003366]">
            <p className="text-lg text-gray-700 mb-6">
              Visit <strong>joinsocialfi.com/ai</strong> and enter the unique invitation code provided by your enroller, 
              along with your country of residence and email address.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-900 font-medium">💡 Pro Tip: Use a Gmail account rather than a work email for account registration.</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">After entering your email, check for an OTP (One Time Passcode) in your inbox</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Enter the OTP to verify your email address (check spam folder if needed)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Click "Register for free now" to complete registration</p>
              </div>
            </div>

            <Button 
              className="w-full sm:w-auto bg-[#003366] hover:bg-[#002244]"
              onClick={() => window.open('https://joinsocialfi.com/ai', '_blank')}
            >
              Register Your Account <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center text-xl font-bold">
              2
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Purchase VAI New Member Bundle</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#003366]">
            <p className="text-lg text-gray-700 mb-6">
              Visit <strong>shop.vyvo.com</strong> and click LOGIN in the top right corner. Use the same email address 
              from Step 1 and enter the OTP code sent to your email.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Click the <strong>VAI OS Products</strong> menu on the left side</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Select <strong>VAI OS New Member Bundle</strong> and click Buy Now</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Review your order summary and click Continue</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Select <strong>STRIPE</strong> as payment method (recommended for card purchases)</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-amber-900 mb-3 text-lg">Alternative: Purchasing with Crypto</h3>
              <p className="text-amber-900 mb-4">
                You can also purchase using USDC, BUSD (Polygon network), or USDT (BEP20 on Binance network) via your ODEE wallet.
              </p>
              <div className="space-y-2 text-sm text-amber-800">
                <p>1. Create an ODEE account at <strong>odee.com</strong> using your Vyvo email</p>
                <p>2. Transfer cryptocurrency to your ODEE wallet address</p>
                <p>3. Funds auto-convert to USDV Stable Coin</p>
                <p>4. Select "Odee Wallet" as payment method at checkout</p>
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

        {/* Step 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center text-xl font-bold">
              3
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Download Vyvo SocialFi App</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#003366]">
            <p className="text-lg text-gray-700 mb-6">
              The easiest way to generate invitation codes and share the Vyvo opportunity is through the Vyvo SocialFi App.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Download from App Store or Google Play</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Log in with your Vyvo account email and enter the OTP</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Open your Hub Console to generate invitation codes</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Use your Permanent Invitation Code (PCA or PCB) from HUB A or HUB B</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-900">
                <strong>Desktop Access:</strong> You can also generate codes from your laptop at{" "}
                <a href="https://www.vyvosocialfi.com" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                  vyvosocialfi.com
                </a>
              </p>
            </div>

            <Button 
              className="w-full sm:w-auto bg-[#003366] hover:bg-[#002244]"
              onClick={() => window.open('https://www.vyvosocialfi.com', '_blank')}
            >
              Access Vyvo SocialFi <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center text-xl font-bold">
              4
            </div>
            <h2 className="text-3xl font-bold text-gray-900">VAI OS Beta Set-up</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#003366]">
            <p className="text-lg text-gray-700 mb-6">
              As a paid Vyvo member, you now have access to the beta version of the VAI OS LifeCoPilot!
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Navigate to <strong>beta.vyvo.ai</strong> in your browser (phone or desktop)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Watch the video walkthrough for complete setup instructions</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-[#003366] hover:bg-[#002244]"
                onClick={() => window.open('https://beta.vyvo.ai', '_blank')}
              >
                Access VAI OS Beta <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="flex-1 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
                onClick={() => window.open('https://beta.vyvo.ai', '_blank')}
              >
                Watch Setup Video <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
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
            You're now ready to start building and sharing your Vyvo business with others!
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
