class Fraction {
  constructor(a, b) {
    this.num = a;
    this.den = b;
  }

  add(fr) {
    let nDen;
    let nNum;
    if (this.den !== fr.den) {
      nDen = this.den * fr.den;
      nNum = (this.num * fr.den) + (fr.num * this.den);
    } else {
      nDen = this.den;
      nNum = (this.num + fr.num);
    }
    return (`${nNum} ` + ` ${nDen}`);
  }

  res(fr) {
    let nDen;
    let nNum;
    if (this.den !== fr.den) {
      nDen = this.den * fr.den;
      nNum = (this.num * fr.den) - (fr.num * this.den);
    } else {
      nDen = this.den;
      nNum = (this.num - fr.num);
    }
    return (`${nNum} ` + ` ${nDen}`);
  }

  mul(fr) {
    const nNum = this.num * fr.num;
    const nDen = this.den * fr.den;
    return (`${nNum} ` + ` ${nDen}`);
  }

  div(fr) {
    const nNum = this.num * fr.den;
    const nDen = this.den * fr.num;
    return (`${nNum} ` + ` ${nDen}`);
  }
}

const a = new Fraction(1, 5);
const b = new Fraction(1, 4);
const c = (a.add(b));
const d = (a.res(b));
const e = (a.mul(b));
const f = (a.div(b));
console.log(`suma ${c} | resta ${d} | mult ${e} | div ${f}`);
