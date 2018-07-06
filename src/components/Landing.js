import React from 'react';
import Img from 'gatsby-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Fade } from 'react-reveal';

import styles from './Landing.module.css';

const Landing = ({ data }) => {
  return (
    <div id="landing" className={styles.landing}>
      <div className={styles.landingContent}>
        <Fade delay={150}><h1>Welcome!</h1></Fade>
        <Fade delay={350}><h2>This is an example site built using GatsbyJS</h2></Fade>
        <AnchorLink offset="100" href="#services">
          <Fade delay={500}><button>Learn More</button></Fade>
        </AnchorLink>
      </div>
      <Img
        outerWrapperClassName={styles.landingImage}
        style={{height: '100%'}}
        sizes={data.landing.childImageSharp.sizes}
      />
    </div>
  )
};

export default Landing;