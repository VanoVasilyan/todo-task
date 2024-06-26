import React, { FC } from 'react';
import dayjs from 'dayjs';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTasksAction } from '../../store/slices/tasks';
import { SingleTaskProps } from './types';


const SingleTask: FC<SingleTaskProps> = ({ id, title, description, deadline, status }) => {
    const { setTaskCompleted, deleteTask, editTask } = useTasksAction();

    const handleCheckStatus = (e: {
        preventDefault(): unknown; stopPropagation: () => void;
    }) => {
        e.stopPropagation();
        e.preventDefault();
        if (status === 'overdue' || status === 'completed') {
            return
        };
        setTaskCompleted(id);
    }

    const handleEditTask = (e: {
        stopPropagation(): unknown; preventDefault: () => void;
    }) => {
        e.preventDefault();
        e.stopPropagation();
        editTask({ title, description, deadline });
        deleteTask(id);
    }

    const handleRemoveTask = (e: {
        stopPropagation(): unknown; preventDefault: () => void;
    }) => {
        e.preventDefault();
        e.stopPropagation();
        deleteTask(id)
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <FormControlLabel
                        onClick={handleCheckStatus}
                        label={<Typography sx={{
                            maxWidth: '250px',
                            minWidth: '250px',
                            display: '-webkit-box',
                            textAlign: 'start',
                            WebkitLineClamp: 1,
                            wordBreak: 'break-all',
                            WebkitBoxDecorationBreak: 'revert',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>{title}</Typography>}
                        control={<Checkbox checked={status === 'completed'} color="success" />}
                    />
                    <Typography sx={{
                        background: '#9BC1BC',
                        color: '#FFFFFF',
                        padding: '8px',
                        borderRadius: '10px'
                    }}>
                        {status}
                    </Typography>
                    <Typography>
                        {dayjs(deadline).format('DD-MM-YY')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                        <Typography onClick={handleEditTask}>
                            <EditIcon color="success" />
                        </Typography>
                        <Typography onClick={handleRemoveTask}>
                            <DeleteIcon sx={{ color: 'red' }} />
                        </Typography>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'left', wordBreak: 'break-all' }}>
                <Typography>
                    {description}
                </Typography>
            </AccordionDetails>
        </Accordion >
    )
}

export default SingleTask
