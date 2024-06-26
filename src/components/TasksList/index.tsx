import React, { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { useTasksSelector } from '../../store/slices/tasks';
import SingleTask from '../SingleTask';

const TasksList: FC = () => {
    const { tasks } = useTasksSelector();

    return (
        <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant='h4'>To Do List</Typography>
            {!!tasks.length ?
                <Container sx={{
                    border: '1px solid #F6F6FE',
                    borderRadius: '10px',
                    padding: '10px'
                }}>
                    {
                        tasks.map(task => (
                            <SingleTask key={task.id} {...task} />
                        ))
                    }
                </Container>
                :
                <Typography>List is empty</Typography>
            }
        </Container>
    )
}

export default TasksList