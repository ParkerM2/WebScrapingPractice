
// Using Puppeteer for web-scraping. It is a headless browser.
const puppeteer = require('puppeteer');
const arr = [];
// take in the username and return the total level from TLGrounds.com
const runPuppeteerUsername = async function( username ) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://www.tlgrounds.com/showplayer.php?player=${username}`);


  let expArray = await page.evaluate(() => {
    let data = [];
    let elements = document.getElementsByTagName('td');
    for (var element of elements) 
      data.push(element.textContent)
    return data;
  })
  // splice takes out google add at the top
  expArray.splice(0, 1);
  // setting up variables to hold retrieved data
  let totalLVL = expArray[3]
  let totalEXP = expArray[0]
 
  
  console.table(expArray)

}

runPuppeteerUsername('Swooshy');


//  const data = await page.evaluate(() => {
//     const tds = Array.from(document.querySelectorAll('table tr td'))
//     return tds.map(td => td.innerText)
//  });
  
  
  // for (i = 1; i > 10; i++) {
  //   console.log(i)
  //   // cycle through table on stats page and should grab the html text and push it into the userGainsArr []
  //   const [el] = await page.$x("/html/body/table/tbody/tr[" + i + "]/td[1]");
  //   const text = await el.getProperty('innerHTML');
  //   const stats = await text.jsonValue();
  //   console.log(stats)
  //   userGainsArr.push(stats);
  // }