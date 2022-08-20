import { Life } from './life';

const life = new Life();

type Messages =
  | {
    type: 'initialize';
    canvas: HTMLCanvasElement;
    size: number;
    gap: number;
  };

self.addEventListener('message', (event: MessageEvent<Messages>) => {
  switch (event.data.type) {
    case 'initialize':
      life.initialize(event.data); 
      life.start();
    break;
  }
});