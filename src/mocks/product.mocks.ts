import { Product } from '@/domain/models/product';
import { nanoid } from 'nanoid';
import img1 from '../assets/images/americano.png';
import img2 from '../assets/images/arabe.png';
import img3 from '../assets/images/cafe-com-leite.png';
import img4 from '../assets/images/cafe-gelado.png';
import img5 from '../assets/images/capuccino.png';
import img6 from '../assets/images/chocolate-quente.png';
import img7 from '../assets/images/cubano.png';
import img8 from '../assets/images/expreso-cremoso.png';
import img9 from '../assets/images/expresso.png';
import img10 from '../assets/images/havaiano.png';
import img11 from '../assets/images/irlandes.png';
import img12 from '../assets/images/latte.png';
import img13 from '../assets/images/macchiato.png';
import img14 from '../assets/images/mochaccino.png';

export const productItems: Product[] = [
  {
    id: nanoid(),
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: {
      url: img1,
      description:
        'Café expresso tradicional em uma xícara branca em cima de um pires branco',
    },
    name: 'Expresso Tradicional',
    price: 9.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: {
      url: img2,
      description:
        'Café expresso americano em uma xícara branca em cima de um pires branco',
    },
    name: 'Expresso Americano',
    price: 8,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Café expresso tradicional com espuma cremosa',
    image: {
      url: img3,
      description:
        'Café expresso cremoso em uma xícara branca em cima de um pires branco',
    },
    name: 'Expresso Cremoso',
    price: 10,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: {
      url: img4,
      description:
        'Café expresso gelado em uma xícara branca em cima de um pires branco',
    },
    name: 'Expresso Gelado',
    price: 8.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'gelado',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: {
      url: img5,
      description:
        'Café com leite em uma xícara branca em cima de um pires branco',
    },
    name: 'Café com Leite',
    price: 10.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: {
      url: img6,
      description: 'Café latte em uma xícara branca em cima de um pires branco',
    },
    name: 'Latte',
    price: 12,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: {
      url: img7,
      description:
        'Café capuccino em uma xícara branca em cima de um pires branco',
    },
    name: 'Capuccino',
    price: 11.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: {
      url: img8,
      description:
        'Café macchiato em uma xícara branca em cima de um pires branco',
    },
    name: 'Macchiato',
    price: 11,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: {
      url: img9,
      description:
        'Café macchiato em uma xícara branca em cima de um pires branco',
    },
    name: 'Mocaccino',
    price: 12.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: {
      url: img10,
      description:
        'Café com chocolate quente em uma xícara branca em cima de um pires branco',
    },
    name: 'Chocolate Quente',
    price: 13,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: {
      url: img11,
      description:
        'Café cubano em uma xícara branca em cima de um pires branco',
    },
    name: 'Cubano',
    price: 13.5,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
      {
        id: nanoid(),
        name: 'alcoólico',
      },
      {
        id: nanoid(),
        name: 'gelado',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: {
      url: img12,
      description:
        'Café havaiano em uma xícara branca em cima de um pires branco',
    },
    name: 'Havaiano',
    price: 10,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: {
      url: img13,
      description: 'Café árabe em uma xícara branca em cima de um pires branco',
    },
    name: 'Árabe',
    price: 10,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: {
      url: img14,
      description:
        'Café irlandes em uma xícara branca em cima de um pires branco',
    },
    name: 'Irlandês',
    price: 14.5,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
      {
        id: nanoid(),
        name: 'alcoólico',
      },
    ],
  },
];
