import React from 'react';
import { render, Box } from 'ink';

import Example from './components/example.component';

const App = () => {
  return (
    <Box justifyContent={'space-around'}>
      <Example />
      <Example />
      <Example />
    </Box>
  );
};

render(<App />);
