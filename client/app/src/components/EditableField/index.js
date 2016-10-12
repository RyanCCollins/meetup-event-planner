import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import FormField from 'grommet-udacity/components/FormField';

const EditableField = ({
  isEditing,
  onEdit,
  value,
  name,
  children,
}) => (
  <Section pad={{ vertical: 'medium' }} align="center" justify="center">
    {isEditing ?
      <Box size="medium" align="center">
        <FormField
          label={`Edit ${name.charAt(0).toUpperCase()}${name.slice(1)}`}
        >
          <textarea onChange={onEdit} value={value} id={`${name}-input`} />
        </FormField>
      </Box>
    :
      <span>
        {children}
      </span>
    }
  </Section>
);

EditableField.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default cssModules(EditableField, styles);
