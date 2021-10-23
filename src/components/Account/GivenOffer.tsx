import { Typography, Box } from '@mui/material';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Offer } from '../../models/offerModel';
import { OfferContainer } from '../../pages/Account/styles';
import { AppColors } from '../../plugins/theme';
import { RootState } from '../../redux';
import { DarkButton } from '../common/Button';
import PurchaseModal from '../ProductDetail/PurchaseModal';

type GivenOfferProps = {
  offer: Offer;
};

const GivenOffer: FC<GivenOfferProps> = ({ offer }) => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const renderGivenOfferStatus = () => {
    switch (offer.status) {
      case 'accepted':
        return (
          <>
            <DarkButton onClick={() => setShowPurchaseModal(true)} sx={{ minWidth: '8.6rem', fontSize: '1.5rem !important', marginRight: '3rem' }} variant="contained" label="Satın Al" />
            <Typography variant="title2">Onaylandı</Typography>
          </>
        );
      case 'offered':
        return <Typography variant="title2">Teklif Yapıldı</Typography>;
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
        <Box sx={{ backgroundColor: AppColors.paperSecondary }} width="min-content" padding="0.8rem 1rem" borderRadius="0.8rem" display="flex" gap="0.7rem">
          <Typography fontWeight="400" color={AppColors.textSixth} variant="title3">
            Verilen Teklif:
          </Typography>
          <Typography variant="title3">{offer.offeredPrice} TL</Typography>
        </Box>
      </Box>

      {offer.product.isSold ? (
        <Typography sx={{ color: '#FAAD60' }} variant="title2">
          Bu Ürün Satışta Değil
        </Typography>
      ) : (
        renderGivenOfferStatus()
      )}
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

export default GivenOffer;
