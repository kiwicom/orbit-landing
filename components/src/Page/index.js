// @flow

import React from 'react';
import styled from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Stack from '@kiwicom/orbit-components/lib/Stack';

import Container from '../utils/Container';
import defaultTheme from '../defaultTheme';

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledPage = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};

  p {
    margin-bottom: 1.25em;
    font-size: 1.2rem;
    line-height: 1.4;
    color: #252a31;
  }

  p {
    margin-bottom: 1.25em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1rem;
    line-height: 1.15;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052em;
  }

  h2 {
    font-size: 2.441em;
  }

  h3 {
    font-size: 1.953em;
  }

  h4 {
    font-size: 1.563em;
  }

  h5 {
    font-size: 1.25em;
  }

  small,
  .text_small {
    font-size: 0.8em;
  }

  ul {
    padding-left: 20px;
  }

  li {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.orbit.colorTextLinkPrimary};
    text-decoration: ${({ theme }) =>
      theme.orbit.textDecorationTextLinkPrimary};

    &:hover {
      color: ${({ theme }) => theme.orbit.colorTextLinkSecondaryHover};
      text-decoration: ${({ theme }) =>
        theme.orbit.textDecorationTextLinkPrimaryHover};
    }
  }
`;

StyledPage.defaultProps = {
  theme: defaultTheme,
};

const Page = ({ title, children, id }) => {
  return (
    <Container id={id}>
      <StyledWrapper>
        <Stack spacing="compact">
          <StyledPage>
            <h1>{title}</h1>
            <Stack flex spacing="natural" direction="column">
              {children}
            </Stack>
          </StyledPage>
        </Stack>
      </StyledWrapper>
    </Container>
  );
};

export default Page;
