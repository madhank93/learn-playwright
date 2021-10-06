import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "Chrome Stable",
      use: {
        headless: false,
        browserName: "chromium",
        channel: "chrome",
      },
    },
    {
      name: "Desktop Safari",
      use: {
        headless: false,
        browserName: "webkit",
        viewport: { width: 1200, height: 750 },
      },
    },
  ],
  workers: 2,
  reporter: [["line"], ["allure-playwright"]],
};
export default config;
