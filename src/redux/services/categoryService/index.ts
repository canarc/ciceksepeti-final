import { createModel } from '@rematch/core';
import { Category } from '../../../models/productModel';
import { RootModel } from '../../index';
import CategoryService from './api';

export type CategoryState = {
  categories: Category[];
};

const category = createModel<RootModel>()({
  state: {
    categories: [],
  } as CategoryState,

  reducers: {
    SET_CATEGORIES: (state: CategoryState, categories: Category[]) => {
      return { ...state, categories };
    },
  },

  effects: (dispatch) => ({
    async GetAllCategories() {
      try {
        let response = await CategoryService.GetAllCategories();
        dispatch.category.SET_CATEGORIES(response);
      } catch {}
    },
  }),
});

export default category;
