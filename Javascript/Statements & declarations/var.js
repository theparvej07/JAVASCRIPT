//var
//The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

var x = 1;

if (x === 1) {
    var x = 2;

    console.log(x);
    // Expected output: 2
}

console.log(x);
// Expected output: 2