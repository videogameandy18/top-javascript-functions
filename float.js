const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const apmRootPath = path.join(repositoryRootPath, 'apm');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();