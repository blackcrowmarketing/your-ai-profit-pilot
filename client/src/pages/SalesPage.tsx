/**
 * Main Sales Page - Long-Form Direct Response Copy
 * Design Philosophy: 10 sections, storytelling, clear CTAs
 * Color Scheme: Deep Blue (#003366) + White + Cyan accents
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validateEmail, getSocialFiUrl } from "@/lib/getresponse";
import { trpc } from "@/lib/trpc";
import { Loader2, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";

export default function SalesPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showEmailInput, setShowEmailInput] = useState(false);

  const subscribeMutation = trpc.email.subscribe.useMutation();

  // Load email from session storage on mount
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      setShowEmailInput(false);
    } else {
      setShowEmailInput(true);
    }
  }, []);

  const handleCTA = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get email from session storage or state
    const emailToUse = email || sessionStorage.getItem("userEmail") || "";

    if (!validateEmail(emailToUse)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      setShowEmailInput(true);
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const result = await subscribeMutation.mutateAsync({ email: emailToUse, source: "sales-page" });

      if (result.success) {
        setStatus("success");
        setMessage("Invitation code sent! Redirecting to registration...");

        // Redirect to SocialFi after 1.5 seconds
        setTimeout(() => {
          window.location.href = getSocialFiUrl();
        }, 1500);
      } else {
        setStatus("error");
        setMessage(result.message);
      }
    } catch (error) {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const faqItems = [
    {
      question: "Isn't this just another MLM/pyramid scheme?",
      answer:
        "No. Vyvo has no mandatory purchases, a real product with standalone value, simplified transparent compensation, and blockchain verification. You earn by building community, not by recruiting people into a broken system.",
    },
    {
      question: "I don't understand blockchain or GPU clusters. Do I need to?",
      answer:
        "No. You don't need to understand how gold is mined to own gold. You don't need to understand how electricity is generated to use it. LifeCoPilot handles the technical complexity. You just build relationships.",
    },
    {
      question: "Why should I trust Vyvo over Big Tech companies?",
      answer:
        "Because we're built on a different model. Big Tech profits by controlling your data and selling you AI. Vyvo profits by helping you own the infrastructure and control your data. Our incentives are aligned with yours.",
    },
    {
      question: "How much money can I make?",
      answer:
        "That depends on your effort and your team. Early adopters who build active communities are seeing significant income. But we're transparent: this is a business opportunity, not a get-rich-quick scheme. Success requires work.",
    },
    {
      question: "What if I just want to use LifeCoPilot without building a business?",
      answer:
        "You can. LifeCoPilot is a standalone AI companion. Use it for personal productivity. No business involvement required.",
    },
    {
      question: "Is my data really private?",
      answer:
        "Yes. Your data is encrypted on the blockchain. We never sell it. We never use it to train our AI. Privacy is our business model, not a feature we added later.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
      <header className="bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="Your AI Profit Pilot Logo" className="w-10 h-10" />
            <h1 className="text-2xl md:text-3xl font-bold text-[#003366]">Your AI Profit Pilot</h1>
          </div>
          <a href="/" className="text-sm text-gray-600 hover:text-[#003366]">
            ← Back
          </a>
        </div>
      </header>

      <main className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section 1: Hero */}
          <section className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight">
                Own Your Slice of the
                <br />
                <span className="text-cyan-500">$15.7 Trillion AI Pie</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                For the first time in history, everyday entrepreneurs can own the infrastructure that powers artificial intelligence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Big Tech built a $15.7 trillion market by selling AI to consumers. But what if you could own the infrastructure instead? What if you could build a global team and earn residual income as the AI market explodes?
              </p>
            </div>
            <div className="pt-6">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="h-14 px-8 bg-[#003366] hover:bg-[#002244] text-white font-semibold text-lg rounded-lg transition-colors"
              >
                Request Your Invitation Code
              </Button>
            </div>
          </section>

          {/* Section 2: The Problem */}
          <section className="space-y-6 py-12 border-t border-gray-200">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003366]">
              Big Tech is Cashing In. You're Left Behind.
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                The AI revolution is happening right now. Every day, billions of people use AI—and Big Tech is capturing 100% of the value. They own the infrastructure. They own the data. They own the profits.
              </p>
              <p>Meanwhile, you're on the sidelines. You use their AI. You generate their data. You watch them get rich.</p>
              <p className="text-xl font-semibold text-[#003366]">What if there was a different way?</p>
            </div>
            <img
              src="/images/hero-ai-network.jpg"
              alt="AI Network Infrastructure"
              className="w-full rounded-lg shadow-lg"
            />
          </section>

          {/* Section 3: The Opportunity */}
          <section className="space-y-6 py-12 border-t border-gray-200">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003366]">
              What If You Could Own the Infrastructure?
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Vyvo is building a different kind of AI economy. One where everyday people like you can own the infrastructure. One where your data belongs to you. One where you can build a global team and participate in the $15.7 trillion AI market.
              </p>
              <p className="text-xl font-semibold text-[#003366]">
                This isn't about buying products. It's about becoming an architect of the AI economy.
              </p>
            </div>
            <img
              src="/images/gpu-cluster-infrastructure.jpg"
              alt="GPU Cluster Infrastructure"
              className="w-full rounded-lg shadow-lg"
            />
          </section>

          {/* Section 4: Three Pillars */}
          <section className="space-y-8 py-12 border-t border-gray-200">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003366]">Three Pillars of Vyvo</h3>

            {/* Pillar 1 */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-[#003366]">Pillar 1: Own Your Data</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your data is your most valuable asset. But Big Tech treats it like a commodity—buying it, selling it, using it to train their AI without your permission.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vyvo is different. Your data is encrypted on the blockchain. It's yours. You control it. You decide who accesses it. And when your data generates value, you benefit—not Big Tech.
              </p>
              <p className="text-xl font-semibold text-cyan-500">Privacy is our business model.</p>
              <img
                src="/images/blockchain-privacy.jpg"
                alt="Blockchain Privacy"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4 pt-8">
              <h4 className="text-2xl font-bold text-[#003366]">Pillar 2: Own the Infrastructure</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                GPU clusters are the backbone of AI. They're expensive. They're powerful. And they're controlled by a handful of mega-corporations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vyvo is changing that. As a member, you can own GPU cluster shares. As the AI market grows, your infrastructure appreciates. As demand increases, you earn residual income.
              </p>
              <p className="text-xl font-semibold text-cyan-500">You're not just using AI. You're owning the foundation it's built on.</p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4 pt-8">
              <h4 className="text-2xl font-bold text-[#003366]">Pillar 3: Build Your Community</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                The best businesses are built on community. Vyvo makes it simple. No mandatory purchases. No inventory. No pressure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Share the opportunity. Build your team. Earn commissions. Watch your community grow. The AI does the heavy lifting—LifeCoPilot automates the business work so you can focus on relationships.
              </p>
              <p className="text-xl font-semibold text-cyan-500">This is network marketing for the AI Age.</p>
              <img
                src="/images/community-network.jpg"
                alt="Global Community Network"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Section 5: LifeCoPilot */}
          <section className="space-y-6 py-12 border-t border-gray-200">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003366]">
              Meet LifeCoPilot: Your Personal AI Companion
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              LifeCoPilot is your personal AI companion for health, wellness, and daily life. It learns your habits. It understands your needs. It's there when you need it.
            </p>

            <div className="grid md:grid-cols-2 gap-6 py-6">
              <div className="space-y-2">
                <h5 className="font-semibold text-[#003366]">✓ Learns your preferences and daily routines</h5>
                <h5 className="font-semibold text-[#003366]">✓ Integrates your biometric and health data</h5>
                <h5 className="font-semibold text-[#003366]">✓ Provides proactive health insights</h5>
                <h5 className="font-semibold text-[#003366]">✓ Automates routine personal tasks</h5>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-[#003366]">✓ Tracks your wellness and lifestyle goals</h5>
                <h5 className="font-semibold text-[#003366]">✓ Supports 32+ languages</h5>
                <h5 className="font-semibold text-[#003366]">✓ Privacy-first data encryption</h5>
                <h5 className="font-semibold text-[#003366]">✓ Provides 24/7 personal support</h5>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              LifeCoPilot is your AI companion for life—whether you're building a business or just living smarter.
            </p>

            <img
              src="/images/ai-companion-interface.jpg"
              alt="LifeCoPilot AI Interface"
              className="w-full rounded-lg shadow-lg"
            />

            {/* Coming Soon: Business CoPilot Callout */}
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-lg">
              <h4 className="text-2xl font-bold text-[#003366] mb-3 flex items-center gap-2">
                <span>🚀</span> Coming Soon: Business CoPilot
              </h4>
              <p className="text-gray-700 leading-relaxed">
                For Vyvo members building their business, we're launching Business CoPilot—an AI tool specifically designed to help you <strong>share the opportunity 24/7</strong>, manage your team, track performance, and automate business tasks. Your AI assistant works around the clock, so you never miss a chance to grow your Vyvo community.
              </p>
            </div>
          </section>

          {/* Section 6: Why Vyvo is Different */}
          <section className="space-y-6 py-12 border-t border-gray-200">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003366]">
              Why Vyvo is the Gold Standard for Network Marketing in the AI Age
            </h3>

            <div className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-lg font-bold text-[#003366] mb-2">✓ No Mandatory Purchases</h5>
                <p className="text-gray-700">
                  You're not forced to buy products to stay active. No inventory. No garage full of stock.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-lg font-bold text-[#003366] mb-2">✓ Real Product with Real Value</h5>
                <p className="text-gray-700">
                  LifeCoPilot is a standalone personal AI companion for health, wellness, and daily life. People use it because it's genuinely useful—whether you're building a business or not.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-lg font-bold text-[#003366] mb-2">✓ Transparent Compensation</h5>
                <p className="text-gray-700">
                  Our compensation plan is simple. No hidden bonuses. No complex matrices. You know exactly how you earn.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-lg font-bold text-[#003366] mb-2">✓ Blockchain Foundation</h5>
                <p className="text-gray-700">
                  Everything is recorded on the blockchain. Transparent. Verifiable. Trustworthy.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-lg font-bold text-[#003366] mb-2">✓ AI Does the Work</h5>
                <p className="text-gray-700">
                  AI technology automates tasks and provides intelligent insights, so you can focus on building relationships, not managing logistics.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-lg font-bold text-[#003366] mb-2">✓ Privacy First</h5>
                <p className="text-gray-700">
                  Your data is yours. We never sell it. We never use it to train corporate AI. Privacy is our business model.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: FAQ */}
          <section className="space-y-6 py-12 border-t border-gray-200">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003366]">Frequently Asked Questions</h3>

            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h5 className="text-left font-semibold text-[#003366]">{item.question}</h5>
                    <ChevronDown
                      className={`w-5 h-5 text-[#003366] transition-transform ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Final CTA */}
          <section
            id="cta-section"
            className="space-y-8 py-12 border-t border-gray-200 bg-gradient-to-br from-[#003366] to-[#002244] rounded-lg p-8 text-white"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold">
                The Race to 1 Million is On. Are You In?
              </h3>
              <p className="text-lg leading-relaxed opacity-95">
                This is a once-in-a-generation opportunity. The AI market is exploding. GPU infrastructure is becoming the new gold. Community-driven platforms are replacing corporate monopolies.
              </p>
              <p className="text-lg leading-relaxed opacity-95">
                Early adopters will build the biggest communities. They'll own the most infrastructure. They'll capture the most value.
              </p>
              <p className="text-lg font-semibold">
                But this window won't stay open forever. As Vyvo grows, the opportunity becomes more competitive. The time to act is now.
              </p>
            </div>

            {/* CTA Form */}
            <form onSubmit={handleCTA} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="cta-email" className="block text-sm font-medium">
                  Request Your Invitation Code
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  {showEmailInput ? (
                    <Input
                      id="cta-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      className="flex-1 h-12 text-base bg-white text-gray-900"
                      required
                    />
                  ) : (
                    <div className="flex-1 h-12 flex items-center px-4 bg-white border border-gray-300 rounded-lg text-gray-700">
                      <span className="text-sm">Sending to: <span className="font-semibold">{email}</span></span>
                    </div>
                  )}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 px-8 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get Code"
                    )}
                  </Button>
                </div>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-500 bg-opacity-20 border border-green-400 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <p className="text-green-100 font-medium">{message}</p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-500 bg-opacity-20 border border-red-400 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
                  <p className="text-red-100 font-medium">{message}</p>
                </div>
              )}

              <p className="text-sm opacity-90">
                Early access is still available—but not for long. Get your invitation code and join the architects of the AI economy.
              </p>
            </form>
          </section>

          {/* Footer */}
          <section className="py-12 border-t border-gray-200 text-center text-gray-600 space-y-4">
            <p>© 2025 Your AI Profit Pilot. All rights reserved.</p>
            <div className="flex justify-center gap-4 text-sm">
              <a href="/privacy" className="text-[#003366] hover:underline">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="text-[#003366] hover:underline">
                Terms of Service
              </a>
              <span>•</span>
              <a href="/disclaimer" className="text-[#003366] hover:underline">
                Disclaimer
              </a>
            </div>
            <p className="text-xs text-gray-500 max-w-3xl mx-auto pt-4">
              Vyvo HQ is not responsible for any content, claims, or representations made by independent Vyvo Influencers on their social media pages, events, or marketing materials.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
