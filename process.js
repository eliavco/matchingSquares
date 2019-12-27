const { checkAllCards } = require('./util');

function arrayCreate(size) {
	const array = [];
	for (let i = 0; i < size; i += 1) {
		array.push(i);
	}

	const result = [];
	function iter(parts) {
		return function(v) {
			const temp = parts.concat(v);
			if (parts.includes(v)) {
				return;
			}
			if (temp.length === size) {
				result.push(temp);
				return;
			}
			array.forEach(iter(temp));
		};
	}

	array.forEach(iter([]));
	return result;
}

const checkEverything = (allCards, col) => {
	let newCardsSets = allCards.map(cards => checkAllCards(cards, col));
	newCardsSets = newCardsSets.filter(function(el) {
		return el != null;
	});
	console.log(newCardsSets);
	return newCardsSets;
};

const findSet = cards => {
	let whole = arrayCreate(cards.length);
	whole = whole.map(comb => comb.map(num => cards[num]));
	return whole;
};

const main = (cards, col) => {
	const set = findSet(cards);
	return checkEverything(set, col)[0];
};

module.exports = {
	main
};
