const checkNewCard = (arr, newCard, cols) => {
  const newArr = arr;
  const last = cols * Math.floor(arr.length / cols);
  const theseOptions = [];
  if (newArr.length === last) {
    const first = newArr[newArr.length - cols];
    const second = newCard;
    let a;
    for (i = 0; i < second.length; i++) {
      if (first[2][0] == second[i][0] && first[2][1] != second[i][1]) {
        a = second.slice(i).concat(second.slice(0, i));
        theseOptions.push(a);
      }
    }
  } else {
    const first = newArr[last - 1];
    const second = newArr[newArr.length - 1];
    const third = newCard;
    let a;
    if (
      first[2][0] == third[0][0] &&
      first[2][1] != third[0][1] &&
      second[1][0] == third[third.length - 1][0] &&
      second[1][1] != third[third.length - 1][1]
    ) {
      a = third;
      theseOptions.push(a);
    }
    for (i = 1; i < third.length; i++) {
      if (
        first[2][0] == third[i][0] &&
        first[2][1] != third[i][1] &&
        second[1][0] == third[i - 1][0] &&
        second[1][1] != third[i - 1][1]
      ) {
        a = third.slice(i).concat(third.slice(0, i));
        theseOptions.push(a);
      }
    }
  }
  return theseOptions;
};

const checkNewCardForThreeCols = (a, b) => checkNewCard(a, b, 3);

const recreateCards = (cards) => {
    let obj = {};
    let inObj;
    let sides = ['top', 'right', 'bottom', 'left'];
    cards.forEach((card, i) => {
        inObj = {};
        card.forEach((side, i) => {
            inObj[sides[i]] = side;
        });
        obj[i + 1] = inObj;
    });
    return obj;
};

const decreateCards = (cards) => {
    cards = Object.values(cards);
    cards = cards.map(card => {
        card = Object.values(card);
        return card;
    });
    return cards;
};

module.exports = {
  checkNewCard,
  checkNewCardForThreeCols,
  recreateCards,
  decreateCards
};

// const swapCards = (obj, a, b) => {
//     const temp = obj[a];
//     obj[a] = obj[b];
//     obj[b] = temp;
//     return obj;
// };