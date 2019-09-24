// @flow

import React from 'react';
import styled from 'styled-components';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Hide from '@kiwicom/orbit-components/lib/Hide';

import defaultTheme from '../defaultTheme';
import logo from '../../static/kiwi-white.svg';

const StyledMainContent = styled.div`
  padding: 0 ${({ theme }) => theme.landing.bodyPadding};
  box-sizing: border-box;
  text-align: center;
`;

StyledMainContent.defaultProps = {
  theme: defaultTheme,
};

const StyledText = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: #fff;
  text-decoration: none !important;
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

const StyledAnchor = styled.a`
  text-decoration: none;
`;

const StyledLink = styled.a`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
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
  height: 3.21vw;
  width: 6.52vw;
  min-width: 80px;
  min-height: 40px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
`;

const Link = ({ children, onClick, href }) => {
  return (
    <StyledLink onClick={onClick} href={href}>
      {children}
    </StyledLink>
  );
};

const NavBar = ({ items, title, homeLink = '/#' }) => {
  return (
    <StyledMainContent>
      <Stack flex align="center" spacing="none">
        <Stack flex shrink align="center">
          <StyledAnchor href={homeLink}>
            <Stack flex align="center">
              <StyledImage img={logo} />
              <StyledText>{title}</StyledText>
            </Stack>
          </StyledAnchor>
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
