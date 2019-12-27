const fs = require('fs');
const { translate, translateLoc, setInFinal, final } = require('./present');
const {
  checkNewCard,
  checkNewCardForThreeCols,
  recreateCards,
  decreateCards
} = require("./util");
let { cards } = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
cards = decreateCards(cards);
let temporary = [];

const newCard = ["1a", "2b", "1a", "2b"];
const newArr = [
  [0, 1, 2, 3],
  [1, 1, 2, 3],
  [2, 1, 2, 3],
  [3, 1, 2, 3],
  [4, 1, 2, 3],
  [5, 1, 2, 3],
  [7, 1, 2, 3],
  ["3b", "1a", "2a", "3b"],
  ["1a", "4b", "1b", "1b"],
  ["1a", "2a", "2b", "3b"]
];
// console.log(checkNewCardForThreeCols(
//     newArr, newCard
// ));

// Make sure that from here down temporary is full with an array (9 in len) full of arrays (4 in len)
temporary = recreateCards(temporary);
for (key in temporary) {
    setInFinal(temporary[key], key);
}
console.log(final);