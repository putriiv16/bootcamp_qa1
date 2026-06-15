import { test, expect } from '@playwright/test';
import {RegisterPage} from '../pages/register.page';

test('successfully register new user using codegen p0 @positive', async ({ page }) => {

    // precondition
  await page.goto('https://www.emra.chat/signup');

  // step to reproduce
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pv169.xxx@gmail.com');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Test123!@');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Test123!@');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Putri V');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('89683671295');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill('Test 123');
  await page.getByLabel('Industry').selectOption('other');
  await page.getByLabel('Company Size').selectOption('1-10');
  await page.getByRole('button', { name: 'Create Account' }).click();

  // expected result (still not working, need to be fixed)
  await page.getByRole('heading', { name: 'Emra' }); //.click();
  await page.locator('div').filter({ hasText: 'Please verify your email' }).nth(3); //.click();
});

test('successfully register new user using POM @p0 @positive', async ({ page }) => {
  const email = "pv169.xxx@gmail.com";
  const password = "Test123!@";
  const confirmPassword = "Test123!@";
  const Register=new RegisterPage(page);

    // precondition
  await Register.goto();

  // step to reproduce
  await Register.registerAs(email, password, confirmPassword);

  await Register.fillUserInfo('Putri V', '89683671295');

  await Register.fillCompanyInfo('Test 123', 'other', '1-10');

  // expected result (still not working, need to be fixed)
  await page.getByRole('heading', { name: 'Emra' }); //.click();
  await page.locator('div').filter({ hasText: 'Please verify your email' }).nth(3); //.click();
});