import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTasksSelector } from '../../store/slices/tasks';
import EmptyImage from '../../images/Empty.jpg';
import ImageListItem from '@mui/material/ImageListItem';
import SingleTask from '../SingleTask';

const TasksList: FC = () => {
    const { tasks } = useTasksSelector();

    return (
        <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
            {!!tasks.length ?
                <Container>
                    <Typography variant='h4' sx={{
                        color: '#0288D1',
                        fontSize: '38px',
                        marginBottom: '10px',
                        fontWeight: 700
                    }}>To Do List</Typography>
                    {
                        tasks.map(task => (
                            <SingleTask key={task.id} {...task} />
                        ))
                    }
                </Container>
                :
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '35px'
                }}>
                    <ImageListItem sx={{ maxWidth: 200 }}>
                        <img
                            srcSet={`${EmptyImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={EmptyImage}
                            alt={EmptyImage}
                            style={{ borderRadius: '25px' }}
                        />
                    </ImageListItem>
                    <Typography
                        sx={{
                            color: 'deepskyblue',
                            fontSize: '38px',
                            marginLeft: '10px',
                            fontWeight: 700
                        }}
                    >List is empty, add your first task!</Typography>
                </Box>
            }
        </Container>
    )
}

export default TasksList