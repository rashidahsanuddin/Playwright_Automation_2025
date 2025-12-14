import { Page, test } from "@playwright/test";
import { getText, type } from "../../Reusable_Actions";


let page: Page; //initialize page variable for browser since we are calling multiple tests


test.beforeAll( async ({ browser }) => {
   //launch browser
   page = await browser.newPage();
});


test('Search for playwright keyword on bing', async () => {
   await page.goto('https://www.bing.com');
   await page.waitForTimeout(3000); //wait for few seconds
   await type(page, '[name="q"]', 'playwright', 'Search Box');
   await page.keyboard.press('Enter'); //hit enter key after typing
});


test('Capture search result for playwright keyword on bing', async () => {
   let searchResults = await getText(page, '[class="sb_count"]', 'Search Results Text');
   console.log('Search Results: ', searchResults);
   let searchnumber = searchResults?.split(' ');
   console.log('Search Number for Playwright: ', searchnumber ? searchnumber[1] : 'No results found');
});
