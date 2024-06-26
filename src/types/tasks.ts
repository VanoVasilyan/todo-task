import { Dayjs } from "dayjs";

export type TTaskStatus = 'pending' | 'completed' | 'overdue' | 'removed';

export type TTask = {
    id: number;
    title: string;
    description: string;
    deadline: Dayjs | string;
    status: TTaskStatus
}

export type TTasksData = {
    tasks: TTask[]
};