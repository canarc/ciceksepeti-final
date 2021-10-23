import { Box, IconButton, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import CloseX from '../../assets/CloseX';
import { Product } from '../../models/productModel';
import { AppColors } from '../../plugins/theme';
import { Dispatch } from '../../redux';
import { DarkButton } from '../common/Button';
import Modal, { ModalProps } from '../common/Modal';
import { ModalContent } from '../common/Modal/styles';
import Radio from '../common/Radio';
import { Input } from '../common/TextInput/styles';

interface OfferModalProps extends ModalProps {
  product: Product;
  onHide: () => void;
}

const OfferModal: FC<OfferModalProps> = ({ show, product, onHide }) => {
  const dispatch = useDispatch<Dispatch>();
  const [price, setPrice] = useState<number | string | undefined>(undefined);
  const defaultOptions = [
    { value: product?.price * 0.2, title: "%20'si Kadar Teklif Ver" },
    { value: product?.price * 0.3, title: "%30'u Kadar Teklif Ver" },
    { value: product?.price * 0.4, title: "%40'ı Kadar Teklif Ver" },
  ];

  const makeOffer = async () => {
    await dispatch.product.makeOffer({ offer: { offeredPrice: +price! }, product });
    onHide();
  };

  return (
    <Modal onHide={onHide} show={show}>
      <ModalContent width="100%" maxWidth="48rem" onClick={(e) => e.stopPropagation()}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="title5">Teklif Ver</Typography>
          <IconButton onClick={onHide} color="primary" aria-label="add to shopping cart">
            <CloseX />
          </IconButton>
        </Box>
        <Box borderRadius="1rem" marginTop="1.7rem" height="6rem" sx={{ backgroundColor: '#F0F8FF' }} padding="0.6rem 1.1rem 0.4rem 0.6rem" display="flex" gap="0.7rem" alignItems="center">
          <img style={{ borderRadius: '0.8rem', width: '5rem', height: '5rem' }} src={product?.imageUrl} alt="productImage" />
          <Box maxWidth="45%" display="flex" alignSelf="flex-start">
            <Typography variant="subTitle2">{product?.title}</Typography>
          </Box>
          <Typography flex="1" textAlign="end" variant="title3" color={AppColors.textPrimary}>
            {product?.price} TL
          </Typography>
        </Box>
        <Box marginTop="2rem">
          <Radio value={+price!} onSelect={(selectedValue) => setPrice(selectedValue)} options={defaultOptions} />
        </Box>
        <Box marginTop="1.5rem">
          <Input value={price} type="number" onChange={(e) => setPrice(e.target.value)} fullWidth placeholder="Teklif Belirle" endAdornment={<div style={{ position: 'absolute', right: '1rem' }}>TL</div>} />
        </Box>

        <DarkButton disabled={!+price!} sx={{ marginTop: '2rem', width: '100%', maxWidth: '31.5rem', alignSelf: 'center' }} fullWidth label="Onayla" onClick={makeOffer} />
      </ModalContent>
    </Modal>
  );
};

export default OfferModal;
