// @flow

import React from 'react';
import styled from 'styled-components';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import defaultTheme from '@kiwicom/orbit-components/lib/defaultTheme';
import Hide from '@kiwicom/orbit-components/lib/Hide';

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
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

StyledLink.defaultProps = {
  theme: defaultTheme,
};

const StyledImage = styled.div`
  height: 4.21vw;
  width: 8.52vw;
  min-width: 80px;
  min-height: 40px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Link = ({ children, onClick, href }) => {
  return (
    <StyledLink onClick={onClick} href={href}>
      {children}
    </StyledLink>
  );
};

const NavBar = ({ items, title }) => {
  return (
    <StyledMainContent>
      <Stack flex align="center" spacing="none">
        <Stack flex shrink align="center">
          <StyledImage img={logo} />
          <StyledText>{title}</StyledText>
        </Stack>
        <Hide on={['smallMobile', 'mediumMobile', 'largeMobile']}>
          <Stack spacing="loose" flex shrink justify="end">
            {items.map((el, index) => {
              return (
                <Link href={el.href} onClick={el.onClick} key={index}>
                  {el.title}
                </Link>
              );
            })}
          </Stack>
        </Hide>
      </Stack>
    </StyledMainContent>
  );
};

export default NavBar;
