import React, {useState} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {SubCategory} from '../../models/Category/types';
import {SubcategoryItem} from '../ui/SubcategoryItem';
import {defaultSubCategory} from '../../constants/subcategories';
import styled from 'styled-components/native';

interface Props {
  categories: SubCategory[];
  onChoose: (id: string) => void;
  activeItem: string;
}

export const SubcategoriesCarousel = ({
  categories,
  onChoose,
  activeItem,
}: Props) => {
  const data = [defaultSubCategory, ...categories];

  const renderItem: ListRenderItem<SubCategory> = ({item}) => (
    <SubcategoryItem
      name={item.name}
      id={item.id}
      onPress={onChoose}
      isActive={activeItem === item.id}
    />
  );

  const keyExtractor = (item: SubCategory) => `subcat-${item.id}`;

  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={style.contentContainer}
      ItemSeparatorComponent={Separator}
    />
  );
};

const Separator = styled.View`
  width: 8px;
`;

const style = StyleSheet.create({
  contentContainer: {
    height: 42,
    marginTop: 28,
  },
});
