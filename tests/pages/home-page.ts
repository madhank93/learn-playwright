import { Page } from "@playwright/test";

export class HomePage {
  private readonly page: Page;
  private readonly selectors = {
    cart_icon: "id=shopping_cart_container",
    back_pack: "data-test=add-to-cart-sauce-labs-backpack",
    bike_light: "data-test=add-to-cart-sauce-labs-bike-light",
    cart_count: ".shopping_cart_badge",
  };

  constructor(page: Page) {
    this.page = page;
  }

  async isCartDisplayed() {
    return this.page.isVisible(this.selectors.cart_icon);
  }

  async addItemsToCart() {
    await this.page.click(this.selectors.back_pack);
    await this.page.click(this.selectors.bike_light);
  }

  async getCartItemsCount() {
    return await this.page.textContent(this.selectors.cart_count);
  }
}
