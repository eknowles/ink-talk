import { Box, Color } from 'ink';
import React from 'react';

const Status: React.FC = ({ children }) => (
  <Box>
    <Color white></Color>
    <Color bgWhite white>█</Color>
    <Color bgWhite black>{children}</Color>
    <Color bgWhite white>█</Color>
    <Color bgWhite black></Color>
    <Color bgBlack black>█</Color>
    <Color bgBlack white>Ed's Amazing Terminal Application</Color>
    <Color bgBlack black>█</Color>
  </Box>
);

export default Status;
