import React from 'react';
import { render, Box } from 'ink';

import { NAV } from './nav';

import Menu from './components/menu';
import Table from './components/table';
import Status from './components/status';

console.clear();

const props = {
  meta: {},
  columns: [
    { id: 'key', label: 'Key' },
    { id: 'issuetype', label: 'Type' },
    { id: 'summary', label: 'Summary' },
    { id: 'status', label: 'Status' },
  ],
  data: [
    { key: 'OXD-123', issuetype: 'Story', summary: 'blaa blaa', status: 'OK' }
  ]
};

const App = () => {
  return (
    <Box flexDirection="column">
      <Box justifyContent="space-between">
        <Menu items={NAV} />
        <Status>Example message goes here</Status>
      </Box>
      <Table tableProps={props} />
    </Box>
  );
};

render(<App />);
