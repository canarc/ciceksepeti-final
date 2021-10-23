/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import { API_URL } from '../constants/HttpClientConfig';
import { getCookie } from '../helpers/cookie';

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
    const token = JSON.parse(getCookie('token') || '{}').token;

    return new Promise((resolve, reject) => {
      axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
