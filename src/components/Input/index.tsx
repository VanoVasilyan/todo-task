import React, { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { InputProps } from './types';

const Input: FC<InputProps> = ({ id, onChange, label, value, multiline, sx, variant = 'outlined', name, error, type = 'default' }) => {
    return (
        <>
            {
                type === 'datePicker' ? (
                    <DatePicker
                        name={name}
                        label={label}
                        value={value}
                        onChange={onChange}
                        sx={{ marginTop: '15px' }}
                    />
                ) :
                    <TextField
                        id={id}
                        value={value}
                        label={label}
                        multiline={multiline}
                        sx={sx}
                        name={name}
                        variant={variant}
                        onChange={onChange}
                    />
            }
            {error && <Typography color='red'>{error}</Typography>}
        </>
    )
}

export default Input