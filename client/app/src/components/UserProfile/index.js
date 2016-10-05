import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Article from 'grommet-udacity/components/Article';
import Heading from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import FormField from 'grommet-udacity/components/FormField';
import Menu from 'grommet-udacity/components/Menu';

const UserProfile = ({
  user,
  onEditBio,
  isEditingBio,
  bioInput,
  onSaveEdit,
  onClickToEdit,
  onCancel,
  isEditingAvatar,
  onEditAvatar,
  avatarInput,
}) => (
  <Section className={styles.userProfile}>
    <Box
      justify="center"
      align="center"
      pad={{ horizontal: 'large', vertical: 'large' }}
    >
      <Article className={styles.panel}>
        <Heading tag="h2" align="center">
          {`Hello, ${user.name}!`}
        </Heading>
        <Section
          className={isEditingAvatar ? '' : styles.transformAvatar}
          pad={{ vertical: 'medium' }}
          align="center"
          justify="center"
        >
          {isEditingAvatar ?
            <Box size="medium" align="center">
              <FormField label="Edit Avatar URL">
                <input
                  className={`grommetux-text-input grommetux-input ${styles.input}`}
                  onChange={onEditAvatar}
                  value={avatarInput || user.avatar}
                  id="avatar-input"
                />
              </FormField>
              <Menu inline direction="row">
                <Button
                  label="Save"
                  style={{ marginTop: 10 }}
                  onClick={onSaveEdit}
                />
                <Button
                  label="Cancel"
                  style={{ marginTop: 10 }}
                  onClick={onCancel}
                />
              </Menu>
            </Box>
          :
            <img
              className={styles.avatar}
              onClick={onClickToEdit}
              src={user.avatar ?
                user.avatar
              :
                'http://bit.ly/2dqCGdd'
              }
            />
          }
        </Section>
        <Section pad={{ vertical: 'medium' }} align="center" justify="center">
          {isEditingBio ?
            <Box size="medium" align="center">
              <FormField label="Edit Bio">
                <textarea onChange={onEditBio} value={bioInput || user.bio} id="bio-input" />
              </FormField>
              <Menu inline direction="row">
                <Button
                  label="Save"
                  style={{ marginTop: 10 }}
                  onClick={onSaveEdit}
                />
                <Button
                  label="Cancel"
                  style={{ marginTop: 10 }}
                  onClick={onCancel}
                />
              </Menu>
            </Box>
          :
            <Paragraph onClick={onClickToEdit}>
              {user.bio ? user.bio : 'Click to add a bio.'}
            </Paragraph>
          }
        </Section>
        <Section pad={{ vertical: 'medium' }} align="center" justify="center">
          <Heading tag="h3" align="center">
            {user.email}
          </Heading>
        </Section>
      </Article>
      <Article className={styles.panel}>
        <Section pad={{ vertical: 'medium' }} align="center" justify="center">
          <Heading tag="h2">
            Event History
          </Heading>
          {user.events && user.events.length > 0 ?
            <List>
              {user.events.map((item, i) =>
                <ListItem key={i}>
                  {item.name}
                </ListItem>
              )}
            </List>
          :
            <Box>
              <Heading tag="h3">
                No Events Created Yet
              </Heading>
              <Button label="Create One" href="/create-event" />
            </Box>
          }
        </Section>
      </Article>
    </Box>
  </Section>
);

UserProfile.propTypes = {
  onEditBio: PropTypes.func.isRequired,
  isEditingBio: PropTypes.bool.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  onClickToEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isEditingAvatar: PropTypes.bool.isRequired,
  onEditAvatar: PropTypes.func.isRequired,
  avatarInput: PropTypes.string,
};

export default cssModules(UserProfile, styles);
