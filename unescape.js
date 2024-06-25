const flattenedArray = arr => [].concat(...arr);
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const removeDuplicates = (arr) => [...new Set(arr)];