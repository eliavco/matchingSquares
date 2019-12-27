const fs = require('fs');
const { setInFinal, final } = require('./present');
const { recreateCards, decreateCards, halfCreate, wiz } = require('./util');
const { main } = require('./process');

const { columns, wizard } = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
let { cards } = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

if (typeof cards !== 'object') cards = halfCreate(cards);
cards = recreateCards(main(decreateCards(cards), columns));

Object.keys(cards).forEach(key => {
	setInFinal(cards[key], key, columns);
});

if (wizard) {
	wiz(final);
} else {
	// eslint-disable-next-line no-console
	console.log(final);
}
