import React from 'react';

import Container from './Container';
import SectionTitle from './SectionTitle';
import styles from './About.module.css';

const About = () => {
  return (
    <Container>
      <div id="about" className={styles.about}>
        <SectionTitle text="About"/>
        <p>This is a single page site built using Gatsby JS, a high performance static site generator. All images are processed to multiple sizes and lazy loaded after the site loads. This results in a quick and smooth experience for visitors even on mobile phones with slow internet connections.</p>
        <p>The site is hosted on Netlify which provides a global CDN providing speed, scalability and reliability. It also includes an SSL certificate as standard.</p>
      </div>
    </Container>
  );
};

export default About;