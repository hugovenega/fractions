class Fraction {
  constructor(a, b) {
    this.num = a;
    this.den = b;
  }

  add(fr) {
    if (this.den !== fr.den) {
      const nDen = this.den * fr.den;
      const nNum = (this.num * fr.den) + (fr.num * this.den);
      console.log(nNum, nDen);
    } else {
      const nDen = this.den;
      const nNum = (this.num + fr.num);
      console.log(nNum, nDen);
    }
  }
}

const fr1 = new Fraction(1, 5);
const fr2 = new Fraction(1, 4);
const fr3 = new Fraction(1, 3);
const fr4 = new Fraction(2, 3);
console.log('Pruebas .add con 1/5 y 1/4');
fr1.add(fr2);
console.log('Pruebas .add con 1/3 y 2/3');
fr3.add(fr4);