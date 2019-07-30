// @flow

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import slicedCorner from '../utils/slicedCorner';
import defaultTheme from '../defaultTheme';
import Container from '../utils/Container';

const StyledMainContent = styled(Container)`
  text-align: center;
`;

const StyledContainer = styled.div`
  ${slicedCorner}
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Faq = ({ items, theme, id }) => {
  return (
    <StyledContainer id={id} backgroundColor={theme.orbit.paletteInkNormal}>
      <StyledMainContent hasSlicedCorner>
        <Stack
          flex
          align="center"
          direction="column"
          spacing="natural"
          tablet={{ spacing: 'loose' }}
        >
          <Heading style="title1" element="h2" inverted>
            FAQ
          </Heading>
          <Stack spacing="none" flex wrap>
            {items.map((item, index) => {
              return (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  img={item.img}
                  index={index}
                />
              );
            })}
          </Stack>
        </Stack>
      </StyledMainContent>
    </StyledContainer>
  );
};

Faq.defaultProps = {
  theme: defaultTheme,
};

const BubbleWrapper = styled.div`
  box-shadow: 0 0px 90px 0 rgba(37, 42, 49, 0.12);
  border-radius: 12px;
  padding: 16px 24px;
  display: inline-block;
  cursor: pointer;
  background-color: #fff;
`;

const FaqWrapper = styled.div`
  width: 100%;
  padding: 1.2vh 1.4vh;
  box-sizing: border-box;

  ${media.tablet(css`
    width: 50%;
  `)};
`;

FaqWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledContent = styled.div`
  max-height: 0;
  display: none;
  padding: 1vh 0 0 0;

  ${({ expanded }) =>
    expanded &&
    css`
      max-height: 100%;
      display: block;
    `};
`;

const FaqItem = ({ question, answer, index }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <FaqWrapper>
      <Stack
        flex
        justify="start"
        wrap
        tablet={{ justify: index % 2 > 0 ? 'start' : 'end', wrap: false }}
      >
        <BubbleWrapper
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <Text weight="bold" spacing="natural" inverted>
            {question}
          </Text>
          <StyledContent expanded={expanded}>
            <Text>{answer}</Text>
          </StyledContent>
        </BubbleWrapper>
      </Stack>
    </FaqWrapper>
  );
};

export default Faq;
