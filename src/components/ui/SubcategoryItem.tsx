import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';

interface Props {
  name: string;
  id: string;
  onPress: (id: string) => void;
  isActive: boolean;
}

export const SubcategoryItem = ({onPress, name, id, isActive}: Props) => {
  const handlePress = () => onPress(id);

  return (
    <Container isActive={isActive}>
      <Touchable onPress={handlePress}>
        <TextStyled isActive={isActive}>{name}</TextStyled>
      </Touchable>
    </Container>
  );
};

interface WithIsActive {
  isActive: boolean;
}

const Container = styled.View<WithIsActive>`
  background-color: ${({isActive}) =>
    isActive ? COLORS.mainAccent : COLORS.mainSecondary};
  border-radius: 10px;
`;

const TextStyled = styled.Text<WithIsActive>`
  color: ${({isActive}) => (isActive ? COLORS.white : COLORS.text)};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const Touchable = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding-horizontal: 8px;
`;
