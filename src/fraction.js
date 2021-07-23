class Fraction {
  constructor(num, den) {
    if (num === den) {
      this.num = 1;
      this.den = 1;
    } else if (num % den === 0) {
      this.num = num / den;
      this.den = 1;
    } else if (den % num === 0) {
      this.num = num / num;
      this.den = den / num;
    } else {
      this.num = num;
      this.den = den;
    }
  }

  add(fr) {
    let nDen;
    let nNum;
    if (this.den !== fr.den) {
      nDen = this.den * fr.den;
      nNum = this.num * fr.den + fr.num * this.den;
    } else {
      nDen = this.den;
      nNum = this.num + fr.num;
    }
    return new Fraction(nNum, nDen);
  }

  res(fr) {
    let nDen;
    let nNum;
    if (this.den !== fr.den) {
      nDen = this.den * fr.den;
      nNum = this.num * fr.den - fr.num * this.den;
    } else {
      nDen = this.den;
      nNum = this.num - fr.num;
    }
    return new Fraction(nNum, nDen);
  }

  mul(fr) {
    const nNum = this.num * fr.num;
    const nDen = this.den * fr.den;
    return new Fraction(nNum, nDen);
  }

  div(fr) {
    const nNum = this.num * fr.den;
    const nDen = this.den * fr.num;
    return new Fraction(nNum, nDen);
  }
}

const a = new Fraction(2, 4);
const b = new Fraction(1, 4);
const c = (a.add(b));
const d = (a.res(b));
const e = (a.mul(b));
const f = (a.div(b));
console.log(a);
