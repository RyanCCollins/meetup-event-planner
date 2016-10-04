import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { EventContainer } from 'containers';

const EventPage = ({
  params,
}) => (
  <div className={styles.container}>
    <EventContainer params={params} />
  </div>
);

EventPage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default cssModules(EventPage, styles);
