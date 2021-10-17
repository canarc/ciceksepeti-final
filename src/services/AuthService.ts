import HttpClient from '../plugins/HttpClient';

const urls = {
  post: {
    signin: 'authorization/signin',
    signup: 'authorization/signup',
  },
};

type SignInRequest = {
  email: string;
  password: string;
};

class AuthService {
  static SignIn = async (body: SignInRequest) => {
    try {
      const response = await HttpClient.fetch<SignInRequest, any>({ path: urls.post.signin, body, method: 'POST' });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
}

export default AuthService;
