//break->The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a labeled statement when used within that labeled statement.


let i = 0;

while (i < 6) {
    if (i === 3) {
        break;
    }
    i = i + 1;
}

console.log(i);
// Expected output: 3