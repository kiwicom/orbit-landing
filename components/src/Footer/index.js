// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Text from '@kiwicom/orbit-components/lib/Text';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Hide from '@kiwicom/orbit-components/lib/Hide';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';
import Facebook from '@kiwicom/orbit-components/lib/icons/Facebook';
import Instagram from '@kiwicom/orbit-components/lib/icons/Instagram';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';

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

const Footer = () => {
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
          <Logo src={KiwiLogo} />
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
                  Share us with your friends
                </Text>
              </StyledText>
            </Hide>
            <ButtonLink iconLeft={<Facebook />} transparent />
            <ButtonLink iconLeft={<Instagram />} transparent />
            <ButtonLink iconLeft={<Twitter />} transparent />
            <ButtonLink iconLeft={<Linkedin />} transparent />
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
          <ButtonLink size="small" type="secondary">
            Privacy Policy
          </ButtonLink>
          <ButtonLink size="small" type="secondary">
            Code of Conduct
          </ButtonLink>
          <ButtonLink size="small" type="secondary">
            Legal
          </ButtonLink>
          <ButtonLink size="small" type="secondary">
            Site Map
          </ButtonLink>
        </Stack>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;
