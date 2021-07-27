import React from 'react';
import {Product} from '../../models/Product/types';
import {FlatList, ListRenderItem} from 'react-native';
import {ProductItem} from '../ui/ProductItem';
import {LoaderFullscreen} from './LoaderFullscreen';
import {MessageScreen} from './MessageScreen';
import {useQuery} from 'react-query';
import {ProductApi} from '../../models/Product/ProductApi';

interface Props {
  subCategory: string;
}

const apiProduct = new ProductApi();

export const ProductsList = ({subCategory}: Props) => {
  const {isLoading, isError, data, error} = useQuery(
    ['products', subCategory],
    () => (subCategory ? apiProduct.list(subCategory) : apiProduct.listAll()),
  );

  const renderItem: ListRenderItem<Product> = ({item}) => {
    return <ProductItem product={item} />;
  };

  const keyExtractor = (item: Product) => `${item.id}`;

  if (isLoading) {
    return <LoaderFullscreen />;
  }

  if (isError) {
    return <MessageScreen message={`${error}`} />;
  }

  if (!data) {
    return <MessageScreen message={'No products'} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
    />
  );
};
