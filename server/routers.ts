import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

const GETRESPONSE_API_KEY = "6u3r3sw5o7oagaxiese3bf1adsypcp4h";
const GETRESPONSE_CAMPAIGN_ID = "CQujq";
const GETRESPONSE_API_URL = "https://api.getresponse.com/v3";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // GetResponse email subscription
  email: router({
    subscribe: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          source: z.enum(["squeeze-page", "sales-page"]).default("squeeze-page"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const { email, source } = input;

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
              // Note: Tags removed - add tag IDs from GetResponse dashboard if needed
              // tags: ["tagId1", "tagId2"],
            }),
          });

          if (!response.ok) {
            let error;
            try {
              error = await response.json();
            } catch (e) {
              error = { message: `HTTP ${response.status}: ${response.statusText}` };
            }
            console.error("GetResponse API error:", error);

            // Handle specific error cases
            if (response.status === 409) {
              return {
                success: true,
                message: "Email already registered. Check your inbox for your code.",
                alreadyExists: true,
              };
            }

            throw new Error(error.message || "Failed to subscribe to GetResponse");
          }

          // Handle successful response (may have empty body)
          let data: any = {};
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            try {
              data = await response.json();
            } catch (e) {
              // Empty response body is OK for 201 Created
              console.log("Empty response body from GetResponse (this is OK)");
            }
          }

          return {
            success: true,
            message: "Successfully subscribed! Redirecting...",
            contactId: data.contactId || "success",
          };
        } catch (error) {
          console.error("Subscription error:", error);
          throw new Error(
            error instanceof Error ? error.message : "Failed to subscribe. Please try again."
          );
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
