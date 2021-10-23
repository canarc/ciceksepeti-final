export interface Brand {
  id: string;
  title: string;
}

export interface Color {
  id: string;
  title: string;
}

export interface Status {
  id: string;
  title: string;
}

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
