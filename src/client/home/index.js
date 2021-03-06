import React from 'react';
import LinkedIn from 'react-icons/lib/fa/linkedin-square'
import Github from 'react-icons/lib/fa/github-square'

import styles from './styles.css';
import profileSrc from '../assets/greg_chamberlain.jpg';
import apolloIcon from '../assets/icons/apollo.png';
import reactIcon from '../assets/icons/react.png';
import reduxIcon from '../assets/icons/redux.png';
import htmlIcon from '../assets/icons/html.png';
import nodeIcon from '../assets/icons/node.png';
import graphqlIcon from '../assets/icons/graphql.png';
import jsIcon from '../assets/icons/js.png';
import gitIcon from '../assets/icons/git.png';
import railsIcon from '../assets/icons/rails.png';
import cssIcon from '../assets/icons/css.png';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import JobSection from './JobSection';
import ContactSection from './ContactSection';

const Home = () => (
  <div>
    <div className={styles.background}>
      <div className={styles.image} style={{ backgroundImage: `url(${profileSrc})`}}/>
      <div className={styles.name}>Greg Chamberlain</div>
      <div className={styles.title}>Software Developer</div>
      <div className="flex">
        <a href="https://www.github.com/gregchamberlain" className={styles.link} target="_blank"><Github /></a>
        <a href="https://www.linkedin.com/in/greg-chamberlain" className={styles.link} target="_blank"><LinkedIn /></a>
      </div>
      <div className={styles.icon} style={{ backgroundImage: `url(${apolloIcon})`, top: '10%', left: '35%'}}/>
      <div className={styles.icon} style={{ backgroundImage: `url(${reactIcon})`, top: '10%', right: '35%'}}/>
      <div className={styles.icon} style={{ backgroundImage: `url(${reduxIcon})`, bottom: '10%', left: '35%'}}/>
      <div className={styles.icon} style={{ backgroundImage: `url(${htmlIcon})`, bottom: '10%', right: '35%'}}/>
      <div className={styles.icon} style={{ backgroundImage: `url(${nodeIcon})`, top: '25%', left: '20%'}}/>
      <div className={styles.icon} style={{ backgroundImage: `url(${graphqlIcon})`, top: '25%', right: '20%'}}/>
      <div className={styles.icon} style={{ backgroundImage: `url(${jsIcon})`, bottom: '25%', left: '20%'}}/>
      <div className={styles.icon} style={{ backgroundImage: `url(${railsIcon})`, bottom: '25%', right: '20%'}}/>
      <div className={styles.icon} style={{ backgroundImage: `url(${gitIcon})`, top: 'calc(50% - 5vw)', left: '5%'}}/>
      <div className={styles.icon} style={{ backgroundImage: `url(${cssIcon})`, top: 'calc(50% - 5vw)', right: '5%'}}/>
    </div>
    <AboutSection />
    <ProjectSection />
    <JobSection />
    <ContactSection />
  </div>
);

export default Home;
