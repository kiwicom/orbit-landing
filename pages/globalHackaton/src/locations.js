// Images
import evBrno from './images/ev-brno.jpg';
import evBarcelona from './images/ev-barcelona.jpg';
import evZagreb from './images/ev-zagreb.jpg';
import evLjublana from './images/ev-ljublana.jpg';
// Logos
import logoSab from './images/sab.png';
import logo from './images/kiwi.svg';
import logoDark from './images/kiwi-dark.svg';
import gdg from './images/gdg.png';

const locations = [
  {
    featured: true,
    backgroundImage: evBarcelona,
    eventName: 'Spain',
    location: 'Barcelona',
    logo: logo,
    logoDark: logoDark,
    href:
      'https://www.eventbrite.com/e/global-travel-hackathon-barcelona-edition-tickets-68004219451?aff=BCNwebregistration',
  },
  {
    featured: true,
    backgroundImage: evZagreb,
    eventName: 'Croatia',
    location: 'Zagreb',
    logo: logo,
    logoDark: logoDark,
    href:
      'https://www.eventbrite.com/e/global-travel-hackathon-zagreb-edition-tickets-68284911007?aff=ZGRBwebregistration',
  },
  {
    featured: true,
    backgroundImage: evLjublana,
    eventName: 'Serbia',
    location: 'Belgrade',
    logo: logo,
    logoDark: logoDark,
    href:
      'https://www.eventbrite.com/e/global-travel-hackathon-belgrade-edition-tickets-68284501783?aff=BLGwebregistration',
  },
  {
    featured: true,
    backgroundImage: evBrno,
    eventName: 'Czechia',
    location: 'Brno',
    logo: logoSab,
    logoDark: logoDark,
    href: 'http://www.czechspaceyear.com/coha/',
  },
  {
    eventName: 'San José',
    location: 'Costa Rica',
    logoDark: gdg,
    href: 'https://www.meetup.com/gdg-costarica/events/263957102/',
  },
  {
    eventName: 'Chetumal',
    location: 'Mexico',
    logoDark: gdg,
    href: 'https://www.meetup.com/es/GDGChetumal/events/263289321/',
  },
  {
    eventName: 'Strasbourg',
    location: 'France',
    logoDark: gdg,
    href: 'https://voicehackathon.gdgstrasbourg.fr/',
  },
];

export default locations;
