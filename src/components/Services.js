import React from 'react';
import { Fade } from 'react-reveal';

import Container from './Container';
import SectionTitle from './SectionTitle';
import arrow from '../images/arrow.svg';
import globe from '../images/globe.svg';
import server from '../images/server.svg';
import styles from './Services.module.css';

const Services = () => {
  return (
    <Container>
      <div id="services"></div>
      <SectionTitle text="Services"/>
      <div className={styles.services}>
        <Fade delay={100}>
          <div className={styles.service}>
            <img src={arrow}/>
            <h2>Modern Design</h2>
            <div className={styles.line} />
            <p>This website is built to display correctly on both mobile and desktop devices, benefitting your visitors and google SEO ranking.</p>
          </div>
        </Fade>
        <Fade delay={250}>
          <div className={styles.service}>
            <img src={globe}/>
            <h2>High Performance</h2>
            <div className={styles.line} />
            <p>The site is served through a global CDN providing speed, scalability and reliability.</p>
          </div>
        </Fade>
        <Fade delay={400}>
          <div className={styles.service}>
            <img src={server}/>
            <h2>Secure</h2>
            <div className={styles.line} />
            <p>This site is encrypted increasing the security and peace of mind of your visitors.</p>
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default Services;