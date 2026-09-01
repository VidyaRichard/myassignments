import test from "@playwright/test";
import path from "path";

test('Learn to upload file using input tag with type = file',async({page})=>{
    await page.goto('https://leafground.com/file.xhtml')
    //relative path for single file upload
    const fileupload=page.locator('(//input[@type="file"])[1]')
await fileupload.setInputFiles('C:/App_pw/utils/file-icon.png');



});


