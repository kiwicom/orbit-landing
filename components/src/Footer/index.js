// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Text from '@kiwicom/orbit-components/lib/Text';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Hide from '@kiwicom/orbit-components/lib/Hide';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import KiwiLogo from '../../static/kiwi.svg';
import defaultTheme from '../defaultTheme';

const StyledFooter = styled.div`
  width: 100%;

  box-sizing: border-box;
  ${media.largeMobile(css`
    padding-right: 2.32vw;
  `)};
`;

StyledFooter.defaultProps = {
  theme: defaultTheme,
};

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 110%;
  align-items: center;
  justify-content: space-between;
  padding: 2.32vw;
  border-radius: 12px 12px 0 0;
  background: #252a31;
  box-sizing: border-box;

  ${media.largeMobile(css`
    border-radius: 0 12px 0 0;
  `)};
`;

FooterWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledText = styled.div`
  margin-right: 0.63vw;
`;

const Logo = styled.img`
  height: 3.16vw;
  min-height: 40px;
`;

const Footer = ({ shareTitle, shareLinks, navigationLinks }) => {
  return (
    <StyledFooter>
      <Stack
        direction="column-reverse"
        align="center"
        justify="end"
        spacing="none"
        grow={false}
        largeDesktop={{ direction: 'row', spacing: 'compact' }}
        shrink
      >
        <FooterWrapper>
          <a href="https://www.kiwi.com/">
            <Logo src={KiwiLogo} alt="Kiwi.com logo" />
          </a>
          <Stack
            justify="end"
            align="center"
            grow={false}
            spacing="none"
            shrink
          >
            <Hide on={['smallMobile', 'mediumMobile', 'largeMobile']}>
              <StyledText>
                <Text size="small" type="white">
                  {shareTitle}
                </Text>
              </StyledText>
            </Hide>
            {shareLinks.map((el, i) => {
              return (
                <ButtonLink
                  key={i}
                  title={el.title}
                  iconLeft={el.icon}
                  href={el.href}
                  transparent
                />
              );
            })}
          </Stack>
        </FooterWrapper>
        <Stack
          direction="column"
          align="center"
          basis="auto"
          grow={false}
          spacing="none"
          largeMobile={{ direction: 'row' }}
          largeDesktop={{ justify: 'start' }}
          shrink
        >
          {navigationLinks.map((el, i) => {
            return (
              <ButtonLink key={i} href={el.href} external type="secondary">
                {el.title}
              </ButtonLink>
            );
          })}
        </Stack>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;
