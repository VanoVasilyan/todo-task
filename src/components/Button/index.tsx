import React, { FC } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

const ButtonCustom: FC<ButtonProps> = ({ children, onClick, sx, variant = 'contained' }) => {
    return (
        <Button sx={sx} color='info' onClick={onClick} variant={variant}>
            {children}
        </Button>
    )
}

export default ButtonCustom