//do...while->The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

let result = '';
let i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 15);

console.log(result);
// Expected output: "12345"