import { Brand, Color, Status } from './detailModel';

export interface Category {
  id: string;
  title: string;
}

export interface Product {
  id: string;
  brand: Brand;
  color: Color;
  owner: string;
  status: Status;
  category: Category;
  description: string;
  title: string;
  isSold: boolean;
  imageUrl: string;
  price: number;
  isOfferable: boolean;
}
