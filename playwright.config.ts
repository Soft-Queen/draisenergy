import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:3099",
    trace: "on-first-retry",
  },
  webServer: {
    command: "pnpm build && pnpm start --port 3099",
    url: "http://127.0.0.1:3099",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: {
      ENQUIRY_MODE: "mock",
      NEXT_PUBLIC_PARTNER_LOGO_PREVIEW: "true",
      NEXT_PUBLIC_WHATSAPP_NUMBER: "2348036872321",
    },
  },
  projects: [
    {
      name: "desktop-chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "tablet-chrome",
      use: { ...devices["iPad (gen 7)"] },
    },
  ],
});
