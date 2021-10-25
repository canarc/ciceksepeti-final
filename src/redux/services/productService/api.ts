import { toast } from 'react-toastify';
import { toastConfig } from '../../../constants/Toast';
import { Offer } from '../../../models/offerModel';
import { Product } from '../../../models/productModel';
import HttpClient from '../../../plugins/HttpClient';

const urls = {
  get: {
    all: 'product/all',
  },
  post: {
    makeOffer: 'product/offer/',
    create: 'product/create',
  },
  put: {
    purchase: 'product/purchase/',
  },
};

export type MakeOfferModel = {
  offeredPrice: number;
};

class ProductService {
  static GetAllProducts = async () => {
    try {
      const response = await HttpClient.fetch<null, Product[]>({ path: urls.get.all, method: 'GET' });
      return response;
    } catch (err) {
      throw err;
    }
  };

  static MakeOffer = async (offer: MakeOfferModel, productId: string) => {
    try {
      const response = await HttpClient.fetch<MakeOfferModel, { id: string }>({ path: urls.post.makeOffer + productId, body: offer, method: 'POST' });
      return response;
    } catch (err) {
      toast.error('Bir hata oluştu.', toastConfig);
      throw err;
    }
  };

  static Purchase = async (productId: string) => {
    try {
      const response = await HttpClient.fetch<null, Product>({ path: urls.put.purchase + productId, method: 'PUT' });
      return response;
    } catch (err) {
      toast.error('Bir hata oluştu.', toastConfig);
      throw err;
    }
  };

  static Create = async (product: Product) => {
    try {
      const response = await HttpClient.fetch<Product, any>({ path: urls.post.create, body: { ...product }, method: 'POST' });
      return response;
    } catch (err) {
      toast.error('Bir hata oluştu.', toastConfig);
      throw err;
    }
  };
}

export default ProductService;
