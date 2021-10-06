import { Page } from "@playwright/test";

export class BasePage {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
    return this;
  }

  async tearDown() {
    await this.page.close();
  }
}
