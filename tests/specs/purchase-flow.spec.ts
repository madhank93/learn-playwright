import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";
import { BasePage } from "../pages/base.page";
import test_data from "../data/purchase-flow.json";

test.describe("Purchase flow", () => {
  test.beforeEach(async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.goto();
  });

  test("Verify cart count", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.login(test_data.login_details);

    await homePage.addItemsToCart(test_data.products);
    const itemsCount = await homePage.getCartItemsCount();

    expect(itemsCount).toBe("2");
  });

  test.only("Verify able to add a product to the cart and checkout", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    const msg = await loginPage
      .login(test_data.login_details)
      .then((callback) => callback.addItemsToCart(test_data.products))
      .then((callback) => callback.gotoCartPage())
      .then((callback) => callback.checkoutCart())
      .then((callback) =>
        callback.fillCheckoutInformation(test_data.checkout_info)
      )
      .then((callback) => callback.finishCheckout())
      .then((callback) => callback.orderCompleteMessage())
      .catch((err) => console.error(err));

    expect(msg).toBe("THANK YOU FOR YOUR ORDER");
  });

  test.afterEach(async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.tearDown();
  });
});
