// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import Pattern from '../utils/Pattern';
import pattern01 from '../../static/pattern01.svg';
import pattern02 from '../../static/pattern05.svg';
import defaultTheme from '../defaultTheme';

const StyledImage = styled.div`
  width: 100%;
  height: 150px;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${media.tablet(css`
    height: 32vh;
  `)};
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const StyledImageWall = styled.div`
  height: 100vh;
  min-height: 900px;
  width: 100vw;
  padding-top: 5vw;
  padding-bottom: 5vw;
  position: relative;
  overflow: hidden;

  ${media.tablet(css`
    min-height: auto;
  `)};
`;

StyledImageWall.defaultProps = {
  theme: defaultTheme,
};

const StyledGrid = styled.div`
  background-color: #121212;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0.8vw;
  grid-row-gap: 0.8vw;

  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 140vw;
    height: 200px;
    background-color: #121212;
    z-index: -1;
  }

  &:before {
    top: 0;
    left: 0;
    transform: translate(-10%, 2vh) rotate(1.2deg);
  }

  &:after {
    left: 0;
    bottom: 0;
    transform: translate(-10%, -2vh) rotate(1.2deg);
  }

  & > :nth-child(1) {
    grid-row-start: 1;
    grid-row-end: span 2;
    height: 100%;
  }

  & > :nth-child(7) {
    grid-row-start: 4;
    grid-row-end: span 2;
    grid-column-start: 2;
    grid-column-end: 3;
    height: 100%;
  }

  & > :nth-child(9) {
    grid-column-start: 1;
    grid-column-end: span 2;
    height: 140px;
  }

  ${media.tablet(css`
    grid-template-columns: 2fr 1fr 1fr 2fr;

    & > :nth-child(7) {
      grid-row-start: 2;
      grid-row-end: span 2;
      grid-column-start: 4;
      grid-column-end: 5;
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

const ImageWallItem = ({ img }) => {
  return <StyledImage img={img} />;
};

const ImageWall = ({ images }) => {
  return (
    <StyledImageWall>
      <StyledGrid>
        {images.map((item, index) => {
          return <ImageWallItem key={index} img={item} />;
        })}
      </StyledGrid>
      <Pattern
        top="0px"
        left="0px"
        width="6vh"
        height="6vh"
        pattern={pattern02}
      />
      <Pattern
        bottom="0px"
        right="0px"
        width="13vh"
        height="11vh"
        pattern={pattern01}
      />
    </StyledImageWall>
  );
};

export default ImageWall;
