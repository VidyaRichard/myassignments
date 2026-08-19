import { test } from '@playwright/test';
//Dropdown sample program 
test('launch browser', async ({ page }) => {
  await page.goto('https://leafground.com/select.xhtml');
  //playwright option is selected or not 
  
  const tool=await page.locator('.ui-selectonemenu').nth(0)
  tool.selectOption({label:'Playwright'})
  await page.waitForTimeout(2000)
  //to seelct third option .
tool.selectOption({index:3})
  await page.waitForTimeout(2000)
  const dropDown =page.locator('[class="ui-selectonemenu"]>option')
  const dropDownvalue=await dropDown.count()
  console.log(dropDownvalue)

  for(let index=0;index<dropDownvalue;index++)
  {
    console.log(await dropDown.nth(index).innerText())
    
  }
});