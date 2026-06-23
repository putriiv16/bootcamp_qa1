import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AddContactPage } from '../pages/addContact.page';
import { ContactsPage } from '../pages/contacts.page';

// TC-10: User successfully add contact using valid data
test('TC-10 User successfully add contact using valid data @p1 @contact @positive', async ({ page }) => {
  const email = 'putriiv.16@gmail.com';
  const password = 'Akucantik123!';

  // dummy data (unique per run)
  const stamp = Date.now();
  const contactName = `Test ${stamp}`;
  const contactEmail = `qa-${stamp}@yopmail.com`;
  const contactPhone = `0812${stamp.toString().slice(-7)}`;

  const loginPage = new LoginPage(page);
  const addContactPage = new AddContactPage(page);
  const contactsPage = new ContactsPage(page);

  // precondition: user is logged in with valid data
  await loginPage.goto();
  await loginPage.loginAs(email, password);
  await page.waitForURL((url) => !url.pathname.includes('/login'));

  // step 3 & 4: go to add contact page and verify it is visible
  await addContactPage.goto();
  await expect(addContactPage.heading).toBeVisible();

  // step 5 & 6: add new contact using dummy data and click create
  await addContactPage.addContact(contactName, contactEmail, contactPhone);

  // expected result: the new contact is successfully created
  await expect(contactsPage.heading).toBeVisible();
  await expect(contactsPage.contactRowByName(contactName)).toBeVisible();
  await expect(page.getByText(contactEmail)).toBeVisible();
});
