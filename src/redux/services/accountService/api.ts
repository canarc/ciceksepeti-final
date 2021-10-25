import { Offer } from '../../../models/offerModel';
import HttpClient from '../../../plugins/HttpClient';

const urls = {
  get: {
    givenOffers: 'account/given-offers',
    receivedOffers: 'account/received-offers',
  },
  post: {
    rejectOffer: 'account/reject-offer/',
  },
  put: {
    acceptOffer: 'account/accept-offer/',
  },
  delete: {
    cancelOffer: 'account/cancel-offer/',
  },
};

class AccountService {
  static GetGivenOffers = async () => {
    try {
      const response = await HttpClient.fetch<null, Offer[]>({ path: urls.get.givenOffers, method: 'GET' });
      return response;
    } catch (err) {
      throw err;
    }
  };

  static GetReceivedOffers = async () => {
    try {
      const response = await HttpClient.fetch<null, Offer[]>({ path: urls.get.receivedOffers, method: 'GET' });
      return response;
    } catch (err) {
      throw err;
    }
  };

  static CancelOffer = async (offerId: string) => {
    try {
      const response = await HttpClient.fetch<null, null>({ path: urls.delete.cancelOffer + offerId, method: 'DELETE' });
      return response;
    } catch (err) {
      throw err;
    }
  };

  static AcceptOffer = async (offerId: string) => {
    try {
      const response = await HttpClient.fetch<null, null>({ path: urls.put.acceptOffer + offerId, method: 'PUT' });
      return response;
    } catch (err) {
      throw err;
    }
  };

  static RejectOffer = async (offerId: string) => {
    try {
      const response = await HttpClient.fetch<null, null>({ path: urls.post.rejectOffer + offerId, method: 'POST' });
      return response;
    } catch (err) {
      throw err;
    }
  };
}

export default AccountService;
