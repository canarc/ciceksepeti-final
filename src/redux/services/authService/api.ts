import { SignInRequest, SignUpRequest } from '../../../models/authModel';
import HttpClient from '../../../plugins/HttpClient';

const urls = {
  post: {
    signin: 'authorization/signin',
    signup: 'authorization/signup',
  },
};

class AuthService {
  static SignIn = async (body: SignInRequest) => {
    try {
      const response = await HttpClient.fetch<SignInRequest, any>({ path: urls.post.signin, body, method: 'POST' });
      return response;
    } catch (err) {
      throw err;
    }
  };

  static SignUp = async (body: SignUpRequest) => {
    try {
      const response = await HttpClient.fetch<SignInRequest, any>({ path: urls.post.signup, body, method: 'POST' });
      return response;
    } catch (err) {
      throw err;
    }
  };
}

export default AuthService;
