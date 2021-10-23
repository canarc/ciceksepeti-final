import { Brand, Color, Status } from '../../../models/detailModel';
import HttpClient from '../../../plugins/HttpClient';

const urls = {
  get: {
    brand: 'detail/brand/all',
    status: 'detail/status/all',
    color: 'detail/color/all',
  },
};

class DetailService {
  static GetAllColors = async () => {
    try {
      const response = await HttpClient.fetch<null, Color[]>({ path: urls.get.color, method: 'GET' });
      return response;
    } catch (err) {
      throw err;
    }
  };

  static GetAllBrands = async () => {
    try {
      const response = await HttpClient.fetch<null, Brand[]>({ path: urls.get.brand, method: 'GET' });
      return response;
    } catch (err) {
      throw err;
    }
  };

  static GetAllStatuses = async () => {
    try {
      const response = await HttpClient.fetch<null, Status[]>({ path: urls.get.status, method: 'GET' });
      return response;
    } catch (err) {
      throw err;
    }
  };
}

export default DetailService;
