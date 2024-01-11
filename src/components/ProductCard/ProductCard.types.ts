import { Product } from '@/domain/models/product';

export type ProductProps = {
  product: Product;
  handleClickDecrementProduct: (e: Product) => void;
  handleClickIncreaseProduct: (e: Product) => void;
  quantity?: number;
};
