import { createModel } from '@rematch/core';
import { Offer } from '../../../models/offerModel';
import { Product } from '../../../models/productModel';
import { RootModel } from '../../index';
import ProductService, { MakeOfferModel } from './api';

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

    UPDATE_PRODUCT: (state: ProductState, product: Product) => {
      return {
        ...state,
        products: state.products.map((_product) => {
          if (product.id === _product.id) return product;
          return _product;
        }),
      };
    },
  },

  effects: (dispatch) => ({
    GetAllProducts: async () => {
      try {
        let response = await ProductService.GetAllProducts();
        dispatch.product.SET_PRODUCTS(response.filter((product) => product.isSold === false));
      } catch {}
    },

    makeOffer: async ({ offer, product }: { offer: MakeOfferModel; product: Product }): Promise<any> => {
      try {
        let response = await ProductService.MakeOffer(offer, product.id);
        dispatch.account.APPEND_GIVEN_OFFERS({ id: response.id, product } as Offer);
      } catch {}
    },

    purchaseProduct: async ({ productId }: { productId: string }): Promise<any> => {
      try {
        await ProductService.Purchase(productId);
        dispatch.account.SET_OFFER_PURCHASED(productId);
        return true;
      } catch {
        return false;
      }
    },

    createProduct: async (product: Product): Promise<any> => {
      try {
        await ProductService.Create(product);
        return true;
      } catch {}
    },
  }),
});

export default product;
