class RomanNumerals {
  static roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  static decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  static toRoman(num) {
    if (typeof num !== "number")
      throw new TypeError("The 'toRoman' method only accepts numbers.");
    if (num < 1) return new RangeError("The number must be greater than 0.");

    let encoded = "";

    this.decimal.forEach((e, i) => {
      while (this.decimal[i] <= num) {
        num -= this.decimal[i];
        encoded += this.roman[i];
      }
    });

    return encoded;
  }

  static fromRoman(str) {
    if (typeof str !== "string")
      throw new TypeError("The 'fromRoman' method only accepts strings.");

    let num = 0;

    for (let i = 0; i < str.length; i++) {
      const checkTwoLetters = str[i] + str[i + 1];

      if (this.roman.includes(checkTwoLetters)) {
        num += this.decimal[this.roman.indexOf(checkTwoLetters)];
        i++;
      } else {
        const romanToNumber = this.decimal[this.roman.indexOf(str[i])];
        if (romanToNumber === undefined)
          throw new RangeError("Invalid letters in string.");

        num += romanToNumber;
      }
    }

    return num;
  }
}
