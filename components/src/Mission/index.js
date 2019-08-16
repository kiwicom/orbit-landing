// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';
import Hide from '@kiwicom/orbit-components/lib/Hide';

import Panel from '../Panel';
import Container from '../utils/Container';
import Pattern from '../utils/Pattern';
import pattern02 from '../../static/pattern02.svg';
import pattern09 from '../../static/pattern09.svg';
import patternImage from '../../static/pattern06.svg';
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
  border-radius: 12px;
  display: none !important;

  ${media.tablet(css`
    display: block !important;
  `)};
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const StyledMainContent = styled.div`
  padding-right: 7.8vw;
  box-sizing: border-box;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Wrapper = styled.div``;
const StyledTextWrapper = styled.div`
  max-width: 100%;
`;

const MissionTitle = ({
  sideImage,
  title,
  subTitle,
  description,
  category,
}) => {
  return (
    <Container noSpacing>
      <Grid columns="100%" tablet={{ columns: '70% auto' }}>
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
            <StyledTextWrapper>
              <Text size="large">{description}</Text>
            </StyledTextWrapper>
          </Stack>
        </StyledMainContent>
        <StyledImageWrapper>
          <StyledImage img={sideImage} />
          <Hide on={['smallMobile', 'mediumMobile', 'largeMobile']}>
            <Pattern
              pattern={pattern02}
              width="68px"
              height="57px"
              left="-20px"
              bottom="-20px"
            />
            <Pattern
              pattern={pattern09}
              width="100px"
              height="180px"
              right="-20px"
              bottom="-70px"
            />
          </Hide>
        </StyledImageWrapper>
      </Grid>
    </Container>
  );
};

const StyledSpace = styled.div`
  margin-bottom: calc(1rem + 3.15vw);
`;

const Mission = ({
  sideImage,
  title,
  subTitle,
  description,
  category,
  items,
  id,
}) => {
  return (
    <Container id={id}>
      <Hide on={['smallMobile', 'mediumMobile', 'largeMobile']}>
        <Pattern
          pattern={patternImage}
          width="7vw"
          height="6vw"
          top="20px"
          left="20px"
        />
      </Hide>
      <StyledSpace>
        <MissionTitle
          sideImage={sideImage}
          title={title}
          subTitle={subTitle}
          description={description}
          category={category}
        />
      </StyledSpace>
      <Panel items={items} />
    </Container>
  );
};

export default Mission;
