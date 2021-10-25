import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { toastConfig } from '../../constants/Toast';
import { Product } from '../../models/productModel';
import { Dispatch } from '../../redux';
import { DarkButton, LightButton } from '../common/Button';
import Modal from '../common/Modal';

interface OfferModalProps {
  product: Product;
  show: boolean;
  onHide: any;
}

const PurchaseModal: FC<OfferModalProps> = ({ show, product, onHide }) => {
  const dispatch = useDispatch<Dispatch>();

  const PurchaseProduct = async () => {
    let response = await dispatch.product.purchaseProduct({ productId: product!.id });
    onHide(response);

    if (response) {
      toast.success('Satın Alındı', toastConfig);
    }
  };

  return (
    <Modal style={{ textAlign: 'center' }} onHide={() => onHide()} show={show}>
      <Typography variant="title5">Satın Al</Typography>
      <Typography marginTop="1.2rem" variant="subTitle3">
        Satın almak istiyor musunuz?
      </Typography>
      <Box marginTop="2rem" display="flex" gap="1rem" justifyContent="center">
        <Box width="15rem">
          <LightButton fullWidth onClick={() => onHide()} label="Vazgeç" />
        </Box>
        <Box width="15rem">
          <DarkButton fullWidth label="Satın Al" onClick={PurchaseProduct} />
        </Box>
      </Box>
    </Modal>
  );
};

export default PurchaseModal;
