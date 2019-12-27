const readlineSync = require('readline-sync');

const checkNewCard = (arr, newCard, cols) => {
    const last = cols * Math.floor(arr.length / cols);
    const theseOptions = [];
    if (arr.length === 0) {
        let a;
        for (let i = 0; i < newCard.length; i += 1) {
            a = newCard.slice(i).concat(newCard.slice(0, i));
            theseOptions.push(a);
        }
    } else if (last === 0) {
        const second = arr[arr.length - 1];
        const third = newCard;
        let a;
        if (
            second[1][0] == third[third.length - 1][0] &&
            second[1][1] != third[third.length - 1][1]
        ) {
            a = third;
            theseOptions.push(a);
        }
        for (let i = 1; i < third.length; i += 1) {
            if (
                second[1][0] == third[i - 1][0] &&
                second[1][1] != third[i - 1][1]
            ) {
                a = third.slice(i).concat(third.slice(0, i));
                theseOptions.push(a);
            }
        }
    } else if (arr.length === last) {
        const first = arr[arr.length - cols];
        const second = newCard;
        let a;
        for (let i = 0; i < second.length; i += 1) {
            if (first[2][0] == second[i][0] && first[2][1] != second[i][1]) {
                a = second.slice(i).concat(second.slice(0, i));
                theseOptions.push(a);
            }
        }
    } else {
        const first = arr[last - 1];
        const second = arr[arr.length - 1];
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
        for (let i = 1; i < third.length; i += 1) {
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

const checkAllCards = (cards, col) => {
    const finalCards = [];
    Object.values(cards).forEach(card => {
        if (checkNewCard(finalCards, card, col).length > 0) {
            finalCards.push(card);
        }
    });
    if (finalCards.length == cards.length) return finalCards;
};

const checkNewCardForThreeCols = (a, b) => checkNewCard(a, b, 3);

const recreateCards = cards => {
    try {
        const obj = {};
        const sides = ['top', 'right', 'bottom', 'left'];
        let inObj;
        cards.forEach((card, i) => {
            inObj = {};
            card.forEach((side, j) => {
                inObj[sides[j]] = side;
            });
            obj[i + 1] = inObj;
        });
        return obj;
    } catch (err) {
        return {};
    }
};

const decreateCards = cards => {
    cards = Object.values(cards);
    cards = cards.map(card => {
        card = Object.values(card);
        return card;
    });
    return cards;
};

const halfCreate = cards => {
    const obj = {};
    cards.forEach((card, i) => {
        obj[i + 1] = card;
    });
    return obj;
};

const wiz = fi => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const ans = readlineSync.question(
            'Hi! Which part are you looking for? q, all or [row:col]\n'
        );
        if (ans == 'q') break;
        if (ans == 'all') {
            // eslint-disable-next-line no-console
            console.log(fi);
            // eslint-disable-next-line no-continue
            continue;
        }
        const f = decreateCards(fi);
        if (
            ans.includes(':') &&
            f[ans.slice(0, ans.indexOf(':')) * 1 - 1] &&
            f[ans.slice(0, ans.indexOf(':')) * 1 - 1][
                ans.slice(ans.indexOf(':') + 1) * 1 - 1
            ]
        ) {
            // eslint-disable-next-line no-console
            console.log(
                f[ans.slice(0, ans.indexOf(':')) * 1 - 1][
                    ans.slice(ans.indexOf(':') + 1) * 1 - 1
                ]
            );
        }
    }
};

module.exports = {
    checkNewCard,
    checkAllCards,
    checkNewCardForThreeCols,
    recreateCards,
    decreateCards,
    halfCreate,
    wiz
};
