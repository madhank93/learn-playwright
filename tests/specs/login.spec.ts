import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";
import { BasePage } from "../pages/base.page";
import test_data from "../data/purchase-flow.json";

test.describe("Login test suite", () => {
  test("Login with valid details", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const basePage = new BasePage(page);

    await basePage.goto();
    await loginPage.login(test_data.login_details);
    const cartResult = await homePage.isCartDisplayed();

    expect(cartResult).toBeTruthy();
  });
});
