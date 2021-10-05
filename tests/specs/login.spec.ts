import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";

test.describe("Login test suite", () => {
  test("Login with valid details", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login();
    const cartResult = await homePage.isCartDisplayed();

    expect(cartResult).toBeTruthy();
  });
});
