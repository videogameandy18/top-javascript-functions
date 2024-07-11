const uniqueArray = arr => [...new Set(arr)];
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));