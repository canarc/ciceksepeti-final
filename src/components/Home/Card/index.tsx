import { CustomCard } from './styles';
import { Box, Skeleton, Typography } from '@mui/material';
import { Product } from '../../../models/productModel';
import { FC, memo, useState } from 'react';

type CardProps = {
  product: Product;
  onClick: () => void;
};

const Card: FC<CardProps> = ({ product, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    imageUrl,
    brand: { title: brandTitle },
    color: { title: colorTitle },
    price,
  } = product;

  return (
    <>
      <CustomCard style={{ display: isLoaded ? 'none' : 'block' }}>
        <Skeleton sx={{ borderRadius: '0.8rem' }} variant="rectangular" width="26rem" height="29.7rem" />
        <Skeleton variant="rectangular" width="26rem" height="6.5rem" sx={{ marginTop: '0.5rem', borderRadius: '0.8rem' }} />
      </CustomCard>
      <CustomCard onClick={onClick} style={{ display: !isLoaded ? 'none' : 'block' }}>
        <img onLoad={() => setIsLoaded(true)} src={imageUrl} alt="productimage" />
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography sx={{ textTransform: 'capitalize' }} variant="title2">
            {brandTitle}
          </Typography>
          <Typography sx={{ textTransform: 'capitalize' }} variant="subTitle1">
            <b>Renk:</b> {colorTitle}
          </Typography>
        </Box>
        <Typography variant="title3">{price} TL</Typography>
      </CustomCard>
    </>
  );
};

export default memo(Card);
