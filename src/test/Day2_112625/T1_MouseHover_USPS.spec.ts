import { Page, test } from "@playwright/test";




test('Mouse hover to quick tools module and select track a package on USPS @smoke', async ({ page }) => {
   //navigate to USPS home page
   await page.goto('https://www.usps.com/')
   //hover to quick tools module
   await page.locator('[class="nav-first-element menuitem"]').hover()
   //click on track a package link
   await page.locator('text=Track a Package').click()
   //enter a tracking number
   await page.locator('#tracking-input').fill('9400111899223856928490')
   await page.waitForTimeout(5000) //wait for few seconds to see it executed
  


   /*
   example of contains using text and non-text
   await.page.locator('button:has-text("Track")').click()
   //click on track button using contains id
   await.page.locator('button[id*="track-button"]').click()
   */
});
