import { test, expect } from "@playwright/test";
import { click, clickByIndex, getText, mouseHover, mouseHoverByIndex,
scrollByPixels, type } from "../Reusable_Actions";

test("@AI USPS Stamp Action Item", async ({ page }) => {    
console.log("Starting USPS Stamps order test");

// navigate to USPS website
await page.goto("https://www.usps.com/");
await page.waitForTimeout(3000); // wait for few seconds

// Hover over the Shop menu
await mouseHoverByIndex(page, '//*[text()="Shop"]',0, 'Shop Menu');

//Click on Stamps inside the Shop menu (unique + accessible)
await clickByIndex(page,'[class="tool-stamps"]' ,1, 'Stamps Link');
await page.waitForTimeout(3000); // wait for few seconds

//Click on the Stamps checkbox on the left filter section
await clickByIndex(page,'[class="checkbox-label"]',0, 'Stampscheckbox');

//Click on the Additional Postage checkbox on the left filter section
await clickByIndex(page, '[class="checkbox-label"]',4,'Additional Postage Checkbox');

//Scroll down by 300 pixels to view stamp options
await scrollByPixels(page,0,300);

// click on the first stamps
await clickByIndex(page, '[class="result-product-img"]', 0, 'First Stamp Add to Cart Button');
await page.waitForTimeout(3000); // wait for few seconds

 //click to add cart
await click(page, '[id="addToCartVisBtn122104"]', 'Add to Cart Button');

//click to view cart
await click(page, '//*[text()="View Cart"]', 'View Cart Button');

//on quantity field, enter 2 by using sendKeys method to fill
await type(page,'[class="col-8 form-control"]','2','Quantity box');

//click on the update cart button
await click(page,'[value="Update"]', 'Update Cart Button');

//Capture product information and print it on console
let productInfo = await getText(page,'[class="item-wrapper"]',
'product information');
console.log("Product information: " + productInfo);
});