import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Successful Login Attempt using Page Object Model @p0 @login @positive', async ({ page }) => {
  const email = "putriiv.16@gmail.com";
  const password = "Akucantik123!";
  const loginPage = new LoginPage(page);

  // precondition
  await loginPage.goto();

  // step to reproduce 
  await loginPage.loginAs(email, password);
});

  test('Successful Login Attempt @p0 using CodeGEN', async ({ page }) => {

  // precondition
  await page.goto('https://www.emra.chat/login');

  // step to reproduce 
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('putriiv.16@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Akucantik123!');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // expected result
  await expect(page.getByRole('heading', { name: 'Welcome to Emra! 🎉' })).toBeVisible();
  await page.getByRole('heading', { name: 'Emra', exact: true }).click();
});

test('Failed Login Attempt @p0', async ({ page }) => {

  // precondition
  await page.goto('https://www.emra.chat/login');

  // step to reproduce
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test123@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  // expected result
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});