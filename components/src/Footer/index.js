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
  padding-right: 2.32vw;
  box-sizing: border-box;
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 110%;
  align-items: center;
  justify-content: space-between;
  padding: 2.32vw;
  border-radius: 24px 24px 0 0;
  background: #252a31;
  box-sizing: border-box;

  ${media.largeMobile(css`
    border-radius: 0 24px 0 0;
  `)};
`;

FooterWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledText = styled.span`
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
        spacing="compact"
        grow={false}
        largeDesktop={{ direction: 'row' }}
        shrink
      >
        <FooterWrapper>
          <Logo src={KiwiLogo} alt="" />
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
          largeDesktop={{ justify: 'between' }}
          shrink
        >
          {navigationLinks.map((el, i) => {
            return (
              <ButtonLink key={i} href={el.href} size="small" type="secondary">
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
