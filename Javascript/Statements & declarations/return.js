//return->The return statement ends function execution and specifies a value to be returned to the function caller.

function getRectArea(width, height) {
    if (width > 0 && height > 0) {
        return width * height;
    }
    return 0;
}

console.log(getRectArea(3, 4));
// Expected output: 12

console.log(getRectArea(-3, 4));
// Expected output: 0