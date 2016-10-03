import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CreateEventContainer } from 'containers';

const CreateEventPage = () => (
  <div className={styles.container}>
    <CreateEventContainer />
  </div>
);

export default cssModules(CreateEventPage, styles);
