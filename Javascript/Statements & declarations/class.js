//class->The class declaration creates a binding of a new class to a given name.

class Polygon {
    constructor(height, width) {
        this.area = height * width;
    }
}

console.log(new Polygon(4, 3).area);
// Expected output: 12