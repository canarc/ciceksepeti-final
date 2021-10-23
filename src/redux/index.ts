import { init, RematchRootState, Models, RematchDispatch } from '@rematch/core';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import account from './services/accountService';
import category from './services/categoryService';
import detail from './services/detailService';
import product from './services/productService';

export interface RootModel extends Models<RootModel> {
  category: typeof category;
  product: typeof product;
  account: typeof account;
  detail: typeof detail;
}

type FullModel = ExtraModelsFromLoading<RootModel>;

export const models: RootModel = {
  category,
  product,
  account,
  detail,
};

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
