import { TextFieldVariants } from '@mui/material';

export type InputType = 'datePicker' | 'default';

export interface InputProps {
    id: string;
    label: string;
    value: any;
    name: string;
    multiline?: boolean;
    onChange: (e?: any) => void;
    variant?: TextFieldVariants;
    sx?: any;
    error?: string;
    type?: InputType;
}