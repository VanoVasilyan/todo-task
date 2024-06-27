import { useMemo } from 'react';
import { ETaskStatus } from '../types/tasks';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { useTasksAction, useTasksSelector } from '../store/slices/tasks';
import { SingleTaskProps } from '../components/SingleTask/types';

export const useSingleTask = ({ status, id, title, description, deadline }: SingleTaskProps) => {
    const { setTaskCompleted, deleteTask, editTask } = useTasksAction();
    const { editableItem } = useTasksSelector();

    const handleCheckStatus = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();

        if (status === ETaskStatus.OVERDUE || status === ETaskStatus.COMPLETED || status === ETaskStatus.REMOVED) {
            return
        };
        setTaskCompleted(id);
    };

    const handleEditTask = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();

        if (status === ETaskStatus.REMOVED || editableItem?.title) {
            return
        }
        editTask({ id, title, description, deadline });
    };

    const handleRemoveTask = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();

        if (status === ETaskStatus.REMOVED) {
            return
        }
        deleteTask(id)
    };

    const statusBackgroundColor = useMemo(() => {
        if (status === ETaskStatus.PENDING) {
            return '#FF6C37'
        } else if (status === ETaskStatus.COMPLETED) {
            return '#50C800'
        } else {
            return '#BB0000'
        }
    }, [status])

    return {
        handleCheckStatus,
        handleEditTask,
        handleRemoveTask,
        capitalizeFirstLetter,
        statusBackgroundColor
    }
}