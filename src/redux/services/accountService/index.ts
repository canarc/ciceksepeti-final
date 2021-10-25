import { createModel } from '@rematch/core';
import { Offer } from '../../../models/offerModel';
import { Product } from '../../../models/productModel';
import { RootModel } from '../../index';
import AccountService from './api';

export type AccountState = {
  givenOffers: Offer[];
  receivedOffers: Offer[];
};

const account = createModel<RootModel>()({
  state: {
    givenOffers: [],
    receivedOffers: [],
  } as AccountState,

  reducers: {
    SET_GIVEN_OFFERS: (state: AccountState, givenOffers: Offer[]) => {
      return { ...state, givenOffers };
    },
    SET_RECEIVED_OFFERS: (state: AccountState, receivedOffers: Offer[]) => {
      return { ...state, receivedOffers };
    },

    SET_OFFER_PURCHASED: (state: AccountState, productId: string) => {
      return {
        ...state,
        givenOffers: state.givenOffers.map((offer) => {
          if (offer.product.id === productId) offer.product.isSold = true;
          return offer;
        }),
      };
    },

    APPEND_GIVEN_OFFERS: (state: AccountState, offer: Offer) => {
      return { ...state, givenOffers: [...state.givenOffers, offer] };
    },
    DELETE_GIVEN_OFFER: (state: AccountState, offerId: string) => {
      return { ...state, givenOffers: state.givenOffers.filter((_offer) => _offer.id !== offerId) };
    },

    SET_OFFER_ACCEPTED: (state: AccountState, offerId: string) => {
      return {
        ...state,
        receivedOffers: state.receivedOffers.map((offer) => {
          if (offer.id === offerId) offer.status = 'accepted';
          return offer;
        }),
      };
    },

    SET_OFFER_REJECTED: (state: AccountState, offerId: string) => {
      return {
        ...state,
        receivedOffers: state.receivedOffers.map((offer) => {
          if (offer.id === offerId) offer.status = 'rejected';
          return offer;
        }),
      };
    },
  },

  effects: (dispatch) => ({
    GetGivenOffers: async () => {
      try {
        let response = await AccountService.GetGivenOffers();
        dispatch.account.SET_GIVEN_OFFERS(response);
      } catch {}
    },

    GetReceivedOffers: async () => {
      try {
        let response = await AccountService.GetReceivedOffers();
        dispatch.account.SET_RECEIVED_OFFERS(response);
      } catch {}
    },

    CancelOffer: async ({ offerId }: { offerId: string }) => {
      try {
        await AccountService.CancelOffer(offerId);
        dispatch.account.DELETE_GIVEN_OFFER(offerId);
      } catch {}
    },

    AcceptOffer: async ({ offerId }: { offerId: string }) => {
      try {
        await AccountService.AcceptOffer(offerId);
        dispatch.account.SET_OFFER_ACCEPTED(offerId);
      } catch {}
    },

    RejectOffer: async ({ offerId }: { offerId: string }) => {
      try {
        await AccountService.RejectOffer(offerId);
        dispatch.account.SET_OFFER_REJECTED(offerId);
      } catch {}
    },
  }),
});

export default account;
