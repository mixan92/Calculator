 function Calculator() {
    this.read = function() {
        this.a = +prompt('a?');
        this.b = +prompt('b?');    
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };

    this.dif = function () {
        return this.a - this.b;
    };

    this.quo = function () {
        return this.a / this.b;
    };
}

let calculator = new Calculator();

calculator.read();

alert('Sum:' + calculator.sum());
alert('Mul:' + calculator.mul());
alert('Dif:' + calculator.dif());
alert('Quo:' + calculator.quo());
