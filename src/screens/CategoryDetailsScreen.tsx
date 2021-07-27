import React, {useState} from 'react';
import {useQuery} from 'react-query';
import {CategoryApi} from '../models/Category/CategoryApi';
import {LoaderFullscreen} from '../components/modules/LoaderFullscreen';
import {MessageScreen} from '../components/modules/MessageScreen';
import {COLORS} from '../constants/colors';
import {CategoryTitle} from '../components/modules/CategoryTitle';
import {SubcategoriesCarousel} from '../components/modules/SubcategoriesCarousel';
import {ProductsList} from '../components/modules/ProductsList';
import {defaultSubCategory} from '../constants/subcategories';
import styled from 'styled-components/native';
import {Category} from '../models/Category/types';

interface Props {
  id: string;
}

const apiCategory = new CategoryApi();

export const CategoryDetailsScreen = ({id}: Props) => {
  const {isLoading, isError, data, error} = useQuery(['category', id], () =>
    apiCategory.get(id),
  );

  if (isLoading) {
    return <LoaderFullscreen />;
  }

  if (isError || !data) {
    return <MessageScreen message={`${error}`} />;
  }

  return <CategoryDetails data={data} />;
};

const CategoryDetails = ({data}: {data: Category}) => {
  const [activeSubCat, setActiveSubCat] = useState(defaultSubCategory.id);

  const onChooseSubCategory = (_id: string) => {
    setActiveSubCat(_id);
  };

  return (
    <Container>
      <HeaderContainer>
        <CategoryTitle image={data.image} title={data.name} />
        <SubcategoriesCarousel
          categories={data.subCategories}
          onChoose={onChooseSubCategory}
          activeItem={activeSubCat}
        />
      </HeaderContainer>
      <ProductsList subCategory={activeSubCat} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
  padding: 16px;
`;
//justify-content: flex-start;

const HeaderContainer = styled.View`
  margin-bottom: 12px;
`;
