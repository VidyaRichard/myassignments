import {test } from "@playwright/test"
test('sequential way of handling window ',async({page,context})=>{

    await page.goto("https://www.amazon.com/")
    await page.waitForTimeout(3000)
    let searchbox=page.locator('//input[@id="twotabsearchtextbox"]')
    await searchbox.fill("phones")
    await searchbox.press('Enter')
    await page.waitForLoadState("domcontentloaded");
    //start listen for the new window
    let parentWindow=context.waitForEvent('page')
    //step2 
   // create the event listner and promise  is created  and its pending 
   //click the product
    await page.locator('//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').nth(0).click();
    //capture the child window after its open 

    let childwindow=await parentWindow   // resolving the promise
    await childwindow.waitForLoadState();
    //const price= await childwindow.locator('//span[@class="a-offscreen"]').nth(0)
    //console.log(price)
    console.log("title is",await childwindow.title())
    console.log("parent ",await page.title())
    await page.bringToFront()

});
