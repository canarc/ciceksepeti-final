import { createModel } from '@rematch/core';
import { RootModel } from '../../index';

export type AuthState = {
  token?: string;
};

const auth = createModel<RootModel>()({
  state: {
    token: '',
  } as AuthState,

  reducers: {},

  effects: (dispatch) => ({}),
});

export default auth;
