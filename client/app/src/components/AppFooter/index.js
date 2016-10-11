// Copyright ©️ 2016 - Ryan Collins
// admin@ryancollins.io
// http://www.ryancollins.io
// Open sourced under the MIT license
// See LICENSE.md file for details

import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Footer from 'grommet-udacity/components/Footer';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';

const AppFooter = () => (
  <Footer className={styles.appFooter}>
    <Box
      direction="column"
      align="center"
      pad={{ vertical: 'large' }}
      responsive
      className={styles.flexOne}
    >
      <Heading tag="h3">
        <Anchor href="http://meetup-event-planner.herokuapp.com/">
          Meetup Event Planner
        </Anchor>
      </Heading>
      <Heading tag="h5">
        Made with ♥️ by
        <Anchor href="http://www.ryancollins.io">
          {' Ryan Collins'}
        </Anchor>
      </Heading>
    </Box>
  </Footer>
);

export default cssModules(AppFooter, styles);
