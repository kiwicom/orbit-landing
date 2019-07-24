// @flow

import React from 'react';
import styled from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';

import Container from '../utils/Container';

const StyledMainContent = styled.div``;

const Wrapper = styled.div``;

const Panel = ({ items }) => {
  return (
    <Container noSpacing>
      <StyledMainContent>
        <Grid
          rows="repeat(3,  1fr)"
          tablet={{ columns: 'repeat(3,  1fr)', rows: 'none' }}
          columns={null}
          gap="6vw"
        >
          {items.map((item, index) => {
            return (
              <PanelItem key={index} title={item.title} img={item.img}>
                {item.content}
              </PanelItem>
            );
          })}
        </Grid>
      </StyledMainContent>
    </Container>
  );
};

const StyledImg = styled.img``;

const PanelItem = ({ title, children, img }) => {
  return (
    <Wrapper>
      <Stack
        direction="column"
        spacing="condensed"
        desktop={{ spacing: 'natural' }}
      >
        {img && <StyledImg height="33px" src={img} />}
        <Heading type="title4" element="h3">
          {title}
        </Heading>
        <Text>{children}</Text>
      </Stack>
    </Wrapper>
  );
};

export default Panel;
