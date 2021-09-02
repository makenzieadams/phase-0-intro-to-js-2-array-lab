const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
  cats.push(cat);
  return cats;
}

function destructivelyPrependCat(cat) {
  cats.unshift(cat);
  return cats;
}

function destructivelyRemoveLastCat(cat) {
  cats.pop(cat);
  return cats;
}

function destructivelyRemoveFirstCat(cat) {
  cats.shift(cat);
  return cats;
}

function appendCat(cat) {
  const newCats = [...cats, cat];
  return newCats;
}

function prependCat(cat) {
  const newCats = [cat, ...cats];
  return newCats;
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}
