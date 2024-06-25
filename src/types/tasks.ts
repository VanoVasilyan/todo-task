export type TTaskStatus = 'pending' | 'completed' | 'overdue' | 'removed';

export type TTask = {
    id: number;
    title: string;
    description: string;
    deadline: string;
    status: TTaskStatus
}

export type TTasksData = {
    tasks: TTask[]
};