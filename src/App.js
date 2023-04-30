import { FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { HiCollection } from 'react-icons/hi';
import React, { useState } from "react";
import './App.css';

const Portfolio = () => {
  const external_entries = [
    {
      title: 'Scholar',
      link: 'https://scholar.google.com/citations?user=1vVkXm0AAAAJ',
      icon: <SiGooglescholar className="icon"/>,
      alt: 'Google Scholar logo',
    },
    {
      title: 'Github',
      link: 'https://github.com/hpmartins',
      icon: <FaGithub className="icon"/>,
      alt: 'Github logo',
    },
  ];

  const internal_entries = [
    {
      title: 'Projects',
      link: '/projects',
      icon: <HiCollection className="icon"/>,
      alt: 'My projects',
    },
  ];

  return (
    <div className="icon-container">
      {external_entries.map(entry => (
          <a key={entry.title} href={entry.link} target="_blank" rel="noopener noreferrer" className="icon-link">
            <div className="icon">{entry.icon}</div>
            <div className="label">{entry.title}</div>
          </a>
      ))}
      {internal_entries.map(entry => (
          <a key={entry.title} href={entry.link} className="icon-link">
            <div className="icon">{entry.icon}</div>
            <div className="label">{entry.title}</div>
          </a>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo big-letter">H</div>
        <div>
          <p>My portfolio</p>
        </div>
        <Portfolio />
      </header>
    </div>
  );
}

export default App;
