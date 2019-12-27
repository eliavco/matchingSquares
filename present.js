const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const translateLoc = loc => {
  let string = "";

  if (loc == 1 || loc == 2 || loc == 3) string += "1st Row: ";
  if (loc == 4 || loc == 5 || loc == 6) string += "2nd Row: ";
  if (loc == 7 || loc == 8 || loc == 9) string += "3rd Row: ";

  if (loc == 1 || loc == 4 || loc == 7) string += "1st Column";
  if (loc == 2 || loc == 5 || loc == 8) string += "2nd Column";
  if (loc == 3 || loc == 6 || loc == 9) string += "3rd Column";
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