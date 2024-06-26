import React, { FC } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

const ButtonCustom: FC<ButtonProps> = ({ children, onClick, sx, variant = 'contained', color = 'info' }) => {
    return (
        <Button sx={sx} color={color} onClick={onClick} variant={variant}>
            {children}
        </Button>
    )
};

export default ButtonCustom
