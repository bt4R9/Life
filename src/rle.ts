export class RLEFile {
  rle: string;
  width: number = -1;
  height: number = -1;
  rule: string = '';

  private pattern: number[][] = [];

  constructor(rle: string) {
    this.rle = rle;
    this.parse();
  }

  private parse() {
    const pattern: number[][] = [];
    const ruleMatch = this.rle.match(/rule\s\=\s(.+)/i);
    const xMatch = this.rle.match(/x\s*=\s*\s(\d+)/);
    const yMatch = this.rle.match(/y\s*=\s*\s(\d+)/);

    if (ruleMatch) {
      const rule = ruleMatch[1];

      if (rule !== 'B3/S23') {
        throw new Error('Unsupported RLE format [' + rule + ']');
      }
    }

    let count = 0;
    let x = 0;
    let y = 0;

    for (let i = 0; i < this.rle.length; i++) {
      const char = this.rle[i];

      if (char === 'x' || char === '#') {
        while (i < this.rle.length && this.rle[i] !== '\n') i += 1;
      } else if (char === '$') {
        x = 0;
        y += count;
        count = 1;
      } else if (char === 'b') {
        x += count;
        count = 1;
      } else if (char === 'o') {
        for (let j = 0; j < count; j++) {
          pattern.push([y, x]);
          x += 1;
        }
        count = 1;
      } else if (/[0-9]/.test(char)) {
        let n = 0;
        let j = i;

        while (/[0-9]/.test(this.rle[j])) {
          n = n * 10 + Number(this.rle[j]);
          j += 1;
        }

        count = n;
        i = j - 1;
      }
    }

    this.pattern = pattern;

    if (xMatch) {
      this.width = Number(xMatch[1]);
    }

    if (yMatch) {
      this.height = Number(yMatch[2]);
    }
  }

  get grid() {
    return this.pattern;
  }
}