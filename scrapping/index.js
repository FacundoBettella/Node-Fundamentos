/* Podemos usar NodeJS para acceder al DOM de un sitio externo */
const puppeteer = require("puppeteer");

(async () => {
  console.log("Launched browser");
  // const browser = await puppeteer.launch();  //Si queremos lanzarlo sin verlo.
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto("https://nodejs.org/en/");

  let titulo = await page.evaluate(() => {
    const h1 = document.querySelector("p");
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(titulo);

  setTimeout(() => {
    browser.close();
    console.log("Closed browser");
  }, 2000);
})();
