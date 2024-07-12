import { Dayjs } from 'dayjs';

export type TTask = {
    id: number;
    title: string;
    description: string;
    deadline: Dayjs | string;
    status: string
};

export type TTasksData = {
    tasks: TTask[],
    removedTasks: TTask[],
    editableItem: TTask
};

export enum ETaskStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    OVERDUE = 'overdue',
    REMOVED = 'removed',
};
