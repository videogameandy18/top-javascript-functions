console.log(+"1" +  "1" + "2");
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';