import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import { useTasksSelector } from '../../store/slices/tasks';
import EmptyImage from '../../images/Empty.jpg';
import SingleTask from '../SingleTask';

const TasksList: FC = () => {
    const { tasks, editableItem } = useTasksSelector();

    return (
        <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
            {!!tasks.length ?
                <Container sx={{
                    padding: {
                        lg: 0,
                        md: 0,
                        sm: 0,
                        xs: 0
                    }
                }}>
                    <Typography variant='h4' sx={{
                        color: '#0288D1',
                        fontSize: {
                            lg: '38px',
                            md: '34px',
                            sm: '20px',
                            xs: '18px'
                        },
                        marginBottom: '10px',
                        fontWeight: 700
                    }}>To Do List</Typography>
                    {
                        tasks.map(task => (
                            <SingleTask key={task.id} {...task} />
                        ))
                    }
                </Container>
                : !editableItem.title ?
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '35px',
                        flexDirection: {
                            lg: 'row',
                            md: 'column',
                            sm: 'column',
                            xs: 'column'
                        }
                    }}>
                        <ImageListItem sx={{
                            maxWidth: {
                                lg: '200px',
                                md: '150px',
                                sm: '100px',
                                xs: '80px'
                            }
                        }}>
                            <img
                                loading='lazy'
                                src={EmptyImage}
                                alt={'Empty List'}
                                style={{ borderRadius: '25px' }}
                            />
                        </ImageListItem>
                        <Typography
                            sx={{
                                color: 'deepskyblue',
                                fontSize: {
                                    lg: '38px',
                                    md: '34px',
                                    sm: '20px',
                                    xs: '18px'
                                },
                                marginLeft: '10px',
                                fontWeight: 700
                            }}
                        >List is empty, add your first task!</Typography>
                    </Box> : null
            }
        </Container>
    )
};

export default TasksList
