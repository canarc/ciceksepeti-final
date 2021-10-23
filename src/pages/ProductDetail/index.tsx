import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Product } from '../../models/productModel';
import { RootState } from '../../redux';

const ProductDetail = () => {
  const history = useHistory();
  const products = useSelector<RootState, Product[]>((state) => state.product.products);
  const { productId } = useParams<{ productId: string }>();

  const product = products.find((product) => product.id === productId);

  useEffect(() => {
    if (!productId) history.push('/');
  }, []);

  return <div>{product?.description}</div>;
};

export default ProductDetail;
