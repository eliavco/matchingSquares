const { checkAllCards } = require('./util');

// const checkEverything = () => {};

const main = (cards, col) => {
    cards = checkAllCards(cards, col);
    return cards;
};

module.exports = {
    main
};
