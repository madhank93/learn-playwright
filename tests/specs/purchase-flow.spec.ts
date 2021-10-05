import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";

test.describe("Purchase flow", () => {
  test("Verify able to add a product to the cart and checkout", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login();

    await homePage.addItemsToCart();
    const itemsCount = await homePage.getCartItemsCount();

    expect(itemsCount).toBe("2");
  });
});
