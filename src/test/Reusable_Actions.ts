import { Page } from "@playwright/test";




//method to click on a unique element
export async function click(page:Page, locator:string, elementName:string) {
   console.log("Clicking on " + elementName);
   await page.locator(locator).click();
}//end of click method


//method to click on any element by index
export async function clickByIndex(page:Page, locator:string, index:number, elementName:string) {
   console.log("Clicking on " + elementName);
   await page.locator(locator).nth(index).click();
}//end of clickByIndex method


//method to type on any unique element
export async function type(page:Page, locator:string, userValue:string, elementName:string) {
   console.log("Typing on " + elementName);
   let element = page.locator(locator);
   await element.clear();
   await element.fill(userValue);
}//end of type method  


//method to type on any element by index
export async function typeByIndex(page:Page, locator:string, index:number, userValue:string, elementName:string) {
   console.log("Typing on " + elementName);
   let element = page.locator(locator).nth(index);
   await element.clear();
   await element.fill(userValue);
}//end of typeByIndex method


//method to get text from any element
export async function getText(page:Page, locator:string, elementName:string) {
   console.log("Capturing text from " + elementName);
   let result = await page.locator(locator).textContent();
   return result;
}//end of getText method


//method to get text from any element by index
export async function getTextByIndex(page:Page, locator:string, index:number, elementName:string) {
   console.log("Capturing text from " + elementName);
   let result = await page.locator(locator).nth(index).textContent();
   return result;
}//end of getTextByIndex method

//method to hover on any unique element
export async function mouseHover(page:Page, locator:string, elementName:string) {
   console.log("Hovering on " + elementName);
   await page.locator(locator).hover();
}//end of hover method

//method to scrollbypixels
export async function scrollByPixels(page:Page, horizontalValue:number, verticalValue:number) {
   console.log("Scrolling by pixels");
   {
      await page.evaluate(({x, y}) => {window.scrollBy(x, y);}, {x: horizontalValue, y: verticalValue});
   }
}//end of scrollByPixels method

//method for mouseHoverByIndex
export async function mouseHoverByIndex(page:Page, locator:string, index:number, elementName:string) {
   console.log("Hovering on " + elementName);
   await page.locator(locator).nth(index).hover();
}//end of mouseHoverByIndex method  



