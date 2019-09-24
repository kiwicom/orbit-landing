import React from 'react';
import Prizes from '@kiwicom/orbit-landing-components/src/Prizes';
import Mentors from '@kiwicom/orbit-landing-components/src/Mentors';
import Timeline from '@kiwicom/orbit-landing-components/src/Timeline';
import Sponsors from '@kiwicom/orbit-landing-components/src/Sponsors';

export const sponsorsMapping = el => {
  if (el.slice_type === 'sponsors') {
    const mappedLogos = el.items.map(el => {
      return el.sponsor_image.url;
    });
    return <Sponsors logos={mappedLogos} />;
  }
  return null;
};

export const sliceMapping = el => {
  if (el.slice_type === 'prices') {
    const prizesMapped = el.items.map(item => {
      return {
        place: item.prize_item_place,
        prize: item.prize_item_description && item.prize_item_description.text,
        title: item.prize_item_title && item.prize_item_title.text,
      };
    });

    return (
      <Prizes
        key={el.id}
        id="prizes"
        title={el.primary.prizes_title.text}
        description={
          <div
            dangerouslySetInnerHTML={{
              __html: `<div>${el.primary.prize_description.html}</div>`,
            }}
          />
        }
        prizes={prizesMapped}
        infoText={el.primary.additional_info.text}
      />
    );
  }

  if (el.slice_type === 'mentors') {
    const mentorsMapped = el.items.map(item => {
      return {
        name: item.mentor_item_name && item.mentor_item_name.text,
        description:
          item.mentor_item_description && item.mentor_item_description.text,
        socials: {
          linkedin: item.mentor_item_linkedin && item.mentor_item_linkedin.url,
          facebook: item.mentor_item_facebook && item.mentor_item_facebook.url,
          twitter: item.mentor_item_twitter && item.mentor_item_twitter.url,
        },
        profilePicture:
          item.mentor_item_profile && item.mentor_item_profile.url,
      };
    });
    return (
      <Mentors
        suppressed
        key={el.id}
        category={el.primary.category.text}
        title={el.primary.mentors_title.text}
        subTitle={el.primary.mentors_subtitle.text}
        mentors={mentorsMapped}
      />
    );
  }

  if (el.slice_type === 'timeline') {
    const { primary, items } = el;
    const mappedItems = items.map(it => {
      return {
        time: it.item_time1 && it.item_time1.text,
        title: it.item_title && it.item_title.text,
      };
    });

    return (
      <Timeline
        suppressed={primary.background === 'suppressed'}
        title={primary.titled && primary.titled.text}
        content={primary.timeline_content && primary.timeline_content.text}
        items={mappedItems}
      />
    );
  }

  return null;
};
