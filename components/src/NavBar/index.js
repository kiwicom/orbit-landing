// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';
import defaultTheme from '@kiwicom/orbit-components/lib/defaultTheme';

import logo from '../../static/kiwi-white.svg';

const StyledMainContent = styled.div`
  padding-left: 5.2vw;
  padding-right: 7.8vw;
  box-sizing: border-box;
  text-align: center;
`;

const StyledText = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: calc(16px + (28 - 16) * ((100vw - 320px) / (1920 - 320)));
  color: #fff;
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

const StyledLink = styled.a`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: calc(16px + (28 - 16) * ((100vw - 320px) / (1920 - 320)));
  color: #fff;
`;

StyledLink.defaultProps = {
  theme: defaultTheme,
};

const Link = ({ children }) => {
  return <StyledLink>{children}</StyledLink>;
};

const Logo = () => {
  return <img width="162px" src={logo} alt="Kiwi.com logo" />;
};

const NavBar = ({ items }) => {
  return (
    <StyledMainContent>
      <Stack flex align="center" spacing="none">
        <Stack flex shrink align="center">
          <Logo />
          <StyledText>Travel Hackathon</StyledText>
        </Stack>
        <Stack spacing="loose" flex shrink justify="end">
          {items.map((el, index) => {
            return <Link key={index}>About</Link>;
          })}
        </Stack>
      </Stack>
    </StyledMainContent>
  );
};

export default NavBar;
