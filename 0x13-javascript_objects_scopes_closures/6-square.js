#!/usr/bin/node
module.exports = class Square extends require('./5-square.js') {
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.height; i++) console.log(c.repeat(this.width));
    }
  }
};
if (require.main === module) {
    const s = new Square(5);
    s.charPrint('*');
    s.charPrint('*', ' ');
    s.charPrint('*', ' ', ' ');
}