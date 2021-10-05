import { Page } from "@playwright/test";

export class CheckoutInfoPage {
  private readonly page: Page;
  private readonly selectors = {
    first_name: "#first-name",
    last_name: "#last-name",
    zip_code: "#postal-code",
    continue: "#continue",
  };

  constructor(page: Page) {
    this.page = page;
  }

  async fillCheckoutInformation() {
    await this.page.fill(this.selectors.first_name, "Eric");
    await this.page.fill(this.selectors.last_name, "Martin");
    await this.page.fill(this.selectors.zip_code, "600005");
    await this.page.click(this.selectors.continue);
  }
}
