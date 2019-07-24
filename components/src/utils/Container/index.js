// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import Stack from '@kiwicom/orbit-components/lib/Stack';

const StyledContainer = styled.div`
  max-width: 1920px;
  width: 100%;

  ${({ noSpacing }) =>
    !noSpacing &&
    css`
      padding-top: calc(1rem + 7.02vw);
      padding-bottom: calc(1rem + 7.02vw);
      padding-left: 5.2vw;
      padding-right: 5.2vw;
    `};
`;

const Container = ({ children, noSpacing, ...props }) => {
  return (
    <Stack justify="center">
      <StyledContainer noSpacing={noSpacing} {...props}>
        {children}
      </StyledContainer>
    </Stack>
  );
};

export default Container;
