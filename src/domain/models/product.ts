export interface ProductImage {
  url: string;
  description: string;
}

export interface ProductTag {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  description: string;
  image: ProductImage;
  name: string;
  price: number;
  tags: ProductTag[];
}
