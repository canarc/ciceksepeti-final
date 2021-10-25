import { Typography, Box, Button } from '@mui/material';
import { FC, useState } from 'react';
import { Dispatch } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { device } from '../../constants/Size';
import { useWindowSize } from '../../helpers/sizeHook';
import { Offer } from '../../models/offerModel';
import { OfferContainer } from '../../pages/Account/styles';
import { AppColors } from '../../plugins/theme';
import { RootState } from '../../redux';
import { DarkButton } from '../common/Button';
import PurchaseModal from '../ProductDetail/PurchaseModal';

type GivenOfferProps = {
  offer: Offer;
};

const ReceivedOffer: FC<GivenOfferProps> = ({ offer }) => {
  const dispatch = useDispatch<Dispatch>();
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const size = useWindowSize();

  const renderGivenOfferStatus = () => {
    switch (offer.status) {
      case 'accepted':
        return <Typography variant="title2">Kabul Edildi</Typography>;
      case 'offered':
        return (
          <Box display="flex" gap="1rem">
            <DarkButton label="Onayla" onClick={() => dispatch.account.AcceptOffer({ offerId: offer.id })} />
            <DarkButton bgColor="error" label="Reddet" onClick={() => dispatch.account.RejectOffer({ offerId: offer.id })} />
          </Box>
        );
      case 'rejected':
        return (
          <Typography sx={{ color: '#F77474' }} variant="title2">
            Reddedildi
          </Typography>
        );
      default:
        return <Typography variant="title2">{offer.status}</Typography>;
    }
  };

  return (
    <OfferContainer key={offer.id}>
      <img src={offer.product.imageUrl} alt="offerImage" />
      <Box display="flex" flexDirection="column" justifyContent="center" gap="0.7rem" width="100%">
        <Typography fontWeight="400" variant="title3">
          {offer.product.title}
        </Typography>
        <Box sx={{ backgroundColor: AppColors.paperSecondary }} width="100%" maxWidth="23rem" padding="0.8rem 1rem" borderRadius="0.8rem" display="flex" gap="0.7rem">
          <Typography fontWeight="400" color={AppColors.textSixth} variant="title3">
            Alınan Teklif:
          </Typography>
          <Typography variant="title3">{offer.offeredPrice} TL</Typography>
        </Box>

        {size.width! <= 425 &&
          (offer.product.isSold ? (
            <Typography sx={{ color: '#FAAD60' }} variant="title2">
              Satıldı
            </Typography>
          ) : (
            renderGivenOfferStatus()
          ))}
      </Box>

      {size.width! > 425 &&
        (offer.product.isSold ? (
          <Typography sx={{ color: '#FAAD60' }} variant="title2">
            Satıldı
          </Typography>
        ) : (
          renderGivenOfferStatus()
        ))}

      <PurchaseModal
        product={offer.product}
        show={showPurchaseModal}
        onHide={(success: boolean) => {
          setShowPurchaseModal(false);
        }}
      />
    </OfferContainer>
  );
};

export default ReceivedOffer;
