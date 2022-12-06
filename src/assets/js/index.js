const sports = [
  {
    name: "bong ro",
    like: 6,
  },
  {
    name: "boi",
    like: 5,
  },
  {
    name: "bong dao",
    like: 10,
  },
];

var result = sports.filter(getMostFavoriteSport);
console.log(sports);
function getMostFavoriteSport() {
  return result;
}

console.log(getMostFavoriteSport(sports));
