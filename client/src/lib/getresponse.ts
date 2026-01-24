/**
 * GetResponse API Integration
 * Handles email subscription and auto-responder triggers
 */

const GETRESPONSE_API_KEY = "6u3r3sw5o7oagaxiese3bf1adsypcp4h";
const GETRESPONSE_CAMPAIGN_ID = "CQujq";
const GETRESPONSE_LIST_ID = "476757201";
const GETRESPONSE_API_URL = "https://api.getresponse.com/v3";

interface SubscribeResponse {
  success: boolean;
  message: string;
  contactId?: string;
  error?: string;
}

/**
 * Subscribe email to GetResponse campaign
 * Triggers auto-responder with invitation code
 */
export async function subscribeToGetResponse(
  email: string,
  source: "squeeze-page" | "sales-page" = "squeeze-page"
): Promise<SubscribeResponse> {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
        error: "INVALID_EMAIL",
      };
    }

    // Call GetResponse API to add contact
    const response = await fetch(`${GETRESPONSE_API_URL}/contacts`, {
      method: "POST",
      headers: {
        "X-Auth-Token": `api-key ${GETRESPONSE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        campaign: {
          campaignId: GETRESPONSE_CAMPAIGN_ID,
        },
        tags: [source, "early-access", "entrepreneur"],
        customFieldValues: [
          {
            customFieldId: "1",
            value: [source === "squeeze-page" ? "Squeeze Page" : "Sales Page"],
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("GetResponse API error:", error);

      // Handle specific error cases
      if (response.status === 409) {
        return {
          success: true,
          message: "Email already registered. Check your inbox for your code.",
          error: "EMAIL_EXISTS",
        };
      }

      return {
        success: false,
        message: "Failed to subscribe. Please try again.",
        error: error.message || "UNKNOWN_ERROR",
      };
    }

    const data = await response.json();

    return {
      success: true,
      message: "Successfully subscribed! Redirecting...",
      contactId: data.contactId,
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      success: false,
      message: "An error occurred. Please try again.",
      error: error instanceof Error ? error.message : "NETWORK_ERROR",
    };
  }
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Get invitation code (hardcoded for now, will be dynamic)
 */
export function getInvitationCode(): string {
  return "PCB1I2LX6";
}

/**
 * Get SocialFi registration URL with invitation code
 */
export function getSocialFiUrl(): string {
  const code = getInvitationCode();
  return `https://joinsocialfi.com/${code}/vai`;
}
