console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const results = await Promise.all(resultingPromises);
const fullName = name || 'buddy';