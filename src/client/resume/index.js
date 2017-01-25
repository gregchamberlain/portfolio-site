import React from 'react';
import Github from 'react-icons/lib/fa/github';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import Folder from 'react-icons/lib/md/folder';
import Home from 'react-icons/lib/md/home';
import Email from 'react-icons/lib/md/email';
import Phone from 'react-icons/lib/md/phone';

import styles from './styles.css';

import ProjectList from './ProjectList';
import JobList from './JobList';

const Resume = () => (
  <div className={styles.background}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="spacer flex" style={{flexDirection: 'column'}}>
          <div className={styles.name}>Greg Chamberlain</div>
          <div className={styles.sites}>
            <div>
              <Github className={styles.icon} /> <a href="https://www.github.com/gregchamberlain" target="_blank">gregchamberlain</a>
            </div>
            <div>
              <LinkedIn className={styles.icon} /> <a href="https://www.linkedin.com/in/greg-chamberlain" target="_blank">greg-chamberlain</a>
            </div>
            <div>
              <Folder className={styles.icon} /> <a href="http://www.gregchamberlain.tech" target="_blank">gregchamberlain.tech</a>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div>San Francisco, CA <Home className={styles.icon} /></div>
          <div>gregchamberlain94@gmail.com <Email className={styles.icon} /></div>
          <div>(715) 307-7746 <Phone className={styles.icon} /></div>
        </div>
      </div>
      <ProjectList />
      <JobList />
    </div>
  </div>
);

export default Resume;
