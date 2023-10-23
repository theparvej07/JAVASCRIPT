//async function*->The async function* declaration creates a binding of a new async generator function to a given name

async function* foo() {
    yield await Promise.resolve('a');
    yield await Promise.resolve('b');
    yield await Promise.resolve('c');
}

let str = '';

async function generate() {
    for await (const val of foo()) {
        str = str + val;
    }
    console.log(str);
}

generate();
// Expected output: "abc"