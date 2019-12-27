const fs = require('fs');
const { translate, translateLoc, setInFinal, final } = require('./present');
const { turn } = require('./util');
const { cards } = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const temporary;
const options = [];

const swapCards = (obj, a, b) => {
    const temp = obj[a];
    obj[a] = obj[b];
    obj[b] = temp;
    return obj;
};

const checkNewCard = (arr, newCard, cols) => {
    const newArr = arr;
    // const last = arr.length - (arr.length % (Math.floor() * cols) ); // 5 / 3 = 1 (2)
    const last = cols * Math.floor(arr.length / cols);
    const theseOptions = [];
    // newArr.splice(0, last);
    console.log(newArr.length); 
    console.log(last);
    if (newArr.length === last) {
        const first = newArr[newArr.length-cols];
        const second = newCard;
        let a;
        for (i = 0; i < second.length; i++) {
            if (first[2][0] == second[i][0] && first[2][1] != second[i][1]) {
                a = second.slice(i).concat(second.slice(0, i));
                theseOptions.push(a);
            }
        }
    };
    if (newArr.length === last + (cols) - 1) {
        const first = newArr[newArr.length-cols];
        const second = newCard;
        let a;
        for (i = 0; i < second.length; i++) {
            if (first[2][0] == second[i][0] && first[2][1] != second[i][1]) {
                a = second.slice(i).concat(second.slice(0, i));
                theseOptions.push(a);
            }
        }
    };
    console.log(theseOptions);
};

checkNewCard(
    [
    [0, 1, 2, 3],
    [1, 1, 2, 3],
    [2, 1, 2, 3],
    [3, 1, 2, 3],
    [4, 1, 2, 3],
    [5, 1, 2, 3],
    ['3b', '1a', '2a', '3b'],
    [7, 1, 2, 3],
    [8, 0, 8, 0] /* [9, 1, 2, 3], [1, 1, 2, 0]*/
    ],
    ['1a', '2b', '2b', '3a'],
    3
);

// Make sure that from here down temporary is full with an object (9 in len) modelled like the cards obj
// for (key in temporary) {
//     setInFinal(temporary[key], key);
// }
// console.log(final);
// console.log(options);