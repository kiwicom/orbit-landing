// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import heroBox from '../../static/pattern05.svg';
import defaultTheme from '../defaultTheme';

const StyledHero = styled.div`
  background: black;
  height: 100%;
  height: 70vh;
  min-height: 500px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  position: relative;
  overflow: hidden;
  max-height: 1000px;

  ${({ condensed }) =>
    condensed &&
    css`
      height: 50vw;
    `}

  ${media.tablet(css`
    height: 100vh;
    max-height: 100vh;

    ${({ condensed }) =>
      condensed &&
      css`
        height: 50vw;
      `}

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
  padding-left: ${({ theme }) => theme.landing.bodyPadding};
  padding-right: ${({ theme }) => theme.landing.bodyPadding};
  box-sizing: border-box;
`;

HeadingWrapper.defaultProps = {
  theme: defaultTheme,
};

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

  ${media.desktop(css`
    padding: 80px 0 0 0;
  `)};
`;

const StyledSpan = styled.span`
  word-break: break-all;

  ${({ condensed }) =>
    condensed &&
    css`
      word-break: break-word;
      width: 65%;
      display: block;
    `}
`;

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Hero = ({
  backgroundImage,
  pattern,
  navBar,
  date,
  location,
  description,
  title,
  actions,
  condensed = false,
}) => {
  // Slices the string from title prop to half and joins it back so patter can be positioned within component using just title prop.
  const splitTitle = title.split(' ');
  const halfway = Math.floor(splitTitle.length / 2);
  const left = splitTitle.slice(0, halfway).join(' ');
  const right = splitTitle.slice(halfway, splitTitle.length).join(' ');

  return (
    <StyledHero img={backgroundImage} condensed={condensed}>
      <StyledStack>
        <StyledWrapper>
          {navBar && <StyledNavBarWrapper>{navBar}</StyledNavBarWrapper>}
          <HeadingWrapper>
            <Heading inverted type="title1">
              <StyledSpan condensed={condensed}>
                {condensed ? (
                  <>{title}</>
                ) : (
                  <>
                    <StyledTextWithPattern pattern={pattern}>
                      {left}
                    </StyledTextWithPattern>
                    {right}
                  </>
                )}
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
                  {description}
                </Text>
              </Stack>

              <Stack flex shrink>
                {actions}
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
                  <StyledDate>{date}</StyledDate> {location}
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
