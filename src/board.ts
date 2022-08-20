import { RLEFile } from "./rle";

export interface BoardProps {
  height: number;
  width: number;
}

export class Board {
  static neighbors = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],  [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  H: number;
  W: number;

  readonly grid: number[][];

  constructor(props: BoardProps) {
    this.H = props.height;
    this.W = props.width;

    this.grid = [];

    this.build();
  }

  private build() {
    for (let y = 0; y < this.H; y++) {
      this.grid[y] = [];
      for (let x = 0; x < this.W; x++) {
        this.grid[y][x] = 0;
      }
    }
  }

  addRLE(rle: RLEFile, offset: { y: number; x: number} = { y: 0, x: 0}) {
    for (const [y, x] of rle.grid) {
      this.grid[y + offset.y][x + offset.x] = 1;
    }
  }

  update() {
    for (let y = 0; y < this.H; y++) {
      for (let x = 0; x < this.W; x++) {
        let live = 0;

        for (const [dy, dx] of Board.neighbors) {
          const ny = y + dy;
          const nx = x + dx;

          if (ny >= 0 && ny < this.H && nx >= 0 && nx < this.W && Math.abs(this.grid[ny][nx]) === 1) {
            live += 1;
          }
        }

        if (this.grid[y][x] === 1 && (live < 2 || live > 3)) {
          this.grid[y][x] = -1;
        }

        if (this.grid[y][x] === 0 && live === 3) {
          this.grid[y][x] = 2;
        }
      }
    }

    for (let y = 0; y < this.H; y++) {
      for (let x = 0; x < this.W; x++) {
        if (this.grid[y][x] > 0) {
          this.grid[y][x] = 1;
        } else {
          this.grid[y][x] = 0;
        }
      }
    }
  }
}