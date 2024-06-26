import React, { FC } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

const ButtonCustom: FC<ButtonProps> = ({ children, onClick, sx }) => {
    return (
        <Button sx={sx} color='info' onClick={onClick} variant="contained">
            {children}
        </Button>
    )
}

export default ButtonCustom