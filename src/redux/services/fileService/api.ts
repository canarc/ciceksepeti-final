import { toast } from 'react-toastify';
import { toastConfig } from '../../../constants/Toast';
import HttpClient from '../../../plugins/HttpClient';

const urls = {
  post: {
    uploadImage: 'file/upload/image',
  },
};

export default class Fileservice {
  static UploadImage = async (file: any) => {
    try {
      const body = new FormData();
      body.append('file', file, file.name);

      const response = await HttpClient.fetch<any, { url: string }>({ path: urls.post.uploadImage, body, method: 'POST' });

      return response?.url;
    } catch (err) {
      toast.error('Bir hata oluştu.', toastConfig);
    }
  };
}
