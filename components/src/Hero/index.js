// @flow

import * as React from 'react';
import styled from 'styled-components';
import Button from '@kiwicom/orbit-components/lib/Button';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';

import heroBox from '../../static/heroBox.svg';
import defaultTheme from '../defaultTheme';

const StyledHero = styled.div`
  background: black;
  height: 100%;
  height: 100vh;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  position: relative;
  overflow: hidden;

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
  text-align: right;
`;

const StyledWrapper = styled.div`
  height: 100%;
`;
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const BottomTextWrapper = styled(HeadingWrapper)`
  align-items: flex-end;
  padding-bottom: 4.16vw;
`;

const StyledTextWithPattern = styled.span`
  display: block;
  position: relative;

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
`;

const Hero = ({ img, pattern }) => {
  return (
    <StyledHero img={img}>
      <Grid rows="calc(100vh - 230px) 230px">
        <StyledWrapper>
          <HeadingWrapper>
            <Heading inverted type="display">
              <StyledTextWithPattern pattern={pattern}>
                Travel
              </StyledTextWithPattern>
              Hackathon
            </Heading>
          </HeadingWrapper>
        </StyledWrapper>

        <BottomTextWrapper>
          <Stack flex direction="row">
            <Stack flex shrink direction="column">
              <Stack flex shrink>
                <Text type="white">
                  Join us in making travel better and win your share of 1.000
                  EUR for flight tickets
                </Text>
              </Stack>

              <Stack flex shrink>
                <Button>Register</Button>
                <Button type="white">Share</Button>
              </Stack>
            </Stack>
            <Stack flex shrink justify="end" align="center">
              <Heading inverted type="title2" element="h2">
                <StyledAlign>
                  <StyledDate>10 may</StyledDate> ljubljana
                </StyledAlign>
              </Heading>
            </Stack>
          </Stack>
        </BottomTextWrapper>
      </Grid>
    </StyledHero>
  );
};

export default Hero;
