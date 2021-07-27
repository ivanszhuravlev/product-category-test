import React from 'react';
import {Product} from '../../models/Product/types';
import {
  FlatList,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {ProductItem} from '../ui/ProductItem';
import {LoaderFullscreen} from './LoaderFullscreen';
import {MessageScreen} from './MessageScreen';
import {useQuery} from 'react-query';
import {ProductApi} from '../../models/Product/ProductApi';

interface Props {
  subCategory: string;
  onScroll: (offset: number) => void;
}

const apiProduct = new ProductApi();

export const ProductsList = ({subCategory, onScroll}: Props) => {
  const {isLoading, isError, data, error} = useQuery(
    ['products', subCategory],
    () => (subCategory ? apiProduct.list(subCategory) : apiProduct.listAll()),
  );

  const renderItem: ListRenderItem<Product> = ({item}) => {
    return <ProductItem product={item} />;
  };

  const keyExtractor = (item: Product) => `${item.id}`;

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    return onScroll(e.nativeEvent.contentOffset.y);
  };

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
      onScroll={handleScroll}
      bounces={false}
      scrollEventThrottle={16}
    />
  );
};
