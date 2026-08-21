import { test,expect } from '@playwright/test';
//Dropdown sample program 
test('assertion', async ({ page }) => {
  await page.goto("https://leafground.com/input.xhtml")
  console.log(await page.title());
  console.log(page.url);

  await expect(page).toHaveURL('https://leafground.com/input.xhtml')
  //await expect (page).toHaveTitle('Leaftaps - TestLeaf Automation Platform')

  const locator1 = page.locator('input[disabled]').first()
  await expect(locator1).toBeDisabled()
  
  const locator2=page.locator('#j_idt88:name');
  await expect(locator2).toBeEditable()

const locator3 =page.locator('[placeholder=Babu Manickam]')
  await expect.soft(locator3).toBeDisabled()
/*
  await page.locator('j_idt88:j_idt95').clear()
  await page.locator('j_idt88:j_idt95').fill("vidya")*/
});