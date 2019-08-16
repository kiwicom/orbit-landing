// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Hide from '@kiwicom/orbit-components/lib/Hide';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import RouteNoStops from '../../static/arrow-right.svg';
import LocationCard from '../LocationsCard';
import Pattern from '../utils/Pattern';
import defaultTheme from '../defaultTheme';

const StyledLocations = styled.div`
  position: relative;
`;

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

const Locations = ({
  id,
  title,
  backgroundImage,
  pattern,
  locations,
  locationsHeading,
}) => {
  const featuredLocations = locations.filter(val => {
    return !!val.featured;
  });

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
              {locations.length > 4 ? (
                <>
                  {featuredLocations.slice(0, 3).map((el, i) => {
                    return (
                      <LocationCard
                        key={i}
                        eventName={el.eventName}
                        location={el.location}
                        logo={el.logo}
                        onClick={el.onClick}
                        backgroundImage={el.backgroundImage}
                      />
                    );
                  })}
                  <LocationCard
                    logo={RouteNoStops}
                    eventName="See another"
                    location={`See all events`}
                    onClick={() => {
                      window.location.href = '/locations/';
                    }}
                    backgroundColor="#00A991"
                  />
                </>
              ) : (
                featuredLocations.map((el, i) => {
                  return (
                    <LocationCard
                      key={i}
                      eventName={el.eventName}
                      location={el.location}
                      logo={el.logo}
                      onClick={el.onClick}
                      backgroundImage={el.backgroundImage}
                    />
                  );
                })
              )}
            </LocationsWrapper>
          </Stack>
        )}
      </StyledTypoSection>
    </StyledLocations>
  );
};

export default Locations;
