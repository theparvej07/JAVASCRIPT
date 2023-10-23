//Block statement->A block statement is used to group zero or more statements. The block is delimited by a pair of braces ("curly braces") and contains a list of zero or more statements and declarations.

var x = 1;
let y = 1;

if (true) {
    var x = 2;
    let y = 2;
}

console.log(x);
// Expected output: 2

console.log(y);
// Expected output: 1