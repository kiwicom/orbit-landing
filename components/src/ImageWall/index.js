// @flow

import * as React from 'react';
import styled from 'styled-components';

// import defaultTheme from '../defaultTheme';

const StyledImage = styled.div`
  background-color: red;
  width: 100%;
  height: 33vh;
`;

const StyledImageWall = styled.div`
  height: 100vh;
  width: 100vw;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;

  &:nth-child(1) {
    grid-row-span: 2;
  }
`;

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
      </StyledGrid>
    </StyledImageWall>
  );
};

export default ImageWall;
