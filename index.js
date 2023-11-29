const puppeteer = require('puppeteer');
const { exec } = require("node:child_process");
const { promisify } = require("node:util");

(async () => {
const { stdout: chromiumPath } = await promisify(exec)("which chromium")

const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    executablePath: chromiumPath.trim()
  });
  // Create a new page
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto('https://www.google.com');

  // Capture a screenshot as a base64-encoded string
  const screenshotBase64 = await page.screenshot({ encoding: 'base64' });

  // Close the browser
  await browser.close();

  // Use screenshotBase64 as needed (e.g., send it in a response)
  console.log(screenshotBase64);
})();
