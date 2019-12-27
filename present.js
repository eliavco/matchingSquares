const fs = require("fs");
const { dictionary } = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const translateLoc = (loc, cols) => {
  let stringA = "";
  let stringB = "";
  loc--;
  const row = Math.floor(loc / cols) + 1; // (11 / 3) + 1 = 3 + 1 = 4
  const col = loc - cols*(row-1) + 1; // 11 - 3*(4-1) = 2

  if (row == 1) {stringA += "1st Row"}
  else if (row == 2) {stringA += "2nd Row"}
  else if (row == 3) {stringA += "3rd Row"}
  else {stringA += `${row}th Row`};

  if (col == 1) {stringB += "1st Column"}
  else if (col == 2) {stringB += "2nd Column"}
  else if (col == 3) {stringB += "3rd Column"}
  else {stringB += `${col}th Column`};

  return [stringA, stringB];
};

const translate = card => {
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

const setInFinal = (card, loc, col) => {
  card = translate(card);
  loc = translateLoc(loc, col);
  if (final[loc[0]] == undefined) final[loc[0]] = {};
  final[loc[0]][loc[1]] = card;
};

module.exports = {
  setInFinal, final, translate, translateLoc
}