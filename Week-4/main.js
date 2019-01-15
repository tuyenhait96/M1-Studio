class Shape {
    constructor(type) {
        this.type = type;
    }
    getArea() { // nó là 1 abstract:  chỉ cần return kết quả, class kết thừa thì define
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        super.type = "triangle";
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.c = parseFloat(c);
    }

    getArea() {
        super.getArea();
        let s = 0;
        let p = 0;
        if (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a) {
            p = (this.a + this.b + this.c) / 2;
            s = Math.floor(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
        }
        else {
            return `${this.a} ${this.b} ${this.c} : Valid Error`;
        }
        return "Area of Triangle: " + s;
    }
}

class Rectangle extends Shape {
    constructor(a, b) {
        super();
        super.type = "rectangle";
        this.a = parseInt(a);
        this.b = parseInt(b);
    }

    getArea() {
        super.getArea();
        if (this.a > 0 && this.b > 0 || this.a < 0 && this.b < 0) {
            return "Area of Rectangle: " + this.a * this.b;
        } else {
            return `${this.a} ${this.b} : Valid Error`;
        }
    }
}

class Square extends Rectangle.prototype.constructor {
    constructor(a) {
        super(a);
        super.type = "square";
    }

    getArea() {
        super.getArea();
        return "Area of Square: " + Math.pow(this.a, 2);
    }
}

let tria = new Triangle(2, 4, 5)
console.log(tria.getArea())
console.log(tria);

let rect = new Rectangle(-2, -3);
console.log(rect.getArea());
console.log(rect);

let squa = new Square(2);
console.log(squa.getArea());
console.log(squa);