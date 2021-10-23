import { init, RematchRootState, Models, RematchDispatch } from '@rematch/core';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';

import category from './services/categoryService';
import product from './services/productService';

export interface RootModel extends Models<RootModel> {
  category: typeof category;
  product: typeof product;
}

type FullModel = ExtraModelsFromLoading<RootModel>;

export const models: RootModel = {
  category,
  product,
};

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
