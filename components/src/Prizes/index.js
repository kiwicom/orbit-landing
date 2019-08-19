// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';
import Hide from '@kiwicom/orbit-components/lib/Hide';

import Container from '../utils/Container';
import StyledPattern from '../utils/Pattern';
import PatternTop from '../../static/pattern06.svg';
import PatternTop2 from '../../static/pattern08.svg';
import PatternBottom from '../../static/pattern07.svg';
import defaultTheme from '../defaultTheme';
import Pattern from '../utils/Pattern';
import patternImage from '../../static/pattern01.svg';

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

function prizeBoxStyle(theme, place) {
  if (place === 1) {
    return `0px 4px 29px 11px rgba(37, 42, 49, 0.14), inset 0px 0px 0px 4px ${theme.orbit.paletteOrangeNormal}`;
  }
  return `0px 4px 29px 11px rgba(37, 42, 49, 0.14)`;
}

const PrizesWrapper = styled.div`
  width: 100%;
  min-height: 15.79vw;
  display: flex;
  justify-content: center;
  margin-top: 52px;
`;

const PrizeBoxWrapper = styled.div`
  flex: 1 1 auto;
  margin: 0 1.26vw;
  position: relative;
  width: 100%;

  ${media.largeMobile(css`
    width: auto;
    max-width: 300px;
    align-self: ${({ place }) => prizeBoxAlignment(place)};
    order: ${({ place }) => prizeBoxOrder(place)};
  `)};

  ${media.tablet(css`
    margin: 0 3.15vw;
  `)};
`;

PrizeBoxWrapper.defaultProps = {
  theme: defaultTheme,
};

const PrizeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 360px;
  padding: calc(20px + (44 - 20) * ((100vw - 320px) / (1920 - 320)));
  box-sizing: border-box;
  box-shadow: ${({ theme, place }) => prizeBoxStyle(theme, place)};
  border-radius: 12px;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  position: relative;
  z-index: 2;
`;

PrizeBox.defaultProps = {
  theme: defaultTheme,
};

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 1.26vw; */
  height: 100%;
  padding: 8px;
  box-sizing: content-box;
`;

const Prize = styled.span`
  /* color: ${({ theme }) => theme.orbit.colorTextWarning}; */
  /* text-align: center;
  line-height: 1.4; */

  /* &::after {
    content: '*';
    position: relative;
    top: -12px;
    left: 4px;
    font-size: 24px;
  } */
`;

Prize.defaultProps = {
  theme: defaultTheme,
};

const InfoTextWrapper = styled.span`
  display: flex;
  justify-content: center;
  margin: 3.16vw;
  font-weight: 500;

  ${media.largeMobile(css`
    margin-top: 1.68vw;
  `)};
`;

InfoTextWrapper.defaultProps = {
  theme: defaultTheme,
};

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

const Prizes = ({ title, description, prizes, infoText, id }) => {
  return (
    <Container id={id}>
      <Hide on={['smallMobile', 'mediumMobile', 'largeMobile']}>
        <Pattern
          pattern={patternImage}
          width="7vw"
          height="6vw"
          top="4px"
          left="10px"
        />
      </Hide>
      <Stack direction="column" spaceAfter="largest">
        <Heading type="title1" element="h2">
          {title}
        </Heading>
        <Text size="large">{description}</Text>
      </Stack>
      <PrizesWrapper>
        <Stack
          align="center"
          direction="column"
          spacing="loose"
          largeMobile={{
            direction: 'row',
            justify: 'between',
            align: 'start',
          }}
          desktop={{ basis: '80%', spacing: 'none' }}
          grow={false}
        >
          {prizes.map(({ place, prize, title }, index) => {
            return (
              <PrizeBoxWrapper key={index} place={place}>
                <PrizeBox place={place}>
                  <StyledPattern
                    width="6.53vw"
                    height="5.26vw"
                    minWidth="69px"
                    minHeight="55px"
                    top="-1.58vw"
                    left="-1.05vw"
                    pattern={place === 1 ? PatternTop2 : PatternTop}
                  />
                  <HeadingWrapper>
                    <Heading type="title4" element="h3" spaceAfter="small">
                      {title}
                    </Heading>
                    <Text type="secondary" align="center">
                      {prize}
                    </Text>
                  </HeadingWrapper>
                </PrizeBox>
                <StyledPattern
                  width="7.05vw"
                  height="10.42vw"
                  bottom="-2.37vw"
                  right="-2.47vw"
                  zindex="1"
                  pattern={PatternBottom}
                />
              </PrizeBoxWrapper>
            );
          })}
        </Stack>
      </PrizesWrapper>
      <InfoTextWrapper>
        <InfoTextInnerWrapper>
          <Text size="large">{infoText}</Text>
        </InfoTextInnerWrapper>
      </InfoTextWrapper>
    </Container>
  );
};

export default Prizes;
