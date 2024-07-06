const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const symbolsPath = path.join(buildOutputPath, 'symbols');