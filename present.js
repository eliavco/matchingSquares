const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const translateLoc = (loc, cols) => {
  let string = "";
  const row = Math.floor(loc / cols); // 11 / 5 = 2
  const col = loc - row;

  if (row == 1) {string += "1st Row: "}
  else if (row == 2) {string += "2nd Row: "}
  else if (row == 3) {string += "3rd Row: "}
  else {string += `${row}th Row: `};

  if (col == 1) {string += "1st Column"}
  else if (col == 2) {string += "2nd Column"}
  else if (col == 3) {string += "3rd Column"}
  else {string += `${col}th Column`};

  return string;
};

const translate = card => {
  const dictionary = data.dictionary;
  const characters = dictionary.characters;
  const sides = dictionary.sides;

  for (key in card) {
    const character = card[key].substring(0, 1);
    const side = card[key].substring(1);
    let string = "";
    string += `${characters[character]}. ${sides[side]}`;
    card[key] = string;
  }
  return card;
};

const final = {};

const setInFinal = (card, loc) => {
  card = translate(card);
  loc = translateLoc(loc);
  final[loc] = card;
};

module.exports = {
  setInFinal, final, translate, translateLoc
}