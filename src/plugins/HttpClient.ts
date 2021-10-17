/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import { API_URL } from '../constants/HttpClientConfig';

/* interface Response<T> {
	data: T
	status_code: number
	message: string
} */

const axios = require('axios').default;

type Methods = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';

interface RequestSettings<R> {
  path: string;
  method: Methods;
  body?: R;
  params?: object;
}

interface RequestError {
  statusCode: number;
  message: string;
}

class HttpClientService {
  fetch<R, T>(config: RequestSettings<R>): Promise<T> {
    return new Promise((resolve, reject) => {
      axios({
        method: config.method,
        url: API_URL + config.path,
        data: config.body,
        params: config.params,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((err: RequestError) => {
          reject(err);
        });
    });
  }
}

export default new HttpClientService();