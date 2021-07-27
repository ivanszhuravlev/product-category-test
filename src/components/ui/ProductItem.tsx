import React from 'react';
import styled from 'styled-components/native';
import {Product} from '../../models/Product/types';
import {H4, H5, H6} from './Text';
import {COLORS} from '../../constants/colors';

interface Props {
  product: Product;
}

export const ProductItem = ({product}: Props) => {
  const source = {uri: product.image};

  return (
    <Container>
      <Picture source={source} resizeMode={'cover'} />
      <Brand>{product.brand.name}</Brand>
      <Name numberOfLines={2}>{product.name}</Name>
      <Price>{product.Price} €</Price>
    </Container>
  );
};

const Container = styled.View`
  width: 50%;
  padding: 12px;
`;

const Picture = styled.Image`
  aspect-ratio: 1;
  border-radius: 10px;

  margin-bottom: 8px;
  border-width: 1px;

  /* Added border-color because the background of images is white */
  border-color: ${COLORS.textLight}44;
`;

const Brand = styled(H6)`
  margin-bottom: 8px;
`;

const Name = styled(H5)`
  margin-bottom: 6px;
`;

const Price = styled(H4)``;
