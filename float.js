const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
var DELIM_SIZE = 4;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;