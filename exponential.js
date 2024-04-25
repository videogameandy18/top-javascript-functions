const isArray = (arr) => Array.isArray(arr);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;