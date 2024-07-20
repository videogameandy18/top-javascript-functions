const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const repositoryRootPath = path.resolve(__dirname, '..');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());