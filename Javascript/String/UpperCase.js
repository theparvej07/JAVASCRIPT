//String.prototype.toLocaleUpperCase()
//The toLocaleUpperCase() method of String values returns this string converted to upper case, according to any locale-specific case mappings.

const city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"