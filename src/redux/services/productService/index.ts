import { createModel } from '@rematch/core';
import { Product } from '../../../models/productModel';
import { RootModel } from '../../index';
import ProductService from './api';

export type ProductState = {
  products: Product[];
};

const product = createModel<RootModel>()({
  state: {
    products: [],
  } as ProductState,

  reducers: {
    SET_PRODUCTS: (state: ProductState, products: Product[]) => {
      return { ...state, products };
    },
  },

  effects: (dispatch) => ({
    async GetAllProducts() {
      try {
        let response = await ProductService.GetAllProducts();
        dispatch.product.SET_PRODUCTS(response);
      } catch {}
    },
  }),
});

export default product;
