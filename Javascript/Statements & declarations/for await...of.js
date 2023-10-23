//for await...of->The for await...of statement creates a loop iterating over async iterable objects as well as sync iterables. This statement can only be used in contexts where await can be used, which includes inside an async function body and in a module.

async function* foo() {
    yield 1;
    yield 2;
}

(async function() {
    for await (const num of foo()) {
        console.log(num);
        // Expected output: 1

        break; // Closes iterator, triggers return
    }
})();