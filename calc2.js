function Calculator(a,b){
    this.read = function(){
        this.a = +prompt('a',0);
        this.b = +prompt('b', 0);
    }
    this.sum = function(){
        return this.a + this.b;
    }
    this.mul = function(){
        return this.a * this.b;
    }
}
let result = new Calculator;
result.read();
alert(result.sum());
alert(result.mul());