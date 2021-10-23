import { createModel } from '@rematch/core';
import { Brand, Color, Status } from '../../../models/detailModel';
import { RootModel } from '../../index';
import DetailService from './api';

export type CategoryState = {
  colors: Color[];
  brands: Brand[];
  statuses: Status[];
};

const detail = createModel<RootModel>()({
  state: {
    colors: [],
    brands: [],
    statuses: [],
  } as CategoryState,

  reducers: {
    INIT: (state: CategoryState, { colors, brands, statuses }: CategoryState) => {
      return { colors, brands, statuses };
    },
  },

  effects: (dispatch) => ({
    async GetAllDetails() {
      try {
        let [colors, brands, statuses] = await Promise.all([DetailService.GetAllColors(), DetailService.GetAllBrands(), DetailService.GetAllStatuses()]);

        dispatch.detail.INIT({ colors, brands, statuses });
      } catch {}
    },
  }),
});

export default detail;
