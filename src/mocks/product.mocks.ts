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
    description:
      'Café tradicional elaborado con agua caliente y granos molidos.',
    image: {
      url: img1,
      description:
        'Espresso tradicional en una taza blanca encima de un platillo blanco',
    },
    name: 'Expreso Tradicional',
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
    description: 'Expresso diluido, menos intenso que el tradicional',
    image: {
      url: img2,
      description:
        'Espresso americano en una taza blanca encima de un platillo blanco',
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
    description: 'Espresso tradicional con espuma cremosa',
    image: {
      url: img3,
      description:
        'Espresso cremoso en una taza blanca encima de un platillo blanco',
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
    description: 'Bebida preparada con espresso y cubitos de hielo.',
    image: {
      url: img4,
      description:
        'Espresso helado en una taza blanca encima de un platillo blanco',
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
    description: 'Mitad y mitad espresso tradicional con leche al vapor',
    image: {
      url: img5,
      description: 'Latte en una taza blanca encima de un platillo blanco',
    },
    name: 'Café con leche',
    price: 10.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'con leche',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Un trago de espresso con el doble de leche y espuma cremosa',
    image: {
      url: img6,
      description:
        'Café con leche en una taza blanca encima de un platillo blanco',
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
        name: 'con leche',
      },
    ],
  },
  {
    id: nanoid(),
    description:
      'Bebida de canela elaborada a partir de dosis iguales de café, leche y espuma.',
    image: {
      url: img7,
      description:
        'Café capuchino en una taza blanca encima de un platillo blanco',
    },
    name: 'Capuchino',
    price: 11.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'con leche',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Espresso mezclado con un poco de leche caliente y espuma.',
    image: {
      url: img8,
      description:
        'Café macchiato en una taza blanca encima de un platillo blanco',
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
        name: 'con leche',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Espresso con sirope de chocolate, poca leche y espuma',
    image: {
      url: img9,
      description:
        'Café macchiato en una taza blanca encima de un platillo blanco',
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
        name: 'con leche',
      },
    ],
  },
  {
    id: nanoid(),
    description:
      'Bebida elaborada con chocolate disuelto en leche caliente y café.',
    image: {
      url: img10,
      description:
        'Café con chocolate caliente en una taza blanca encima de un platillo blanco',
    },
    name: 'Chocolate caliente',
    price: 13,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
      {
        id: nanoid(),
        name: 'con leche',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida espresso helada con ron, nata y menta',
    image: {
      url: img11,
      description:
        'Café cubano en una taza blanca encima de un platillo blanco',
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
        name: 'alcohólico',
      },
      {
        id: nanoid(),
        name: 'helado',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida dulce preparada con café y leche de coco.',
    image: {
      url: img12,
      description:
        'Café hawaiano en una taza blanca encima de un platillo blanco',
    },
    name: 'Hawaiano',
    price: 10,
    tags: [
      {
        id: nanoid(),
        name: 'Especial',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida preparada con granos de café árabe y especias.',
    image: {
      url: img13,
      description: 'Café árabe en una taza blanca encima de un platillo blanco',
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
    description:
      'Bebida a base de café, whisky irlandés, azúcar y nata montada.',
    image: {
      url: img14,
      description:
        'Café irlandés en una taza blanca encima de un platillo blanco',
    },
    name: 'Irlandesa',
    price: 14.5,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
      {
        id: nanoid(),
        name: 'alcohólico',
      },
    ],
  },
];
