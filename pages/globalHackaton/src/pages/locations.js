// @flow

import React from 'react';
import './reset.css';
import styled from 'styled-components';
// Components
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import OrbitLanding from '@kiwicom/orbit-landing-components/src/OrbitLanding';
import LocationCard from '@kiwicom/orbit-landing-components/src/LocationsCard';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Text from '@kiwicom/orbit-components/lib/Text';

import Seo from '../components/seo';
import locations from '../locations';

// Images

const StyledWrapper = styled.div`
  background-color: #f5f7f9;
  width: 100%;
  height: 100vh;
  max-width: 1920px;
  padding: calc(1rem + 7.02vw);
  box-sizing: border-box;
`;

const IndexPage = () => {
  // function gtag() {
  //   // eslint-disable-next-line no-undef
  //   dataLayer.push(arguments);
  // }

  // useEffect(() => {
  //   window.dataLayer = window.dataLayer || [];
  //   gtag('js', new Date());
  //   gtag('config', 'UA-29345084-23');
  // });

  return (
    <OrbitLanding>
      <StyledWrapper>
        <Seo title="Locations of global hackathon by Kiwi.com" />
        <Stack spacing="loose">
          <Stack spacing="compact">
            <Heading type="title2" element="h1">
              Register to one of Global Travel Hackathon events
            </Heading>
            <Text>
              Celebrate World Tourism Day by attending one of the hackathons on
              27 September
            </Text>
          </Stack>

          <Grid
            columns="repeat(1, 1fr)"
            gap="2vw"
            largeMobile={{ columns: 'repeat(2, 1fr)' }}
            tablet={{ columns: 'repeat(3, 1fr)' }}
            desktop={{ columns: 'repeat(4, 1fr)' }}
          >
            {locations.map((el, i) => {
              return (
                <LocationCard
                  condensed
                  inverted
                  key={el.location + i}
                  href={el.href}
                  eventName={el.eventName}
                  location={el.location}
                  logo={el.logoDark}
                  onClick={el.onClick}
                />
              );
            })}
          </Grid>
        </Stack>
      </StyledWrapper>
    </OrbitLanding>
  );
};

export default IndexPage;
