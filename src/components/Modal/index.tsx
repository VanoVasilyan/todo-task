import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';
import { useTasksSelector } from '../../store/slices/tasks';
import SingleTask from '../SingleTask';

const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 1200,
    borderRadius: '20px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const BasicModal: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { removedTasks } = useTasksSelector();

    return (
        <Container sx={{ position: 'absolute', bottom: '10%', right: '0' }}>
            <Button sx={{ position: 'absolute', right: '10px' }} onClick={() => setIsOpen(true)}>
                <DeleteIcon style={{ fontSize: '50px', color: 'red' }} />
                <Box component='span' sx={{ position: 'absolute', color: '#FFFFFF' }}>{removedTasks?.length}</Box>
            </Button>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Button sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        color: 'red',
                        background: '#FFF',
                        borderRadius: '20px',
                        '&:hover': {
                            backgroundColor: '#FFF'
                        },
                    }} onClick={() => setIsOpen(false)}>
                        <CloseIcon />
                    </Button>
                    {!!removedTasks.length ?
                        <Container sx={{ marginTop: '20px' }}>
                            <Typography variant='h4' sx={{
                                textAlign: 'center',
                                color: '#0288D1',
                                fontSize: '38px',
                                marginBottom: '40px',
                                fontWeight: 700
                            }}>Removed Tasks</Typography>
                            {
                                removedTasks.map(task => (
                                    <SingleTask key={task.id} {...task} />
                                ))
                            }
                        </Container>
                        :
                        <Typography variant='h5' sx={{ textAlign: 'center', marginTop: '15px' }}>Trash is empty...</Typography>
                    }
                </Box>
            </Modal>
        </Container>
    );
};

export default BasicModal