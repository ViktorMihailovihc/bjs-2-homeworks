//Задание 1

function parseCount(value) {
    let parseResult = Number.parseInt(value); 
    if (isNaN(parseResult)) {
        const divideError = new Error("Невалидное значение");
        throw divideError;
    }
    return parseResult;
}

function  validateCount(valueTwo) {
    try {
        return parseCount(valueTwo);
    } catch (e) {
        return e;
    }
}

//Задание 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.b)<this.c || (this.b + this.c)<this.a || 
            (this.a + this.c)<this.b || this.a === undefined || 
            this.b === undefined || this.c === undefined){
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.a+this.b+this.c;
    }
    getArea() {
        let perTwo = this.getPerimeter() / 2;
        let area = Math.sqrt(perTwo*(perTwo-this.a)*(perTwo-this.b)*(perTwo-this.c));
        return +area.toFixed(3);
    }
}
function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch (e) {
        return {
            getArea(){
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter(){
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}