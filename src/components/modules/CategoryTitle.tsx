import React from 'react';
import styled from 'styled-components/native';
import {H1} from '../ui/Text';
import {COLORS} from '../../constants/colors';
import {Animated, ViewProps} from 'react-native';

interface Props extends Animated.AnimatedProps<ViewProps> {
  image: string;
  title: string;
}

export const CategoryTitle = ({image, title, style}: Props) => {
  const source = {uri: image};
  return (
    <Container style={style}>
      <ImageStyled source={source} resizeMode={'cover'} />
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled(Animated.View)`
  border-radius: 12px;
  background-color: ${COLORS.black};
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;

  position: absolute;
  top: 0;
  left: 0;

  opacity: 0.6;
`;

const Title = styled(H1)`
  color: ${COLORS.white};
  text-align: center;
`;
