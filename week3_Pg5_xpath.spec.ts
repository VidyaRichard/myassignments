import test from "@playwright/test";

test('Learn x-path',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('//input[@id="username"]').fill('demoCSR2')
    await page.locator('//input[@name="PASSWORD"]').fill('crmsfa')
    await page.locator('//input[contains(@type,"submit")]').click();
    await page.waitForTimeout(3000)
})