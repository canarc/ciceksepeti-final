import React, { FC } from 'react';
import { CustomGrid } from './styles';
import Card from '../Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { Product } from '../../../models/productModel';
import { useHistory } from 'react-router';

type ProductsGridProps = {
  selectedCategoryId: string;
};

const ProductsGrid: FC<ProductsGridProps> = ({ selectedCategoryId }) => {
  const history = useHistory();
  const products = useSelector<RootState, Product[]>((state) => state.product.products);

  return (
    <CustomGrid>
      {products
        .filter((product) => product.category.id === selectedCategoryId)
        .map((product) => (
          <Card
            onClick={() => {
              history.push(`productDetail/${product.id}`);
            }}
            key={product.id}
            product={product}
          />
        ))}
    </CustomGrid>
  );
};

export default ProductsGrid;
