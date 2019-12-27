const fs = require('fs');
const { translate, translateLoc, setInFinal, final } = require('./present');
const {
  checkNewCard,
  checkNewCardForThreeCols,
  recreateCards,
  decreateCards,
  halfCreate,
  wiz
} = require("./util");
const { main } = require("./process");
let { cards, columns, wizard } = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
if (typeof cards !== 'object') cards = halfCreate(cards);
cards = decreateCards(cards);

let temporary = main(cards);

temporary = recreateCards(temporary);
for (key in temporary) {
    setInFinal(temporary[key], key, columns);
}
if (wizard) {
	wiz(final);
} else {
	console.log(final);
}