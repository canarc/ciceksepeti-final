import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { DarkButton, LightButton } from '../../components/common/Button';
import InformationField from '../../components/ProductDetail/InformationField';
import OfferModal from '../../components/ProductDetail/OfferModal';
import PurchaseModal from '../../components/ProductDetail/PurchaseModal';
import { useWindowSize } from '../../helpers/sizeHook';

import { Offer } from '../../models/offerModel';
import { Product } from '../../models/productModel';
import { AppColors } from '../../plugins/theme';
import { Dispatch, RootState } from '../../redux';
import { Container } from './styles';

const ProductDetail = () => {
  const size = useWindowSize();
  const dispatch = useDispatch<Dispatch>();
  const products = useSelector<RootState, Product[]>((state) => state.product.products);
  const givenOffers = useSelector<RootState, Offer[]>((state) => state.account.givenOffers);

  const { productId } = useParams<{ productId: string }>();
  const product = products.find((product) => product.id === productId);
  const offer = givenOffers.find((offer) => offer.product?.id === product?.id);

  const [showOfferModal, setShowOfferModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const CancelOffer = async () => {
    await dispatch.account.CancelOffer({ offerId: offer!.id });
  };

  return (
    <>
      <Container>
        <img src={product?.imageUrl} alt="productImage" />
        <Box padding="1.4rem" display="flex" flexDirection="column">
          <Typography variant="title4">{product?.title}</Typography>

          <Box display="flex" flexDirection="column" gap="2rem" marginTop="2.5rem">
            <InformationField field="Marka" value={product?.brand.title} />
            <InformationField field="Renk" value={product?.color.title} />
            <InformationField field="Kullanım Durumu" value={product?.status.title} />
          </Box>

          <Typography variant="title5" marginTop="3rem">
            {product?.price} TL
          </Typography>

          {size.width! > 768 && !product?.isSold && !isPurchased && (
            <Box marginTop="3rem" display="flex" gap="1rem">
              <LightButton onClick={() => setShowPurchaseModal(true)} sx={{ width: '23.5rem' }} label="Satın Al" />
              {product?.isOfferable && (offer ? <DarkButton sx={{ width: '23.5rem' }} label="Teklifi Geri Çek" onClick={CancelOffer} /> : <DarkButton sx={{ width: '23.5rem' }} label="Teklif Ver" onClick={() => setShowOfferModal(true)} />)}
            </Box>
          )}

          {size.width! > 768 && isPurchased && <Box sx={{ width: '23.5rem', height: '4.5rem', borderRadius: '0.8rem', marginTop: '3rem', backgroundColor: '#FFF0E2', fontSize: '1.8rem', fontWeight: 'bold', lineHeight: '4.5rem', color: '#FAAD60', textAlign: 'center', verticalAlign: 'center' }}>Bu Ürün Satışta Değil</Box>}

          <Typography marginTop="3rem" color={AppColors.textPrimary} variant="title3">
            Açıklama
          </Typography>

          <Typography width="100%" maxWidth="48rem" variant="subTitle3" marginTop="1rem" paragraph>
            {product?.description}
          </Typography>
        </Box>

        <OfferModal product={product!} show={showOfferModal} onHide={() => setShowOfferModal(false)} />
        <PurchaseModal
          product={product!}
          show={showPurchaseModal}
          onHide={(success: boolean) => {
            if (success) {
              setIsPurchased(true);
            }
            setShowPurchaseModal(false);
          }}
        />
      </Container>
      {size.width! < 768 &&
        !product?.isSold &&
        (isPurchased ? (
          <>
            <Box sx={{ width: '100%', height: '4.5rem', borderRadius: '0.8rem', marginTop: '3rem', backgroundColor: '#FFF0E2', fontSize: '1.8rem', fontWeight: 'bold', lineHeight: '4.5rem', color: '#FAAD60', textAlign: 'center', verticalAlign: 'center', position: 'absolute', bottom: 0, left: 0, right: 0 }}>Bu Ürün Satışta Değil</Box>
          </>
        ) : (
          <Box position="absolute" width="100vw" padding="1rem" bottom="0" left="0" right="0" display="flex" gap="1rem" bgcolor="white">
            <LightButton onClick={() => setShowPurchaseModal(true)} sx={{ width: '23.5rem' }} label="Satın Al" />
            {product?.isOfferable && (offer ? <DarkButton sx={{ width: '23.5rem' }} label="Teklifi Geri Çek" onClick={CancelOffer} /> : <DarkButton sx={{ width: '23.5rem' }} label="Teklif Ver" onClick={() => setShowOfferModal(true)} />)}
          </Box>
        ))}
    </>
  );
};

export default ProductDetail;
