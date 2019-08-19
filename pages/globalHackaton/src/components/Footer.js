import React from 'react';
import Footer from '@kiwicom/orbit-landing-components/src/Footer';
import Facebook from '@kiwicom/orbit-components/lib/icons/Facebook';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';

const CustomFooter = () => {
  return (
    <Footer
      shareTitle="Share the event with your friends"
      shareLinks={[
        {
          icon: <Facebook customColor="#fff" />,
          title: 'Facebook',
          href:
            'http://www.facebook.com/sharer/sharer.php?u=https://hack.travel',
        },
        {
          icon: <Twitter customColor="#fff" />,
          title: 'Twitter',
          href:
            'https://twitter.com/share?url=https://hack.travel&text=Hack the travel and discover the world from a whole new perspective. #HackTravel',
        },
        {
          icon: <Linkedin customColor="#fff" />,
          title: 'Linkedin',
          href:
            'https://www.linkedin.com/shareArticle?url=https://hack.travel&title=Global Travel Hackaton by Kiwi.com',
        },
      ]}
      navigationLinks={[
        { title: 'Privacy Policy', href: '/privacy-policy/' },
        { title: 'Code of Conduct', href: '/code-of-conduct/' },
      ]}
    />
  );
};

export default CustomFooter;
