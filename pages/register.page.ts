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
}