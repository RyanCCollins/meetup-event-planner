import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box'

const EventInfo = ({
  event,
}) => (
  <Box className={styles.eventInfo}>
    {JSON.stringify(event, null)}
  </Box>
);

EventInfo.propTypes = {
  event: PropTypes.object.isRequired,
};

export default cssModules(EventInfo, styles);
