// Write a program that will convert a dollar amount to the number of coins that make up the amount.
// Use the common American coins of quarters, dimes, nickels, and pennies.


/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var money = prompt("Enter a dollar amount without dollar sign", "1.37");

function coinCounter (cash) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  var cash = cash * 100;

  var lessQuarters = cash % 25;
  coinPurse.quarters = (cash - lessQuarters) / 25;
  var afterQuarters = cash - (coinPurse.quarters * 25);
  var lessDimes = afterQuarters % 10;
  coinPurse.dimes = (afterQuarters - lessDimes) / 10;
  var afterDimes = afterQuarters - (coinPurse.dimes * 10);
  var lessNickels = afterDimes % 5;
  coinPurse.nickels = (afterDimes - lessNickels) / 5;
  var afterNickels = afterDimes - (coinPurse.nickels * 5);
  var lessPennys = afterNickels % 1;
  coinPurse.pennys = (afterNickels - lessPennys) / 1;

  return coinPurse;
}


var coins = coinCounter(money)
console.log(coins);