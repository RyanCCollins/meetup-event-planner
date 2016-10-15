import React, { PropTypes } from 'react';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import LogoImage from './logo.png';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Navbar = ({
  isAuthenticated,
}) => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title>
        <Anchor href="/">
          <img className={styles.logo} src={LogoImage} alt="logo"/>
        </Anchor>
      </Title>
      <Menu
        direction="row"
        align="center"
        className={styles.rightNav}
        responsive
      >
        <Anchor href="/events" className={styles.menuItem}>
          Events
        </Anchor>
        {isAuthenticated ?
          <Menu
            direction="row"
            align="center"
            className={styles.menu}
          >
            <Anchor href="/user/profile" className={styles.menuItem}>
              Profile
            </Anchor>
            <Anchor href="/create-event" className={styles.menuItem}>
              Create Event
            </Anchor>
            <Anchor href="/logout" className={styles.menuItem}>
              Logout
            </Anchor>
          </Menu>
        :
          <Menu
            direction="row"
            align="center"
            className={styles.menu}
          >
            <Anchor href="/login" className={styles.menuItem}>
              Login
            </Anchor>
            <Anchor href="/signup" className={styles.menuItem}>
              Signup
            </Anchor>
          </Menu>
        }
      </Menu>
    </Header>
  </div>
);

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

Navbar.defaultProps = {
  isAuthenticated: false,
};

export default cssModules(Navbar, styles);
