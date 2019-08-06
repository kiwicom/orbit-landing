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
  padding: 50px ${({ theme }) => theme.landing.bodyPadding};

  ${media.tablet(
    css`
      height: 20vw;
    `,
  )}
`;

StyledStack.defaultProps = {
  theme: defaultTheme,
};

const Wrapper = styled.div`
  padding-left: ${({ theme }) => theme.landing.bodyPadding};
  padding-right: ${({ theme }) => theme.landing.bodyPadding};
`;
Wrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledHeaderWrapper = styled.div`
  flex-basis: 100%;
  ${media.desktop(
    css`
      flex-basis: 72%;
    `,
  )}
`;

StyledHeaderWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTypoSection = styled.div`
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
    height: 100vw;
    max-height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    ${media.mediumMobile(
      css`
        height: 70vw;
        max-height: 70%;
      `,
    )}
  }
`;

StyledTypoSection.defaultProps = {
  theme: defaultTheme,
};

const StyledTile = styled.div`
  width: 100%;
  height: 18vw;
  /* max-width: 260px; */
  min-width: 180px;
  max-height: 360px;
  min-height: 200px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  padding: calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));
  box-sizing: content-box;
  cursor: pointer;

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
  font-size: ${({ theme }) => theme.orbit.fontSizeHeadingTitle3};
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
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;

  & > * {
    margin-left: 20px;
  }

  & > :nth-child(1) {
    margin-left: 0;
  }

  ${media.desktop(
    css`
      overflow-x: hidden;
      padding-left: ${({ theme }) => theme.landing.bodyPadding};
      padding-right: ${({ theme }) => theme.landing.bodyPadding};
    `,
  )}
`;

LocationsWrapper.defaultProps = {
  theme: defaultTheme,
};

const LocationTile = ({
  eventName,
  location,
  logo,
  backgroundImage,
  hide,
  onClick,
}) => {
  return (
    <StyledTile hide={hide} backgroundImage={backgroundImage} onClick={onClick}>
      <StyledTileContent>
        <StyledLogo logo={logo} />
        <Stack spacing="none">
          <Text type="white" size="large">
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
  id,
  title,
  backgroundImage,
  pattern,
  locations,
  locationsHeading,
}) => {
  return (
    <StyledLocations id={id}>
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
            <Wrapper>
              <Text size="large" type="white">
                {locationsHeading}
              </Text>
            </Wrapper>
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
