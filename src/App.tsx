import React, { FC } from 'react';
import { Container } from '@mui/material';
import Form from './components/Form';
import TasksList from './components/TasksList';

const App: FC = () => {
  return (
    <Container className="App">
      <Form />
      <TasksList />
    </Container>
  );
}

export default App;
