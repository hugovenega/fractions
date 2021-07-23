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

  pot(p) {
    let nNum;
    let nDen;
    if (p > 0) {
      nNum = Math.pow(this.num, p);
      nDen = Math.pow(this.den, p);
    } else if (p < 0) {
      nNum = Math.pow(this.den, Math.abs(p));
      nDen = Math.pow(this.num, Math.abs(p));
    } else {
      nNum = 1;
      nDen = 1;
    }
    return new Fraction(nNum, nDen);
  }

  get inv() {
    let nNum;
    let nDen;
    nNum = this.den;
    nDen = this.num;
    return new Fraction(nNum, nDen);
  }

  get toString() {
    return `${this.num}/${this.den}`;
  }
}

const a = new Fraction(3, 4);
const b = new Fraction(1, 4);
const c = (a.add(b));
const d = (a.res(b));
const e = (a.mul(b));
const f = (a.div(b));
const g = (a.pot(1 / 2));
const h = (a.inv);
const i =(a.toString);
console.log(i);
