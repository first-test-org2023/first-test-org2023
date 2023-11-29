const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto('https://example.com');

  // Capture a screenshot as a base64-encoded string
  const screenshotBase64 = await page.screenshot({ encoding: 'base64' });

  // Close the browser
  await browser.close();

  // Use screenshotBase64 as needed (e.g., send it in a response)
  console.log(screenshotBase64);
})();
