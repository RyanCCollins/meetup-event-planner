import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';

const UserProfile = ({
  user,
  onEditBio,
  isEditingBio,
  bioInput,
  onSaveBio,
  onClickBio,
}) => (
  <Section className={styles.userProfile}>
    <Box
      justify="center"
      align="center"
      pad={{ horizontal: 'large', vertical: 'large' }}
    >
      <Heading tag="h2" align="center">
        {`Hello, ${user.name}!`}
      </Heading>
      <Box pad={{ vertical: 'medium' }} align="center" justify="center">
        <img
          src={user.avatar ?
            user.avatar
          :
            'http://bit.ly/2dqCGdd'
          }
          className={styles.avatar}
        />
      </Box>
      <Box pad={{ vertical: 'medium' }} align="center" justify="center">
        {isEditingBio ?
          <Box>
            <textarea onChange={onEditBio} value={bioInput} id="bio-input" />
            <Button
              label="Save"
              style={{ paddingTop: 10 }}
              onClick={onSaveBio}
            />
          </Box>
        :
          <Paragraph onClick={onClickBio}>
            {user.bio ? user.bio : 'Click to add a bio.'}
          </Paragraph>
        }
      </Box>
    </Box>
  </Section>
);

UserProfile.propTypes = {
  onEditBio: PropTypes.func.isRequired,
  isEditingBio: PropTypes.bool.isRequired,
  onSaveBio: PropTypes.func.isRequired,
  onClickBio: PropTypes.func.isRequired,
};

export default cssModules(UserProfile, styles);
