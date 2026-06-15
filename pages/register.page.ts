import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly confirmPasswordField: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator('#email');
    this.passwordField = page.locator('#password');
    this.confirmPasswordField = page.locator('#confirmPassword');
    this.nextButton = page.locator('button[type="submit"], button:has-text("Next"), button:has-text("Create Account")');
  }

  async goto() {
    await this.page.goto('https://www.emra.chat/signup');
  }

  async registerAs(email: string, password: string, confirmPassword: string) {
    await this.emailField.click();
    await this.emailField.fill(email);
    await this.emailField.press('Tab');
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(confirmPassword);
    await this.nextButton.click();
  }

  async fillUserInfo(fullName: string, phoneNumber: string) {
    await this.page.getByRole('textbox', { name: 'Full Name' }).fill(fullName);
    await this.page.getByRole('textbox', { name: 'Phone Number' }).click();
    await this.page.getByRole('textbox', { name: 'Phone Number' }).fill(phoneNumber);
    await this.page.getByRole('button', { name: 'Next' }).click();
    await this.nextButton.click();
  }

  async fillCompanyInfo(companyName: string, industry: string, companySize: string) {
    await this.page.getByRole('textbox', { name: 'Company Name' }).click();
    await this.page.getByRole('textbox', { name: 'Company Name' }).fill(companyName);
    await this.page.getByLabel('Industry').selectOption(industry);
    await this.page.getByLabel('Company Size').selectOption(companySize);
    await this.nextButton.click();
  }
}