import React, { FC } from 'react';
import { useTasksSelector } from '../../store/slices/tasks';
import { Container, Typography } from '@mui/material';
import SingleTask from '../SingleTask';

const TasksList: FC = () => {
    const { tasks } = useTasksSelector();
    return (
        <Container>
            <Typography variant='h3'>To Do List</Typography>
            {!!tasks.length && tasks.map(task => (
                <SingleTask key={task.id} {...task} />
            ))}
        </Container>
    )
}

export default TasksList