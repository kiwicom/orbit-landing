import React from 'react';
import Timeline from '@kiwicom/orbit-landing-components/src/Timeline';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Button from '@kiwicom/orbit-components/lib/Button';

const NewLocations = () => {
  return (
    <Timeline
      id="new-locations"
      background="white"
      title="Locations we are working on"
      suppressed
      content={
        <>
          <Stack>
            <div>
              Where else can you expect a hackathon? Check the list below,{' '}
              <TextLink href="mailto:globalhack@kiwi.com">let us know</TextLink>{' '}
              if you want to be a partner or sponsor some of them. Help us
              expand the list by adding your event.
            </div>
            <Button
              type="primary"
              bordered
              href="https://docs.google.com/forms/d/e/1FAIpQLSfiqeXYsVUS5Q17QZT5GB4botBn-BKU2hzkOjlFxRJVfewdxA/viewform"
              external
            >
              Add your hackathon
            </Button>
          </Stack>
        </>
      }
      items={[
        {
          time: 'Europe',
          title: 'all announced',
        },
      ]}
    />
  );
};

export default NewLocations;
