const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isTabInView = () => !document.hidden;