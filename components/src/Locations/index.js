// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Hide from '@kiwicom/orbit-components/lib/Hide';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import Pattern from '../utils/Pattern';
import defaultTheme from '../defaultTheme';

const StyledLocations = styled.div`
  position: relative;
`;

StyledLocations.defaultProps = {
  theme: defaultTheme,
};

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30vw;
  max-height: 50%;
  flex-wrap: wrap;
  justify-content: start;
  padding: 50px 0;
`;

const StyledHeaderWrapper = styled.div`
  flex-basis: 100%;
  ${media.desktop(
    css`
      flex-basis: 75%;
    `,
  )}
`;

StyledHeaderWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTypoSection = styled.div`
  padding-left: 5.2vw;
  padding-right: 5.2vw;

  /* height: 100vw;
  max-height: 100vh;
  min-height: 400px; */
  height: 100%;
  max-height: 100%;
  min-height: 400px;

  &:before {
    content: '';
    z-index: -1;
    background-color: #000;
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    width: 100%;
    height: 70vw;
    max-height: 70%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const StyledTile = styled.div`
  width: 100%;
  height: 22vw;
  max-width: 260px;
  max-height: 360px;
  min-height: 200px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  padding: calc(20px + (50 - 20) * ((100vw - 320px) / (1920 - 320)));
  box-sizing: content-box;


  display: ${({ hide }) => (hide ? 'none' : 'block')};
  ${media.desktop(
    css`
      display: block;
    `,
  )}

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: grayscale(100%) brightness(50%);
  }

  /* &:before {
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
  } */
`;

StyledTile.defaultProps = {
  theme: defaultTheme,
};

const StyledLogo = styled.div`
  background-image: ${({ logo }) => `url(${logo})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
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
  font-size: calc(25px + (50 - 25) * ((100vw - 320px) / (1920 - 320)));
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: 800;
  color: #fff;
`;

TileHeading.defaultProps = {
  theme: defaultTheme,
};

const LocationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  display: none;

  & > * {
    display: none;
    margin-left: 20px;
  }

  & > :nth-child(1) {
    margin-left: 0;
  }

  ${media.mediumMobile(
    css`
      display: flex;
      & > :nth-child(1),
      & > :nth-child(2) {
        display: block;
      }
    `,
  )}

  ${media.tablet(
    css`
      & > :nth-child(3) {
        display: block;
      }
    `,
  )}

  ${media.desktop(
    css`
      & > * {
        display: block;
      }
    `,
  )}
`;

LocationsWrapper.defaultProps = {
  theme: defaultTheme,
};

const LocationTile = ({ eventName, location, logo, backgroundImage, hide }) => {
  return (
    <StyledTile hide={hide} backgroundImage={backgroundImage}>
      <StyledTileContent>
        <StyledLogo logo={logo} />
        <Stack spacing="natural">
          <Text type="white" size="small">
            {eventName}
          </Text>
          <TileHeading type="white" size="large" inverted weight="bold">
            {location}
          </TileHeading>
        </Stack>
      </StyledTileContent>
    </StyledTile>
  );
};

const Locations = ({
  title,
  backgroundImage,
  pattern,
  locations,
  locationsHeading,
}) => {
  return (
    <StyledLocations>
      <StyledTypoSection img={backgroundImage}>
        <StyledStack>
          <StyledHeaderWrapper>
            <Heading inverted type="title1" element="h2">
              {title}
            </Heading>
          </StyledHeaderWrapper>
          <Hide on={['smallMobile', 'mediumMobile', 'largeMobile', 'tablet']}>
            <Pattern pattern={pattern} width="22vw" height="15vw" relative />
          </Hide>
        </StyledStack>
        {locations && (
          <Stack>
            <Text type="white">{locationsHeading}</Text>
            <LocationsWrapper>
              {locations.map((el, i) => {
                return (
                  <LocationTile
                    key={i}
                    eventName={el.eventName}
                    location={el.location}
                    logo={el.logo}
                    onClick={el.onClick}
                    backgroundImage={el.backgroundImage}
                  />
                );
              })}
            </LocationsWrapper>
          </Stack>
        )}
      </StyledTypoSection>
    </StyledLocations>
  );
};

export default Locations;
