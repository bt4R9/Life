import { Board } from "./board";

export interface RendererProps {
  size: number;
  gap: number;
  board: Board;
  canvas: HTMLCanvasElement;
}

export class Renderer {
  readonly canvas: HTMLCanvasElement;
  readonly context: CanvasRenderingContext2D;
  readonly board: Board;

  private frameId: number = -1;
  private targetFPSInterval = 1000 / 8;
  private target = -1;

  size: number;
  gap: number;

  constructor(props: RendererProps) {
    this.size = props.size;
    this.gap = props.gap;
    this.canvas = props.canvas;
    this.board = props.board;

    this.context = this.canvas.getContext('2d')!;
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = '#000';

    let dy = 0;
    let dx = 0;

    for (let y = 0; y < this.board.H; y++) {
      dx = 0;

      for (let x = 0; x < this.board.W; x++) {
        if (this.board.grid[y][x] === 1) {
          this.context.fillRect(dx, dy, this.size, this.size);
        }

        dx += this.size + this.gap;
      }

      dy += this.size + this.gap;
    }
  }

  frame = () => {
    this.frameId = requestAnimationFrame(this.frame);

    const now = Date.now();
    const delta = now - this.target;

    if (delta < this.targetFPSInterval) {
      return;
    }

    this.target = now - (delta % this.targetFPSInterval);

    this.board.update();
    this.draw();
  }

  start() {
    this.target = Date.now();
    this.frameId = requestAnimationFrame(this.frame);
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }
}