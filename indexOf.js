const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const buildOutputPath = path.join(repositoryRootPath, 'out');
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];