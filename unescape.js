const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const appName = getAppName(channel);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));