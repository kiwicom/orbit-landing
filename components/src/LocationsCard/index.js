// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import defaultTheme from '../defaultTheme';

const StyledLocations = styled.div`
  position: relative;
`;

StyledLocations.defaultProps = {
  theme: defaultTheme,
};

const StyledTile = styled.a`
  width: ${({ condensed }) => (condensed ? 'auto' : '100%')};
  height: 18vw;
  min-width:${({ condensed }) => (condensed ? 'none' : '180px')} ;
  max-height: 360px;
  min-height: 200px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  padding: calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));
  box-sizing: content-box;
  cursor: pointer;
  text-decoration: none;



  ${media.desktop(
    css`
      display: block;
    `,
  )}

  ${({ condensed }) =>
    condensed &&
    css`
      min-height: 100px;
      height: 140px;
    `}

  ${({ inverted }) =>
    inverted &&
    css`
      transition: 150ms ease-out;
      background-color: #fff;
      box-shadow: 0px 0px 2px 0px rgba(37, 42, 49, 0.16),
        0px 1px 4px 0px rgba(37, 42, 49, 0.12);

      &:hover {
        box-shadow: 0px 1px 4px 0px rgba(37, 42, 49, 0.16),
          0px 4px 8px 0px rgba(37, 42, 49, 0.12);
      }
    `}

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color:${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#000'};
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: ${({ backgroundColor }) =>
      !backgroundColor ? 'grayscale(100%) brightness(50%)' : 'none'};
  }

  ${({ condensed }) =>
    !condensed &&
    css`
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.orbit.paletteProductNormal};
        z-index: 0;
        opacity: 0;
        transition: 150ms;
      }

      &:hover:before {
        opacity: 0.3;
      }
    `}

`;

StyledTile.defaultProps = {
  theme: defaultTheme,
};

const StyledLogo = styled.div`
  background-image: ${({ logo }) => `url(${logo})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  width: 80px;
  height: 40px;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledTileContent = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

StyledTile.defaultProps = {
  theme: defaultTheme,
};

const TileHeading = styled.div`
  font-size: ${({ theme }) => theme.orbit.fontSizeHeadingTitle3};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: 800;
  color: #fff;

  ${({ inverted }) =>
    inverted &&
    css`
      color: #252a31;
    `}
`;

TileHeading.defaultProps = {
  theme: defaultTheme,
};

const LocationCard = ({
  condensed,
  eventName,
  location,
  logo,
  backgroundImage,
  hide,
  href,
  inverted,
  backgroundColor,
  external,
}) => {
  return (
    <StyledTile
      hide={hide}
      backgroundImage={backgroundImage}
      condensed={condensed}
      inverted={inverted}
      backgroundColor={backgroundColor}
      href={href}
      target={href && external ? '_blank' : undefined}
      rel={href && external ? 'noopener noreferrer' : undefined}
    >
      <StyledTileContent>
        <StyledLogo logo={logo} />
        <Stack spacing="none">
          <Text type={inverted ? 'primary' : 'white'} size="large">
            {eventName}
          </Text>
          <TileHeading inverted={inverted}>{location}</TileHeading>
        </Stack>
      </StyledTileContent>
    </StyledTile>
  );
};

export default LocationCard;
