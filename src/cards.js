import rayquazaImage from './assets/rayquaza.png';
import mewtwoImage from './assets/mewtwo.png';
import kyogreImage from './assets/kyogre.png';
import groudonImage from './assets/groudon.png';
import yvitalImage from './assets/yvital.png';
import { shuffleArray } from './utils/shuffleArray';

export const cards = shuffleArray([
  {
    id: 1,
    value: 'rayquaza',
    image: rayquazaImage,
  },
  {
    id: 2,
    value: 'yvital',
    image: yvitalImage,
  },
  {
    id: 3,
    value: 'rayquaza',
    image: rayquazaImage,
  },
  {
    id: 4,
    value: 'yvital',
    image: yvitalImage,
  },
  {
    id: 5,
    value: 'mewtwo',
    image: mewtwoImage,
  },
  {
    id: 6,
    value: 'kyogre',
    image: kyogreImage,
  },
  {
    id: 7,
    value: 'mewtwo',
    image: mewtwoImage,
  },
  {
    id: 8,
    value: 'kyogre',
    image: kyogreImage,
  },
  {
    id: 9,
    value: 'groudon',
    image: groudonImage,
  },
  {
    id: 10,
    value: 'groudon',
    image: groudonImage,
  },
]);
