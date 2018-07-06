import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../images/logo.svg';
import menuIcon from '../images/menuIcon.svg';
import styles from './Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideNav: true
    }

    this.toggleNav = this.toggleNav.bind(this);
    this.dismissNav = this.dismissNav.bind(this);
  }

  toggleNav() {
    const hideNav = this.state.hideNav;
    this.setState({ hideNav: !hideNav });
  }

  dismissNav() {
    this.setState({ hideNav: true });
  }

  render() {
    const { hideNav } = this.state;
    const navStyle = hideNav ? `${styles.headerNav} ${styles.headerNavHidden}` : `${styles.headerNav}`;

    return (
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <AnchorLink href="#landing">
            <img className={styles.logo} src={logo} />
          </AnchorLink>
          <img onClick={this.toggleNav} className={styles.menuIcon} src={menuIcon} />
        </div>
        <nav className={navStyle}>
          <AnchorLink
            onClick={this.dismissNav}
            offset="100"
            href="#services">
            Services
          </AnchorLink>
          <AnchorLink
            onClick={this.dismissNav}
            offset="100"
            href="#about">
            About
          </AnchorLink>
          <AnchorLink
            onClick={this.dismissNav}
            offset="100"
            href="#contact">
            Contact
          </AnchorLink>
        </nav>
      </div>
    );
  }
};

export default Header;