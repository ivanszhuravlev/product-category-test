import React from 'react';
import {TextBase} from '../ui/Text';
import styled from 'styled-components/native';

interface Props {
  message: string;
}

export const MessageScreen = ({message}: Props) => {
  return (
    <Container>
      <TextBaseStyled numberOfLines={2}>{message}</TextBaseStyled>
    </Container>
  );
};

const Container = styled.View`
  padding-horizontal: 24px;
`;

const TextBaseStyled = styled(TextBase)`
  text-align: center;
`;
