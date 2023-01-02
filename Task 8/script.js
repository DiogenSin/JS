/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
    constructor(skaicius1, skaicius2){
    this.skaicius1 = skaicius1,
    this.skaicius2 = skaicius2
    }
    sum(){
        return this.skaicius1+this.skaicius2
    }
    substract(){
        return this.skaicius1 - this.skaicius2
    }
    multiplication(){
        return this.skaicius1*this.skaicius2
    }
    division(){
        return this.skaicius1/this.skaicius2
    }
}

let skaiciai = new Calculator(3, 9)

console.log(skaiciai.sum())
console.log(skaiciai.substract())
console.log(skaiciai.multiplication())
console.log(skaiciai.division())