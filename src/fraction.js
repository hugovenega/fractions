class Fraction {
  constructor(numerator, denominator) {
    this.simplify(numerator, denominator);
  }

  simplify(numerator, denominator) {
    if (numerator === denominator) {
      this.numerator = 1;
      this.denominator = 1;
    } else if (numerator % denominator === 0) {
      this.numerator = numerator / denominator;
      this.denominator = 1;
    } else if (denominator % numerator === 0) {
      this.numerator = numerator / numerator;
      this.denominator = denominator / numerator;
    } else {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  }

  add(fraction) {
    let newDenominator;
    let newNumerator;
    if (this.den !== fraction.den) {
      newDenominator = this.den * fraction.den;
      newNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
    } else {
      newDenominator = this.denominator;
      newNumerator = this.numerator + fraction.numerator;
    }
    return new Fraction(newNumerator, newDenominator);
  }

  substract(fraction) {
    let newDenominator;
    let newNumerator;
    if (this.denominator !== fraction.denominator) {
      newDenominator = this.denominator * fraction.denominator;
      newNumerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
    } else {
      newDenominator = this.denominator;
      newNumerator = this.numerator - fraction.numerator;
    }
    return new Fraction(newNumerator, newDenominator);
  }

  multiply(fraction) {
    const newNumerator = this.numerator * fraction.numerator;
    const newDenominator = this.denominator * fraction.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  divide(fraction) {
    const newNumerator = this.numerator * fraction.denominator;
    const newDenominator = this.denominator * fraction.numerator;
    return new Fraction(newNumerator, newDenominator);
  }

  pow(exponent) {
    let newNumerator;
    let newDenominator;
    if (typeof exponent !== 'number') {
      newNumerator = Math.pow(this.numerator, exponent.numerator / exponent.denominator);
      newDenominator = Math.pow(this.denominator, exponent.numerator / exponent.denominator);
    } else if (exponent >= 0) {
      newNumerator = Math.pow(this.numerator, exponent);
      newDenominator = Math.pow(this.denominator, exponent);
    } else {
      newNumerator = Math.pow(this.denominator, Math.abs(exponent));
      newDenominator = Math.pow(this.numerator, Math.abs(exponent));
    }
    return new Fraction(newNumerator, newDenominator);
  }

  log(base = Math.E) {
    return Math.pow(base, this.numerator) / Math.pow(base, this.denominator);
  }

  get toNumber() {
    return this.numerator / this.denominator;
  }

  get inverse() {
    return new Fraction(this.denominator, this.numerator);
  }

  get toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}

const a = new Fraction(4, 4);
const b = new Fraction(2, 3);
const c = (a.add(b));
const d = (a.substract(b));
const e = (a.multiply(b));
const f = (a.divide(b));
const g = (a.pow(b));
const h = (a.inverse);
const i = (a.toString);
const j = (a.log(4));
console.log(a);
