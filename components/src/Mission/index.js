// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import defaultTheme from '../defaultTheme';

const StyledImage = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: none !important;

  ${media.largeMobile(css`
    display: block !important;
  `)};
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const StyledMainContent = styled.div`
  padding-left: 5.2vw;
  padding-right: 7.8vw;
  box-sizing: border-box;
`;

const Wrapper = styled.div``;

const Mission = ({ sideImage, title, subTitle, description, category }) => {
  return (
    <Grid columns="100%" largeMobile={{ columns: '70% auto' }}>
      <StyledMainContent>
        <Stack spacing="condensed">
          <Text type="warning">{category}</Text>
          <Heading type="title1" element="h2">
            {title}
          </Heading>
          <Wrapper>
            <Text type="secondary" size="large" spaceAfter="largest">
              {subTitle}
            </Text>
          </Wrapper>
          <Text size="large">{description}</Text>
        </Stack>
      </StyledMainContent>
      <StyledImage img={sideImage} />
    </Grid>
  );
};

export default Mission;
