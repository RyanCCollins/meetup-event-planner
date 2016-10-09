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
        <Anchor href="/events" className="active">
          Events
        </Anchor>
        {isAuthenticated ?
          <Menu
            direction="row"
            align="center"
          >
            <Anchor href="/user/profile" className="active">
              Profile
            </Anchor>
            <Anchor href="/create-event" className="active">
              Create Event
            </Anchor>
            <Anchor href="/logout" className="active">
              Logout
            </Anchor>
          </Menu>
        :
          <span>
            <Anchor href="/login" className="active">
              Login
            </Anchor>
            {' / '}
            <Anchor href="/signup" className="active">
              Signup
            </Anchor>
          </span>
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
