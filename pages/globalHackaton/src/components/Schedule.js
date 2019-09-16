import React from 'react';
import Timeline from '@kiwicom/orbit-landing-components/src/Timeline';

const Schedule = () => {
  return (
    <Timeline
      title={
        <>
          Schedule for <br /> Kiwi.com hackathons
        </>
      }
      corner
      suppressed
      content="We begin on Friday, 27 September and we will be hacking for 24 hours. Don’t worry, we will provide everything you need so you can last all night long. Please note that for some hackathons, the schedule might differ. Check the event website."
      items={[
        { time: '22.9.', title: 'Application deadline for Kiwi.com hackathons' },
        { time: '25.9.', title: 'Confirmation of attendees of Kiwi.com hackathons' },
        { time: '27–28.9.', title: 'Kiwi.com hackathons' },
      ]}
    />
  );
};

export default Schedule;
