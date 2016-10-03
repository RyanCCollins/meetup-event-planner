import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { EventContainer } from 'containers';

const EventPage = () => (
  <div className={styles.container}>
    <EventContainer />
  </div>
);

export default cssModules(EventPage, styles);
