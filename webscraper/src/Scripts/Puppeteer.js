
// Using Puppeteer for web-scraping. It is a headless browser.
const puppeteer = require('puppeteer');

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
  let userArray = 
    [
      { //totals
        totalRank: expArray[1],
        totalLVL: expArray[2],
        totalEXP: expArray[4],
        weekGains: expArray[5],
        hourGains: expArray[6]
      },
      { //combat
        combatRank: expArray[9],
        combatLVL: expArray[10],
        combatLVLGain: expArray[11],
        combatEXP: expArray[12],
        combatWeekGains: expArray[13],
        combatHourGains: expArray[14],
      },
      {
        //attack
        attackRank: expArray[17],
        attackLVL: expArray[18],
        attackLVLGain: expArray[19],
        attackEXP: expArray[20],
        attackWeekGains: expArray[21],
        attackHourGains: expArray[22],
        attackEXPtoLVL: expArray[23],
      },
      {
        //defence
        defenceRank: expArray[27],
        defenceLVL: expArray[28],
        defenceLVLGain: expArray[29],
        defenceEXP: expArray[30],
        defenceWeekGains: expArray[31],
        defenceHourGains: expArray[32],
        defenceEXPtoLVL: expArray[33],
    },
    {
      //strength
      strengthRank: expArray[37],
      strengthLVL: expArray[38],
      strengthLVLGain: expArray[39],
      strengthEXP: expArray[40],
      strengthWeekGains: expArray[41],
      strengthHourGains: expArray[42],
      strengthEXPtoLVL: expArray[43],
    },
    {  
      //health
      healthRank: expArray[47],
      healthLVL: expArray[48],
      healthLVLGain: expArray[49],
      healthEXP: expArray[50],
      healthWeekGains: expArray[51],
      healthHourGains: expArray[52],
      healthEXPtoLVL: expArray[53],
    },
    {
       //mining
      miningRank: expArray[57],
      miningLVL: expArray[58],
      miningLVLGain: expArray[59],
      miningEXP: expArray[60],
      miningWeekGains: expArray[61],
      miningHourGains: expArray[62],
      miningEXPtoLVL: expArray[63],
    },
    {  
      //fishing
      fishingRank: expArray[66],
      fishingLVL: expArray[67],
      fishingLVLGain: expArray[68],
      fishingEXP: expArray[69],
      fishingWeekGains: expArray[70],
      fishingHourGains: expArray[71],
      fishingEXPtoLVL: expArray[72],
    },
    {
      //woodcutting
      woodCuttingRank: expArray[76],
      woodCuttingLVL: expArray[77],
      woodCuttingLVLGain: expArray[78],
      woodCuttingEXP: expArray[79],
      woodCuttingWeekGains: expArray[80],
      woodCuttingHourGains: expArray[81],
      woodCuttingEXPtoLVL: expArray[82],
    },
    {  
    //thieving
    thievingRank: expArray[86],
    thievingLVL: expArray[87],
    thievingLVLGain: expArray[88],
    thievingEXP: expArray[89],
    thievingWeekGains: expArray[90],
    thievingHourGains: expArray[91],
    thievingEXPtoLVL: expArray[92],
    },
    {  
    //speed
    speedRank: expArray[96],
    speedLVL: expArray[97],
    speedLVLGain: expArray[98],
    speedEXP: expArray[99],
    speedWeekGains: expArray[100],
    speedHourGains: expArray[101],
    speedEXPtoLVL: expArray[102],
    },
    {      
    //smithing 
    smithingRank: expArray[106],
    smithingLVL: expArray[107],
    smithingLVLGain: expArray[108],
    smithingEXP: expArray[109],
    smithingWeekGains: expArray[110],
    smithingHourGains: expArray[111],
    smithingEXPtoLVL: expArray[112],
    },
    {  
    //cooking
    cookingRank: expArray[116],
    cookingLVL: expArray[117],
    cookingLVLGain: expArray[118],
    cookingEXP: expArray[119],
    cookingWeekGains: expArray[120],
    cookingHourGains: expArray[121],
    cookingEXPtoLVL: expArray[122],
    },
    {  
    //farming
    farmingRank: expArray[126],
    farmingLVL: expArray[127],
    farmingLVLGain: expArray[128],
    farmingEXP: expArray[129],
    farmingWeekGains: expArray[130],
    farmingHourGains: expArray[131],
    farmingEXPtoLVL: expArray[132],
    },
    {  
    //constructing
    constructingRank: expArray[136],
    constructingLVL: expArray[137],
    constructingLVLGain: expArray[138],
    constructingEXP: expArray[139],
    constructingWeekGains: expArray[140],
    constructingHourGains: expArray[141],
    constructingEXPtoLVL: expArray[142],
    },
    {  
    //trading
    tradingRank: expArray[146],
    tradingLVL: expArray[147],
    tradingLVLGain: expArray[148],
    tradingEXP: expArray[149],
    tradingWeekGains: expArray[150],
    tradingHourGains: expArray[151],
    tradingEXPtoLVL: expArray[152],
    },
    {  
    //magic
    magicRank: expArray[156],
    magicLVL: expArray[157],
    magicLVLGain: expArray[158],
    magicEXP: expArray[159],
    magicWeekGains: expArray[160],
    magicHourGains: expArray[161],
    magicEXPtoLVL: expArray[162],
    }
  ]

  console.log(userArray)
  return userArray;
}

module.exports = runPuppeteerUsername();
