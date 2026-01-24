/**
 * GDPR Cookie Consent Banner
 * Black Crow Marketing Standard Protocol
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("vyvo-cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("vyvo-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("vyvo-cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#003366] text-white p-4 md:p-6 shadow-2xl z-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base leading-relaxed">
            We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. By clicking "Accept," you consent to our use of cookies. You can manage your preferences or learn more in our{" "}
            <a href="/privacy" className="underline hover:text-cyan-300 transition-colors">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <Button
            onClick={handleReject}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#003366]"
          >
            Reject
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-cyan-500 hover:bg-cyan-600 text-white"
          >
            Accept
          </Button>
        </div>

        <button
          onClick={handleReject}
          className="absolute top-4 right-4 md:hidden text-white hover:text-cyan-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
