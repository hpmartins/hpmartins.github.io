import { Outlet, Link } from "react-router-dom";

import { FaHome, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { HiCollection, HiMail } from 'react-icons/hi';

const AppLinks = () => {
    const external_entries = [
      {
        title: 'Scholar',
        link: 'https://scholar.google.com/citations?user=1vVkXm0AAAAJ',
        icon: <SiGooglescholar className="icon"/>,
        alt: 'Google Scholar',
      },
      {
        title: 'Github',
        link: 'https://github.com/hpmartins',
        icon: <FaGithub className="icon"/>,
        alt: 'Github',
      },
    ];
  
    const internal_entries = [
      {
        title: 'Home',
        link: '/',
        icon: <FaHome className="icon"/>,
        alt: 'Home page',
      },
      {
        title: 'Projects',
        link: '/projects',
        icon: <HiCollection className="icon"/>,
        alt: 'My projects',
      },
    ];

    const social_media = [
      {
        title: 'Instagram',
        link: 'https://instagram.com/hpmartins',
        icon: <FaInstagram className="icon"/>,
        alt: 'Home page',
      },
      {
        title: 'E-mail',
        link: 'mailto:hpmartins@gmail.com',
        icon: <HiMail className="icon"/>,
        alt: 'My projects',
      },
    ];
  
    return (
      <>
      <div className="icon-container">
        {internal_entries.map(entry => (
            <Link to={entry.link} className="icon-link">
              <div className="icon">{entry.icon}</div>
              <div className="label">{entry.title}</div>
            </Link>
        ))}
        {external_entries.map(entry => (
            <a key={entry.title} href={entry.link} alt={entry.alt} target="_blank" rel="noopener noreferrer" className="icon-link">
              <div className="icon">{entry.icon}</div>
              <div className="label">{entry.title}</div>
            </a>
        ))}
      </div>
      <div className="icon-container">
        {social_media.map(entry => (
            <a key={entry.title} href={entry.link} alt={entry.alt} target="_blank" rel="noopener noreferrer" className="icon-link">
              <div className="icon">{entry.icon}</div>
              <div className="label">{entry.title}</div>
            </a>
        ))}
        </div>
      </>

    );
};

const Layout = () => {
  return (
    <div className="App">
        <header className="App-body">
          <div className="App-header">
            <div className="App-logo">H</div>
            <div>Henrique P Martins</div>
            <AppLinks />
          </div>
          <div className="App-content">
            <Outlet />
          </div>
        </header>
    </div>
  )
};

export default Layout;
