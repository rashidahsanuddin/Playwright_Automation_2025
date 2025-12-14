import { test, expect } from "@playwright/test";
import { click, clickByIndex, getText, mouseHover, mouseHoverByIndex,
scrollByPixels, type } from "../Reusable_Actions";

test("@AI Huntington Bank Loan", async ({ page }) => {
console.log("Starting Huntington Bank Loan Application test");

//Navigate to Huntington Bank website
await page.goto("https://www.huntington.com/");
await page.waitForTimeout(2000); // wait for few seconds

//Click on the "personal" menu
await clickByIndex(page,'[class="submenu rel-level1 level1 active "]',0,'Personal Menu');
await page.waitForTimeout(2000); // wait for few seconds

//Click on the "borrow" option under personal menu
await clickByIndex(page,'[class="submenu rel-level2 level2  "]',1,'Borrow Option');
await page.waitForTimeout(2000); // wait for few seconds

//Click on the "Personal Loans" link
await clickByIndex(page,'[class="leftPanelItem h6 "]',0,'Personal Loans Link');
await page.waitForTimeout(2000); // wait for few seconds

//Capture and print the headline text on the Personal Loans page
const headlineText = await getText(page,'[class="hero-element-text-lockup-container text-center mx-3 mx-md-0"]','Headline Text');
console.log("Headline Text on Personal Loans Page: " + headlineText);

//end of test
});