import { expect, test } from "@playwright/test";

const HEALTH_ENDPOINTS = ["/api/health", "/healthz", "/api/healthz", "/health", "/ping"];

test.describe("API: Health Check", () => {
  test("returns healthy response", async ({ request }) => {
    const response = await request.get("/api/health");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/json");

    const body = await response.json();
    expect(body.status).toBe("ok");
    expect(body.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });

  test.describe("URL aliases", () => {
    for (const endpoint of HEALTH_ENDPOINTS) {
      test(`${endpoint} returns healthy response`, async ({ request }) => {
        const response = await request.get(endpoint);

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toMatchObject({
          status: "ok",
          timestamp: expect.any(String)
        });
      });
    }
  });
});
