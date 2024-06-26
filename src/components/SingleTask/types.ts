import { Dayjs } from "dayjs";
import { TTaskStatus } from "../../types/tasks";

export interface SingleTaskProps {
    id: number;
    title: string;
    description: string;
    deadline: Dayjs | string;
    status: TTaskStatus
}