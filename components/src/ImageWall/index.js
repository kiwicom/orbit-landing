// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import defaultTheme from '../defaultTheme';

const StyledImage = styled.div`
  background-color: grey;
  width: 100%;
  height: 150px;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};

  ${media.tablet(css`
    height: 33vh;
  `)};
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const StyledImageWall = styled.div`
  height: 100vh;
  width: 100vw;
`;

const StyledGrid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;

  ${media.tablet(css`
    grid-template-columns: 2fr 1fr 1fr 2fr;

    & > :nth-child(1) {
      grid-row-start: 1;
      grid-row-end: span 2;
      height: 100%;
    }
    & > :nth-child(7) {
      grid-row-start: 2;
      grid-row-end: span 2;
      grid-column-start: 4;
      grid-column-end: 5;
      height: 100%;
    }
    & > :nth-child(9) {
      grid-column-start: 2;
      grid-column-end: span 2;
      height: 100%;
    }
  `)};
`;

StyledGrid.defaultProps = {
  theme: defaultTheme,
};

const ImageWallItem = () => {
  return <StyledImage />;
};

const ImageWall = () => {
  return (
    <StyledImageWall>
      <StyledGrid>
        <ImageWallItem />
        <ImageWallItem />
        <ImageWallItem />
        <ImageWallItem />
        <ImageWallItem />
        <ImageWallItem />
        <ImageWallItem />
        <ImageWallItem />
        <ImageWallItem />
      </StyledGrid>
    </StyledImageWall>
  );
};

export default ImageWall;
