import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../images/logo.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <AnchorLink href="#landing">
        <img className={styles.logo} src={logo} />
      </AnchorLink>
    </div>
  );
};

export default Footer;