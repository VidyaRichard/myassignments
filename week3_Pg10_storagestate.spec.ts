import test from "@playwright/test";

test('Learn dynamic dropdown',async({page})=>{
    await page.goto('https://login.salesforce.com');
    await page.locator(('[name="username"]')).fill('aaa@gmail.com');
    await page.locator('#password').fill('1235');
    await page.locator('input[id="Login"]').click()


});