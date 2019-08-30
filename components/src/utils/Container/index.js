// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import Stack from '@kiwicom/orbit-components/lib/Stack';

import defaultTheme from '../../defaultTheme';

const StyledContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  ${({ noSpacing }) =>
    !noSpacing &&
    css`
      padding: ${({ theme }) => theme.landing.bodyPadding};
    `};
  ${({ hasSlicedCorner }) =>
    hasSlicedCorner &&
    css`
      padding-top: calc(1rem + 4vw);
    `};

  ${({ suppressed }) =>
    suppressed &&
    css`
      background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
    `};
`;

StyledContainer.defaultProps = {
  theme: defaultTheme,
};

const Container = ({
  children,
  noSpacing,
  hasSlicedCorner,
  suppressed,
  id,
  ...props
}) => {
  console.log(suppressed);
  return (
    <Stack justify="center">
      <StyledContainer
        suppressed={suppressed}
        id={id}
        hasSlicedCorner={hasSlicedCorner}
        noSpacing={noSpacing}
        {...props}
      >
        {children}
      </StyledContainer>
    </Stack>
  );
};

export default Container;
