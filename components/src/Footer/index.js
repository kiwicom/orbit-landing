// @flow

import * as React from 'react';
import styled from 'styled-components';
import Text from '@kiwicom/orbit-components/lib/Text';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Facebook from '@kiwicom/orbit-components/lib/icons/Facebook';
import Instagram from '@kiwicom/orbit-components/lib/icons/Instagram';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';

import KiwiLogo from '../../static/kiwi.svg';
import defaultTheme from '../defaultTheme';

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  border-radius: 24px 24px 0 0;
  background: #252a31;
  box-sizing: border-box;
`;

StyledFooter.defaultProps = {
  theme: defaultTheme,
};

const Logo = styled.img``;

Logo.defaultProps = {
  theme: defaultTheme,
};

const Footer = () => {
  return (
    <Stack
      align="center"
      justify="end"
      basis="auto"
      spacing="comfy"
      grow={false}
      shrink
    >
      <StyledFooter>
        <Logo height="60px" src={KiwiLogo} />
        <Stack align="center" justify="end" basis="auto" grow={false} shrink>
          <Text type="white">Share us with your friends</Text>
          <Stack justify="end" basis="0" grow={false} shrink spacing="none">
            <ButtonLink iconLeft={<Facebook />} />
            <ButtonLink iconLeft={<Instagram />} />
            <ButtonLink iconLeft={<Twitter />} />
            <ButtonLink iconLeft={<Linkedin />} />
          </Stack>
        </Stack>
      </StyledFooter>
      <Stack align="center" basis="auto" grow={false} spacing="comfy" shrink>
        <ButtonLink type="secondary">Privacy Policy</ButtonLink>
        <ButtonLink type="secondary">Code of Conduct</ButtonLink>
        <ButtonLink type="secondary">Legal</ButtonLink>
        <ButtonLink type="secondary">Site Map</ButtonLink>
      </Stack>
    </Stack>
  );
};

export default Footer;
