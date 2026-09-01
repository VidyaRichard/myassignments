import { test, expect } from '@playwright/test';

test('Handle frames and nested frames', async ({ page }) => {
await page.goto('https://www.leafground.com/frame.xhtml')
    const allframes = page.frames() // return all frames present in the page
    //main page as top frame
    //all iframes( child + nested) [mainframe, frame1, frame2,frame3, frame4]
    console.log("total number of frames",allframes.length);
    
    for(let i =0; i<allframes.length; i++){
        const url = allframes[i].url()
        console.log(`the url of the page is ${url}`);
        
    }
    const frame1 = allframes[1]
    await frame1.locator('#Click').click()
    await page.waitForTimeout(2000)
    console.log('frame1 is clicked');

// Verify initial text
  const clickMeButton = frame1.getByText('Click Me', { exact: true });
  await expect(clickMeButton).toBeVisible();




  // --------------------------------------------------
  // 1. Interact with Click Me button inside frame
  // --------------------------------------------------

/*  const frame1 = page.frameLocator('iframe');

  // Verify initial text
  const clickMeButton = frame1.getByText('Click Me', { exact: true });
  await expect(clickMeButton).toBeVisible();


  // Click the button
  await clickMeButton.click();
  // Assert text changed
  await expect(
    frame1.getByText('Hurray! You Clicked Me.', { exact: true })
  ).toBeVisible();

  // --------------------------------------------------
  // 2. Interact with Click Me button inside nested frame
  // --------------------------------------------------

  const nestedFrame = frame1.frameLocator('iframe');

  // Verify nested Click Me button
  const nestedClickMe = nestedFrame.getByText('Click Me', { exact: true });
  await expect(nestedClickMe).toBeVisible();

  // Click nested frame button
  await nestedClickMe.click();

  // Assert text changed
  await expect(
    nestedFrame.getByText('Hurray! You Clicked Me.', { exact: true })
  ).toBeVisible();

  console.log('Frame interaction completed successfully');
  */
});