import { Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly selectors = {
    user_name: "#user-name",
    password: "#password",
    login_button: "#login-button",
  };
  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
    return this;
  }
  async login() {
    await this.page.fill(this.selectors.user_name, "standard_user");
    await this.page.fill(this.selectors.password, "secret_sauce");
    await this.page.click(this.selectors.login_button);
    return this;
  }
  async tearDown() {
    await this.page.close();
  }
}
