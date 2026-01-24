import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { Context } from "./_core/trpc";

// Mock fetch globally
global.fetch = vi.fn();

describe("email.subscribe", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createMockContext = (): Context => ({
    req: {} as any,
    res: {} as any,
    user: null,
  });

  it("should successfully subscribe a valid email", async () => {
    const mockFetch = global.fetch as any;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ contactId: "test-contact-123" }),
    });

    const caller = appRouter.createCaller(createMockContext());
    const result = await caller.email.subscribe({
      email: "test@example.com",
      source: "squeeze-page",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Successfully subscribed");
    expect(result.contactId).toBe("test-contact-123");
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.getresponse.com/v3/contacts",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "X-Auth-Token": expect.stringContaining("api-key"),
          "Content-Type": "application/json",
        }),
      })
    );
  });

  it("should handle duplicate email (409 conflict)", async () => {
    const mockFetch = global.fetch as any;
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 409,
      json: async () => ({ message: "Contact already exists" }),
    });

    const caller = appRouter.createCaller(createMockContext());
    const result = await caller.email.subscribe({
      email: "existing@example.com",
      source: "squeeze-page",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("already registered");
    expect(result.alreadyExists).toBe(true);
  });

  it("should reject invalid email format", async () => {
    const caller = appRouter.createCaller(createMockContext());

    await expect(
      caller.email.subscribe({
        email: "invalid-email",
        source: "squeeze-page",
      })
    ).rejects.toThrow();
  });

  it("should handle GetResponse API errors", async () => {
    const mockFetch = global.fetch as any;
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ message: "Internal server error" }),
    });

    const caller = appRouter.createCaller(createMockContext());

    await expect(
      caller.email.subscribe({
        email: "test@example.com",
        source: "squeeze-page",
      })
    ).rejects.toThrow();
  });

  it("should handle network errors", async () => {
    const mockFetch = global.fetch as any;
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    const caller = appRouter.createCaller(createMockContext());

    await expect(
      caller.email.subscribe({
        email: "test@example.com",
        source: "squeeze-page",
      })
    ).rejects.toThrow();
  });
});
