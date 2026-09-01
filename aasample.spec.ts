import test from "@playwright/test";

test('Learn frames using playwright',async({page})=>{
    await page.goto('https://www.leafground.com/frame.xhtml')
    
    const allframes = page.frames() // return all frames present in the page
    //main page as top frame
    //all iframes( child + nested) [mainframe, frame1, frame2,frame3, frame4]
    console.log(allframes.length);
    
    for(let i =0; i<allframes.length; i++){
        const url = allframes[i].url()
        console.log(`the url of the page is ${url}`);
    }
    const frame1 = allframes[1]
    await frame1.locator('//button[text()="Click Me"]').click()
    await page.waitForTimeout(2000)
    console.log('frame1 is clicked');

    const frame2 = allframes[2]
    await frame2.locator('//button[text()="Count Frames"]').click()
    await page.waitForTimeout(2000)
    console.log('frame2 is clicked');


    /*const frame4 = allframes[4]
    await frame4.getByRole("button",{name:'Click Me'}).click()
    await page.waitForTimeout(2000)
    console.log('frame4 is clicked');
    */

  const nestframe = page.frameLocator("//iframe[@src='page.xhtml']").frameLocator("//iframe[@src='framebutton.xhtml']").locator("#Click")
   await nestframe.click()
   console.log("frame 4 clicked ")
    
    });