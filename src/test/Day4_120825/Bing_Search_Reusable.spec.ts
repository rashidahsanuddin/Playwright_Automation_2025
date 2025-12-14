
import { Page, test } from "@playwright/test";
import { getText, type } from "../Reusable_Actions";

let page: Page; //initialize page variable for browser since we are calling multiple tests

test.beforeAll(async ({ browser }) => {
   //launch browser
   page = await browser.newPage();
});

test('Search for playwright keyword on bing', async () => {
   await page.goto('https://www.bing.com');
   await page.waitForTimeout(3000); //wait for few seconds
   await type(page, '[name="q"]', 'playwright', 'Search Box');
   await page.keyboard.press('Enter'); //hit enter key after typing
});

//test('capture search number on bing for playwright keyword', async ({}) => {
    //let searchResult = await getText(page, '[class="sb_count"]', 'search result text');
    //if (searchResult) {
        //console.log('Search result text is: ' + searchResult);
        //let searchnumber = searchResult.split(' ');
        //console.log('Search number is: ' + searchnumber[1]);
    //} else {
        //console.log('Search result text not found.');
    //}
//});
