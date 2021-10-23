import { Product } from '../../../models/productModel';
import HttpClient from '../../../plugins/HttpClient';

const urls = {
  get: {
    all: 'product/all',
  },
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
}

export default ProductService;
