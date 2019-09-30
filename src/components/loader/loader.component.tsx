import { Box, Color } from 'ink';
import Spinner from 'ink-spinner';
import React from 'react';

const Loader: React.FC = ({ children }) => (
  <Box>
    <Color>
      <Spinner type="dots" />
      {' '}
      {children}
      {' '}
    </Color>
  </Box>
);

export default Loader;
