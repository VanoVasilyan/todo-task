import { Dayjs } from 'dayjs';

export interface SingleTaskProps {
    id: number;
    title: string;
    description: string;
    deadline: Dayjs | string;
    status: string
}