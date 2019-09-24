// @flow

import React from 'react';
import styled from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import Facebook from '@kiwicom/orbit-components/lib/icons/Facebook';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';

import Container from '../utils/Container';

const Wrapper = styled.div``;

const MentorList = ({ category, title, subTitle, mentors, suppressed }) => {
  return (
    <Container suppressed={suppressed}>
      <Stack spacing="extraLoose">
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
        </Stack>
        <Grid
          columns="repeat(1,  1fr)"
          tablet={{ columns: 'repeat(2,  1fr)', rows: 'none' }}
          gap="5vw"
        >
          {mentors.map((el, i) => {
            return (
              <MentorItem
                key={i}
                name={el.name}
                description={el.description}
                socials={el.socials}
                profilePicture={el.profilePicture}
              />
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
};

const StyledMentor = styled.div`
  position: relative;
`;

const StyledImageContainer = styled.div`
  width: 12vw;
  height: 15vw;
  border-radius: 16px;
  min-width: 114px;
  min-height: 142px;
  max-width: 228px;
  max-height: 205px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const MentorItem = ({ name, description, socials, profilePicture }) => {
  return (
    <StyledMentor>
      <Stack flex spacing="loose">
        {profilePicture && <StyledImageContainer img={profilePicture} />}
        <Stack>
          <Heading type="title4">{name}</Heading>
          <Text>{description}</Text>
          {socials && (
            <Stack spacing="none">
              {socials.twitter && (
                <ButtonLink
                  iconLeft={<Twitter />}
                  size="small"
                  title="Twitter"
                />
              )}
              {socials.facebook && (
                <ButtonLink
                  iconLeft={<Facebook />}
                  size="small"
                  title="Facebook"
                />
              )}
              {socials.linkedin && (
                <ButtonLink
                  iconLeft={<Linkedin />}
                  size="small"
                  title="Linkedin"
                />
              )}
            </Stack>
          )}
        </Stack>
      </Stack>
    </StyledMentor>
  );
};

export default MentorList;
