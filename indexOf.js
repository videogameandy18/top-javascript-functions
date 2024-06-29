const reversedString = str => str.split('').reverse().join('');
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';