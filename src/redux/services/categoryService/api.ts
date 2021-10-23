import { Category } from '../../../models/productModel';
import HttpClient from '../../../plugins/HttpClient';

const urls = {
  get: {
    all: 'detail/category/all',
  },
};

class CategoryService {
  static GetAllCategories = async () => {
    try {
      const response = await HttpClient.fetch<null, Category[]>({ path: urls.get.all, method: 'GET' });
      return response;
    } catch (err) {
      throw err;
    }
  };
}

export default CategoryService;
