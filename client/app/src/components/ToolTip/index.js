import React, { PropTypes } from 'react';
import Tip from 'grommet-udacity/components/Tip';

const ToolTip = ({
  isShowing,
  children,
  onClose,
}) => (
  <div>
    {isShowing &&
      <Tip size="medium" target="passwordInput" onClose={onClose}>
        {children}
      </Tip>
    }
  </div>
);

ToolTip.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ToolTip;
