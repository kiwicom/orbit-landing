// @flow

import React from 'react';
import styled from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';

import defaultTheme from '../defaultTheme';

function prizeBoxOrder(place) {
  if (place === 1) {
    return '1';
  }
  if (place === 2) {
    return '0';
  }
  return '2';
}

function prizeBoxAlignment(place) {
  if (place === 1) {
    return 'flex-start';
  }
  if (place === 2) {
    return 'center';
  }
  return 'flex-end';
}

const StyledMainContent = styled.div`
  padding: 0 5.2vw;
  box-sizing: border-box;
`;

const PrizesWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  margin-top: 52px;
`;

const PrizeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: between;
  align-items: center;
  align-self: ${({ place }) => prizeBoxAlignment(place)};
  flex: 1 0 auto;
  max-height: 360px;
  padding: calc(20px + (44 - 20) * ((100vw - 320px) / (1920 - 320)));
  margin-right: 80px;
  box-sizing: border-box;
  border-radius: 30px;
  box-shadow: ${({ theme, place }) =>
    place === 1
      ? `0px 4px 8px 0px rgba(37, 42, 49, 0.16),
    0px 8px 24px 0px rgba(37, 42, 49, 0.24), inset 0px 0px 0px 4px ${theme.orbit.paletteOrangeNormal}`
      : `0px 4px 8px 0px rgba(37, 42, 49, 0.16),
    0px 8px 24px 0px rgba(37, 42, 49, 0.24)`};
  order: ${({ place }) => prizeBoxOrder(place)};
  background: ${({ theme }) => theme.orbit.paletteWhite};

  &:last-child {
    margin: 0;
  }
`;

PrizeBox.defaultProps = {
  theme: defaultTheme,
};

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const Prize = styled.span`
  color: ${({ theme }) => theme.orbit.colorTextWarning};

  &::after {
    content: '*';
    position: relative;
    top: -12px;
    left: 4px;
    font-size: 24px;
  }
`;

Prize.defaultProps = {
  theme: defaultTheme,
};

const InfoTextWrapper = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  font-weight: 500;
`;

const InfoTextInnerWrapper = styled.span`
  &::before {
    content: '*';
    position: relative;
    left: -12px;
    top: 20px;
    color: ${({ theme }) => theme.orbit.paletteOrangeNormal};
  }
`;

InfoTextInnerWrapper.defaultProps = {
  theme: defaultTheme,
};

const Prizes = ({ title, description, prizes, infoText }) => {
  return (
    <StyledMainContent>
      <Stack direction="column">
        <Heading type="title1" element="h2">
          {title}
        </Heading>
        <Text size="large">{description}</Text>
      </Stack>
      <PrizesWrapper>
        <Stack direction="row" spacing="none" basis="70%" grow={false}>
          {prizes.map(({ place, prize }, index) => {
            return (
              <PrizeBox key={index} place={place}>
                <HeadingWrapper>
                  <Heading type="title3" element="h3">
                    {place}st
                  </Heading>
                  <Text type="secondary">place</Text>
                </HeadingWrapper>
                <Heading type="title3" element="h4">
                  <Prize>{prize}</Prize>
                </Heading>
              </PrizeBox>
            );
          })}
        </Stack>
      </PrizesWrapper>
      <InfoTextWrapper>
        <InfoTextInnerWrapper>
          <Text size="large">{infoText}</Text>
        </InfoTextInnerWrapper>
      </InfoTextWrapper>
    </StyledMainContent>
  );
};

export default Prizes;
