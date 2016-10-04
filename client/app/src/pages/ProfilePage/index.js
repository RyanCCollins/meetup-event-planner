import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ProfileContainer } from 'containers';

const ProfilePage = () => (
  <div className={styles.container}>
    <ProfileContainer />
  </div>
);

export default cssModules(ProfilePage, styles);
