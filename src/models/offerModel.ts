import { Product } from './productModel';

export interface OfferedBy {
  id: string;
}

export interface Offer {
  product: Product;
  productOwner: string;
  offeredBy: OfferedBy;
  id: string;
  status: string;
  offeredPrice: number;
}
