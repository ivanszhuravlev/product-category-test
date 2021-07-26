import React from 'react';
import styled from 'styled-components/native';
import {useQuery} from 'react-query';
import {CategoryApi} from '../models/Category/CategoryApi';
import {LoaderFullscreen} from '../components/modules/LoaderFullscreen';
import {MessageScreen} from '../components/modules/MessageScreen';
import {Text} from 'react-native';
import {COLORS} from '../constants/colors';

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

  return (
    <Container>
      <Text>{data.name}</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
`;
