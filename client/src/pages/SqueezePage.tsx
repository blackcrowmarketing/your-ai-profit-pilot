/**
 * Squeeze Page - Email Capture with Intro Video
 * Design Philosophy: Minimal copy, maximum focus on video + CTA
 * Color Scheme: Deep Blue (#003366) + White + Cyan accents
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validateEmail } from "@/lib/getresponse";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function SqueezePage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [, setLocation] = useLocation();

  const subscribeMutation = trpc.email.subscribe.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const result = await subscribeMutation.mutateAsync({
        email,
        source: "squeeze-page",
      });

      setStatus("success");
      setMessage(result.message);

      // Store email in session storage for sales page
      sessionStorage.setItem("userEmail", email);

      // Redirect to sales page after 2 seconds
      setTimeout(() => {
        setLocation("/sales");
      }, 2000);
    } catch (error) {
      setStatus("error");
      console.error("Subscription error:", error);
      
      // Extract detailed error message from tRPC error
      let errorMessage = "An unexpected error occurred. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <picture>
              <source srcSet="/favicon.webp" type="image/webp" />
              <img src="/favicon.png" alt="Your AI Profit Pilot Logo" className="w-10 h-10" loading="lazy" />
            </picture>
            <h1 className="text-2xl md:text-3xl font-bold text-[#003366]">
              Your AI Profit Pilot
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-8 px-4 md:px-8">
        <div className="w-full max-w-2xl">
          {/* Hero Text */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4 leading-tight">
              The AI Revolution is Here.
              <br />
              <span className="text-cyan-500">Are You In or Out?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Get early access to the opportunity that's reshaping how people own AI infrastructure.
            </p>
          </div>

          {/* Video Container */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
              <picture>
                <source srcSet="/images/hero-ai-network.webp" type="image/webp" />
                <img src="/images/hero-ai-network.jpg" alt="Hero" className="absolute top-0 left-0 w-full h-full object-cover" loading="lazy" />
              </picture>
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                poster="/images/hero-ai-network.jpg"
                loading="lazy"
              >
                <source src="https://d2xsxph8kpxj0f.cloudfront.net/310519663076525872/8eRdvGBournYAMuk2rFpRh/videos/IntroducingVAIOS.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Show Me More
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="flex-1 h-12 text-base"
                  required
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 px-8 bg-[#003366] hover:bg-[#002244] text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Show Me More"
                  )}
                </Button>
              </div>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-medium">{message}</p>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800 font-medium">{message}</p>
              </div>
            )}

            {/* Trust Signals */}
            <div className="text-center text-sm text-gray-600 space-y-1">
              <p>✓ No spam. No commitment. Just early access.</p>
              <p>✓ Join 50,000+ early adopters</p>
              <p>✓ Invitation-only opportunity</p>
            </div>
          </form>

          {/* Bottom CTA */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              By entering your email, you agree to receive communications about the Vyvo Business Opportunity.
            </p>
            <a href="/privacy" className="text-sm text-[#003366] hover:underline">
              Privacy Policy
            </a>
            <span className="text-gray-400 mx-2">•</span>
            <a href="/terms" className="text-sm text-[#003366] hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6 px-4 md:px-8 text-center text-sm text-gray-600">
        <p className="mb-3">© 2025 Your AI Profit Pilot. All rights reserved.</p>
        <p className="text-xs text-gray-500 max-w-3xl mx-auto">
          Vyvo HQ is not responsible for any content, claims, or representations made by independent Vyvo Influencers on their social media pages, events, or marketing materials.
        </p>
      </footer>
    </div>
  );
}
