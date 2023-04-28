/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b){
    this.a = a;
    this.b = b;
    this.sum = () => this.a + this.b;
    this.subtraction = () => this.a - this.b;
    this.multiplication = () => this.a * this.b;
    this.division = () => this.a / this.b; 
}
const arithmetic = new Calculator(6, 3);

console.log(arithmetic.sum());
console.log(arithmetic.subtraction());
console.log(arithmetic.multiplication());
console.log(arithmetic.division());