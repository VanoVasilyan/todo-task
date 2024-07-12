import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { IButtonProps } from './types';

const ButtonCustom: FC<IButtonProps> = ({ children, sx, variant = 'contained', onClick }) => {
    return (
        <Button sx={sx} onClick={onClick} variant={variant}>
            {children}
        </Button>
    )
};

export default ButtonCustom
