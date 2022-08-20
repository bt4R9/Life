import Worker from './worker?worker';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// @ts-ignore
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker();

worker.postMessage({
  type: 'initialize',
  canvas: offscreen,
  size: 3,
  gap: 1,
}, [offscreen]);