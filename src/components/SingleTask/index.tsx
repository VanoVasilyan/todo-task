import React, { FC } from 'react';
import dayjs from 'dayjs';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSingleTask } from '../../hooks/useSingleTask';
import { ETaskStatus } from '../../types/tasks';
import { SingleTaskProps } from './types';

const SingleTask: FC<SingleTaskProps> = ({ id, title, description, deadline, status }) => {
    const {
        handleCheckStatus,
        handleEditTask,
        handleRemoveTask,
        capitalizeFirstLetter,
        statusBackgroundColor
    } = useSingleTask({ id, title, description, deadline, status })

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2-content'
                id='panel2-header'
            >
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <FormControlLabel
                        onClick={handleCheckStatus}
                        label={<Typography sx={{
                            maxWidth: '250px',
                            minWidth: {
                                xs: 'auto',
                                md: '250px'
                            },
                            display: '-webkit-box',
                            textAlign: 'start',
                            WebkitLineClamp: 1,
                            wordBreak: 'break-all',
                            WebkitBoxDecorationBreak: 'revert',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}>{title}</Typography>}
                        control={<Checkbox checked={status === ETaskStatus.COMPLETED} color='success' />}
                    />
                    <Typography sx={{
                        backgroundColor: statusBackgroundColor,
                        color: '#FFFFFF',
                        fontSize: {
                            md: '16px',
                            sm: '14px',
                            xs: '14px'
                        },
                        padding: {
                            lg: '8px',
                            md: '8px',
                            sm: '5px',
                            xs: '5px'
                        },
                        display: {
                            lg: 'block',
                            md: 'block',
                            sm: 'block',
                            xs: status === ETaskStatus.COMPLETED ? 'none' : 'block'
                        },
                        borderRadius: '10px',
                    }}>
                        {capitalizeFirstLetter(status)}
                    </Typography>
                    <Typography sx={{
                        display: {
                            lg: 'block',
                            md: 'block',
                            sm: 'block',
                            xs: 'none'
                        }
                    }}>
                        {dayjs(deadline).format('DD-MM-YY')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                        <Typography onClick={handleEditTask}>
                            <EditIcon color='success' />
                        </Typography>
                        <Typography onClick={handleRemoveTask}>
                            <DeleteIcon sx={{ color: 'red' }} />
                        </Typography>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'left', wordBreak: 'break-all', display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{
                    maxWidth: {
                        lg: '100%',
                        md: '100%',
                        sm: '100%',
                        xs: '350px'
                    },
                    marginRight: '20px'
                }}>
                    {description}
                </Typography>
                <Typography sx={{
                    display: {
                        lg: 'none',
                        md: 'none',
                        sm: 'none',
                        xs: 'block'
                    },
                    minWidth: '70px',
                    maxWidth: '70px'
                }}>
                    {dayjs(deadline).format('DD-MM-YY')}
                </Typography>
            </AccordionDetails>
        </Accordion >
    )
};

export default SingleTask
