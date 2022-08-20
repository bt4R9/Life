import Glider from './patterns/glider.rle?raw';
import GliderGun from './patterns/glider_gun.rle?raw';
import Pulsar from './patterns/pulsar.rle?raw';
import Greyship from './patterns/greyship.rle?raw';
import Spaceship from './patterns/spaceship.rle?raw';

import { RLEFile } from './rle';

export const glider = new RLEFile(Glider);
export const gliderGun = new RLEFile(GliderGun);
export const pulsar = new RLEFile(Pulsar);
export const greyship = new RLEFile(Greyship);
export const spaceship = new RLEFile(Spaceship);