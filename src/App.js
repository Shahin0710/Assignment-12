import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    <Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
    </div>
  );
}

export default App;
