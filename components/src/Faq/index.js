// @flow

import * as React from 'react';
import styled from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';

const StyledMainContent = styled.div`
  padding-left: 5.2vw;
  padding-right: 7.8vw;
  box-sizing: border-box;
  text-align: center;
`;

const Faq = ({ items }) => {
  return (
    <StyledMainContent>
      <Heading>FAQ</Heading>
      <Stack spacing="loose">
        {items.map((item, index) => {
          return (
            <FaqItem key={index} title={item.title} img={item.img}>
              {item.content}
            </FaqItem>
          );
        })}
      </Stack>
    </StyledMainContent>
  );
};

const FaqWrapper = styled.div`
  box-shadow: 0 0px 90px 0 rgba(37, 42, 49, 0.12);
  border-radius: 20px;
  padding: 32px 24px;
`;

const FaqItem = ({}) => {
  return (
    <FaqWrapper>
      <Stack>
        <Text weight="bold" spacing="natural">
          Test
        </Text>
        <Text>Test</Text>
      </Stack>
    </FaqWrapper>
  );
};

export default Faq;
