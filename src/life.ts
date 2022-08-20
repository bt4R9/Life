import { Board } from './board';
import { Renderer } from './renderer';
import { greyship, gliderGun, pulsar, spaceship } from './patterns';

interface InitializeProps {
  canvas: HTMLCanvasElement;
  size: number;
  gap: number;
}

export class Life {
  board: Board | null = null;
  renderer: Renderer | null = null;

  initialize(props: InitializeProps) {
    const { canvas, size, gap } = props;

    const width = Math.floor(canvas.width / (size + gap));
    const height = Math.floor(canvas.height / (size + gap));

    this.board = new Board({ width, height });
    this.renderer = new Renderer({
      canvas,
      size,
      gap,
      board: this.board
    });

    this.board.addRLE(gliderGun, { x: 5, y: 5});

    this.board.addRLE(greyship, { x: 220, y: 80 });

    this.board.addRLE(pulsar, { x: 30, y: 100 });
    this.board.addRLE(pulsar, { x: 30, y: 60 });
    this.board.addRLE(pulsar, { x: 30, y: 120 });

    this.board.addRLE(spaceship, { x: 150, y: 5 });
  }

  start() {
    this.renderer?.start();
  }

  stop() {
    this.renderer?.stop();
  }
}