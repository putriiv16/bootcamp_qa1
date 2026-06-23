import { Page, Locator, expect } from '@playwright/test';

export class AddContactPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly nameField: Locator;
  readonly primaryEmailField: Locator;
  readonly primaryPhoneField: Locator;
  readonly activeContactCheckbox: Locator;
  readonly createButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Add New Contact' });
    this.nameField = page.getByPlaceholder('Contact name');
    this.primaryEmailField = page.getByPlaceholder('Primary email address');
    this.primaryPhoneField = page.getByPlaceholder('Primary phone number');
    this.activeContactCheckbox = page.getByRole('checkbox', { name: 'Active contact' });
    this.createButton = page.getByRole('button', { name: 'Create Contact' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  }

  async goto() {
    await this.page.goto('https://www.emra.chat/contacts/add');
    await expect(this.heading).toBeVisible();
  }

  async addContact(name: string, email: string, phone: string) {
    await this.nameField.fill(name);
    await this.primaryEmailField.fill(email);
    await this.primaryPhoneField.fill(phone);
    await this.createButton.click();
  }
}
