const merge = (a, b) => a.concat(b);
const maxNumber = arr => Math.max(...arr);
const apmRootPath = path.join(repositoryRootPath, 'apm');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const arrayContains = (arr, element) => arr.includes(element);
const executableName = getExecutableName(channel, appName);