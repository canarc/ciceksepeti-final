export type SignInRequest = {
  email: string;
  password: string;
};

export interface SignUpRequest extends SignInRequest {}
