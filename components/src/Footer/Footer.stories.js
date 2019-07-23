// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Facebook from '@kiwicom/orbit-components/lib/icons/Facebook';
import Instagram from '@kiwicom/orbit-components/lib/icons/Instagram';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';

import Footer from './index';

storiesOf('Footer', module).add('Default', () => (
  <Footer
    shareTitle="Share us with your friends"
    shareLinks={[
      { icon: <Facebook />, title: 'Facebook', href: '#' },
      { icon: <Instagram />, title: 'Instagram', href: '#' },
      { icon: <Twitter />, title: 'Twitter', href: '#' },
      { icon: <Linkedin />, title: 'Linkedin', href: '#' },
    ]}
    navigationLinks={[
      { title: 'Privacy Policy', href: '#' },
      { title: 'Code of Conduct', href: '#' },
      { title: 'Legal', href: '#' },
      { title: 'Site Map', href: '#' },
    ]}
  />
));
