const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const currentDate = () => new Date().toLocaleDateString('en-US');