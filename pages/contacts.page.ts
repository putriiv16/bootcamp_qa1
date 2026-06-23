import { Page, Locator } from '@playwright/test';

export class ContactsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly addContactButton: Locator;
  readonly searchField: Locator;
  readonly contactsTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Contacts', exact: true });
    this.addContactButton = page.getByRole('button', { name: 'Add Contact' });
    this.searchField = page.getByPlaceholder('Search by name, email, or phone…');
    this.contactsTable = page.getByRole('table');
  }

  contactRowByName(name: string): Locator {
    return this.page.getByRole('row', { name: new RegExp(name) });
  }
}
