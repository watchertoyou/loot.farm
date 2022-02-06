var myitems = document.querySelectorAll("#bots_items .itemwrap .itemblock")[0];
var time = 250 // ms
var randomBtn = document.getElementById("RandomSkins");
var skinName = 'Knife'; // БУДЕТ ИСКАТЬ ЭТОТ СКИН
var found = setInterval(start, time);
var count = 1;

function start() {
    var urTotalPrice = Number(document.querySelectorAll(".total_price")[0].innerText.replace("$", ""));
    var botTotalPrice = Number(document.querySelectorAll(".total_price")[1].innerText.replace("$", ""));
    var status = myitems.innerText.indexOf(skinName) > -1;
    var color = "royalblue";
    if(status) color = "gold";
    else color = "white";
    var profit = urTotalPrice - botTotalPrice;
    profit = String(profit).slice(0,3) + "$";
    console.log(`%c| Name: ${myitems.innerText.split("\n")[0]}\n| Required: "${skinName}"\n| Status: ${status}\n| Profit: +${profit}\n| Index: ${count}`, `color: ${color}; font-weight: bold`);
    if(myitems == undefined) {
        randomBtn.click();
        myitems = document.querySelectorAll("#bots_items .itemwrap .itemblock")[0];
    }
   if(myitems.innerText.indexOf(skinName) > -1) {
        clearInterval(found);
        stop()
        count = 1;
   } else {
        randomBtn.click();
        myitems = document.querySelectorAll("#bots_items .itemwrap .itemblock")[0];
        count++;
   }
}
