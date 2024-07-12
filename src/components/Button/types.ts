import { Theme } from '@emotion/react';
import { ButtonPropsVariantOverrides, SxProps } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

export interface IButtonProps {
    children: string;
    sx: SxProps<Theme>,
    color?: string;
    onClick:  () => void;
    variant?: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides>;
};
