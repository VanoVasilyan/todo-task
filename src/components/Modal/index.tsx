import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import { useModal } from '../../hooks/useModal';
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
    mr: 3
};

const BasicModal: FC = () => {
    const {
        isModalOpen,
        removedTasks,
        handleOpenModal,
        handleCloseModal
    } = useModal();

    return (
        <Container sx={{
            position: 'absolute',
            top: {
                lg: '5px',
                md: '5px',
                sm: '220px',
                xs: '220px'
            },
            right: '0'
        }}>
            <Button sx={{
                position: 'absolute',
                right: '10px',
                '&:hover': {
                    backgroundColor: '#FFF'
                }
            }} onClick={handleOpenModal}>
                <DeleteIcon sx={{
                    fontSize: '50px',
                    color: 'red',
                }} />
                <Box component='span' sx={{ position: 'absolute', color: '#FFFFFF' }}>{removedTasks?.length}</Box>
            </Button>
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
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
                    }} onClick={handleCloseModal}>
                        <CloseIcon />
                    </Button>
                    {!!removedTasks.length ?
                        <Container sx={{ marginTop: '20px' }}>
                            <Typography variant='h4' sx={{
                                textAlign: 'center',
                                color: '#0288D1',
                                fontSize: {
                                    lg: '38px',
                                    md: '34px',
                                    sm: '20px',
                                    xs: '18px'
                                },
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