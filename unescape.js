console.log( "A" - "B" + 2);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());