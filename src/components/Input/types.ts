import { Theme } from '@emotion/react';
import { SxProps, TextFieldVariants } from '@mui/material';

export type InputType = 'datePicker' | 'default';

export interface InputProps {
    id: string;
    label: string;
    value: any;
    name: string;
    multiline?: boolean;
    onChange: (e: any) => void;
    variant?: TextFieldVariants;
    sx?: SxProps<Theme>;
    error?: string;
    type?: InputType;
};

export enum EInputType {
    DATEPICKER = 'datePicker',
    DEFAULT = 'default'
};
