// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Button from '@kiwicom/orbit-components/lib/Button';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import heroBox from '../../static/pattern05.svg';
import defaultTheme from '../defaultTheme';

const StyledHero = styled.div`
  background: black;
  height: 100%;
  height: 100vh;
  min-height: 790px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  position: relative;
  overflow: hidden;

  ${media.tablet(css`
    &:after {
      content: '';
      width: 69px;
      height: 57px;
      display: block;
      background-image: url(${heroBox});
      background-size: cover;
      position: absolute;
      bottom: -19px;
      right: 20px;
    }
  `)};
`;

StyledHero.defaultProps = {
  theme: defaultTheme,
};

const HeadingWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5.2vw;
  padding-right: 5.2vw;
  box-sizing: border-box;
`;

const StyledDate = styled.span`
  color: ${({ theme }) => theme.orbit.colorTextWarning};
  display: block;
`;
StyledDate.defaultProps = {
  theme: defaultTheme,
};

const StyledAlign = styled.span`
  ${media.mediumMobile(
    css`
      text-align: right;
    `,
  )}
`;
StyledAlign.defaultProps = {
  theme: defaultTheme,
};

const StyledWrapper = styled.div`
  /* height: 100%; */
  flex-basis: 70%;
`;

const BottomTextWrapper = styled(HeadingWrapper)`
  align-items: flex-end;
  padding-bottom: 4.16vw;
  flex-basis: 30%;
`;

const StyledTextWithPattern = styled.span`
  display: block;
  position: relative;

  ${media.tablet(css`
    &:after {
      content: '';
      min-width: 190px;
      min-height: 130px;
      width: 20vw;
      height: 14.7vw;
      display: block;
      background-image: ${({ pattern }) => `url(${pattern})`};
      background-size: cover;
      position: absolute;
      top: -6vw;
      right: -7vw;
    }
  `)};
`;

StyledTextWithPattern.defaultProps = {
  theme: defaultTheme,
};

const StyledNavBarWrapper = styled.div`
  padding: 4.2vw 0 0 0;
`;

const StyledSpan = styled.span`
  word-break: break-all;
`;

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Hero = ({ img, pattern, navBar }) => {
  return (
    <StyledHero img={img}>
      <StyledStack>
        <StyledWrapper>
          {navBar && <StyledNavBarWrapper>{navBar}</StyledNavBarWrapper>}
          <HeadingWrapper>
            <Heading inverted type="display">
              <StyledSpan>
                <StyledTextWithPattern pattern={pattern}>
                  Travel
                </StyledTextWithPattern>
                Hackathon
              </StyledSpan>
            </Heading>
          </HeadingWrapper>
        </StyledWrapper>

        <BottomTextWrapper>
          <Stack
            flex
            direction="column-reverse"
            mediumMobile={{ direction: 'row' }}
          >
            <Stack flex shrink direction="column">
              <Stack flex shrink>
                <Text type="white" size="large">
                  Join us in making travel better and win your share of 1.000
                  EUR for flight tickets
                </Text>
              </Stack>

              <Stack flex shrink>
                <Button>Register</Button>
                <Button type="white" bordered>
                  Share
                </Button>
              </Stack>
            </Stack>
            <Stack
              flex
              shrink
              justify="start"
              align="center"
              mediumMobile={{ justify: 'end', align: 'center' }}
            >
              <Heading inverted type="title2" element="h2">
                <StyledAlign>
                  <StyledDate>10 may</StyledDate> ljubljana
                </StyledAlign>
              </Heading>
            </Stack>
          </Stack>
        </BottomTextWrapper>
      </StyledStack>
    </StyledHero>
  );
};

export default Hero;
