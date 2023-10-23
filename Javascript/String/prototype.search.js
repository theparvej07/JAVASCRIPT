//prototype.search->The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

const paragraph = 'The quick brown fox jump over the lazy dog. if the dog break ,was it really lazy?';

const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));

console.log(paragraph[paragraph.search(regex)]);