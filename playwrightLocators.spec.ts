import { test } from '@playwright/test';
// locate the elements correctly while testing some changes had made by vidya 
test('launch browser', async ({ page }) => {
  await page.goto('https://login.salesforce.com');
await page.getByAltText('salesforce login').isVisible();
await page.getByText('Username',{exact:true}).fill('dilipkumar.rajendran@testleaf.com')
await page.getByRole('button',{name:'Log In'}).click();
await page.getByLabel("Password",{exact:true}).fill("TestLeaf@2025");
await page.getByRole('button',{name:'Log In'}).click();
//Dom contentto be loaded , waiting to entire DOM content to loaded ,once the entire page loaded it will perform the action 
await page.waitForLoadState('domcontentloaded');
await page.getByTitle('App Launcher',{exact:true}).click();
await page.getByLabel('View All Applications',{exact:true}).click();
await page.getByPlaceholder('Search apps or items...',{exact:true}).fill("lead")

});