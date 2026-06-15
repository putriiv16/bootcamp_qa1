import { test, expect } from '@playwright/test';
import {RegisterPage} from '../pages/register.page';

test('successfully register new user', async ({ page }) => {

    // precondition
  await page.goto('https://www.emra.chat/signup');

  const Register=new RegisterPage(page);

  // step to reproduce
  await Register.emailField.fill('pv169.xxx@gmail.com');
  await Register.passwordField.click();
  await Register.passwordField.fill('Test123!@');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
//   await page.getByRole('textbox', { name: 'Confirm Password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Confirm Password' }).fill('T');
//   await page.getByRole('textbox', { name: 'Confirm Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Test123!@');
  await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('textbox', { name: 'Full Name' }).click();
  // await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Full Name' }).fill('P');
  // await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Full Name' }).fill('Putri ');
  // await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Putri V');
  // await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('89683671295');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  // await page.getByRole('textbox', { name: 'Company Name' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Company Name' }).fill('T');
  // await page.getByRole('textbox', { name: 'Company Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Company Name' }).fill('Test 123');
  await page.getByLabel('Industry').selectOption('other');
  await page.getByLabel('Company Size').selectOption('1-10');
  await page.getByRole('button', { name: 'Create Account' }).click();

  // expected result
  await page.getByRole('heading', { name: 'Emra' }).click();
  await page.locator('div').filter({ hasText: 'Please verify your email' }).nth(3).click();
});