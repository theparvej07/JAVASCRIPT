//String.prototype.toLocaleLowerCase()->The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings.

const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"