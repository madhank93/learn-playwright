import { Page } from "@playwright/test";

export class CartPage {
  private readonly page: Page;
  private readonly selectors = {
    check_out: "#checkout",
  };

  constructor(page: Page) {
    this.page = page;
  }

  async checkoutCart() {
    await this.page.click(this.selectors.check_out);
  }
}
