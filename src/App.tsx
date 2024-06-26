import React, { FC } from 'react';
import { Container } from '@mui/material';
import Form from './components/Form';
import TasksList from './components/TasksList';

const App: FC = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Form />
      <TasksList />
    </Container>
  );
}

export default App;
