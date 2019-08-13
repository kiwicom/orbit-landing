// @flow

import React, { useEffect } from 'react';
import './reset.css';
import styled from 'styled-components';
import Button from '@kiwicom/orbit-components/lib/Button';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Facebook from '@kiwicom/orbit-components/lib/icons/Facebook';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';
// Components
import Faq from '@kiwicom/orbit-landing-components/src/Faq';
import NavBar from '@kiwicom/orbit-landing-components/src/NavBar';
import Mission from '@kiwicom/orbit-landing-components/src/Mission';
import Imagewall from '@kiwicom/orbit-landing-components/src/ImageWall';
import JoinUs from '@kiwicom/orbit-landing-components/src/JoinUs';
import Locations from '@kiwicom/orbit-landing-components/src/Locations';
import HeroCentered from '@kiwicom/orbit-landing-components/src/HeroCentered';
import Timeline from '@kiwicom/orbit-landing-components/src/Timeline';
import Footer from '@kiwicom/orbit-landing-components/src/Footer';
import Sponsors from '@kiwicom/orbit-landing-components/src/Sponsors';
import Prizes from '@kiwicom/orbit-landing-components/src/Prizes';
import Contact from '@kiwicom/orbit-landing-components/src/Contact';
import OrbitLanding from '@kiwicom/orbit-landing-components/src/OrbitLanding';

import Seo from '../components/seo';
// Images
import logo from '../images/kiwi.svg';
import logoSab from '../images/sab.png';
import heroPattern from '../images/pattern04.svg';
import heroImg2 from '../images/hero02.jpg';
import heroSvg from '../images/hero2.svg';
import missionImage from '../images/mission.jpg';
import grid01 from '../images/grid01.jpg';
import grid02 from '../images/grid02.jpg';
import grid03 from '../images/grid03.jpg';
import grid04 from '../images/grid04.jpg';
import grid05 from '../images/grid05.jpg';
import grid06 from '../images/grid06.jpg';
import grid07 from '../images/grid07.jpg';
import grid08 from '../images/grid08.jpg';
import grid09 from '../images/grid09.jpg';
import joinUsImg from '../images/joinUsImg.jpg';
import joinUsPattern from '../images/pattern03.svg';
import icAccessibility from '../images/ic-accessibility.svg';
import icGlobe from '../images/ic-globe.svg';
import icTopic from '../images/ic-topic.svg';
import evBrno from '../images/ev-brno.jpg';
import evBarcelona from '../images/ev-barcelona.jpg';
import evZagreb from '../images/ev-zagreb.jpg';
import evLjublana from '../images/ev-ljublana.jpg';



const StyledWrapper = styled.div`
  overflow: hidden;
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
        <Seo title="Global Hackathon by Kiwi.com" />

      </StyledWrapper>
    </OrbitLanding>
  );
};

export default IndexPage;
