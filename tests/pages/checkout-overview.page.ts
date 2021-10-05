import { Page } from "@playwright/test";

export class CheckoutOverviewPage {
  private readonly page: Page;
  private readonly selectors = {
    finish: "#checkout",
  };

  constructor(page: Page) {
    this.page = page;
  }

  async finishCheckout() {
    await this.page.click(this.selectors.finish);
  }
}
