import { useCallback } from 'react';
import { ETaskStatus } from '../types/tasks';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { useTasksAction } from '../store/slices/tasks';
import { SingleTaskProps } from '../components/SingleTask/types';

export const useSingleTask = ({ status, id, title, description, deadline }: SingleTaskProps) => {
    const { setTaskCompleted, deleteTask, editTask } = useTasksAction();

    const handleCheckStatus = useCallback((e: {
        preventDefault(): unknown; stopPropagation: () => void;
    }) => {
        e.stopPropagation();
        e.preventDefault();
        if (status === ETaskStatus.OVERDUE || status === ETaskStatus.COMPLETED || status === ETaskStatus.REMOVED) {
            return
        };
        setTaskCompleted(id);
    }, [id, setTaskCompleted, status])

    const handleEditTask = useCallback((e: {
        stopPropagation(): unknown; preventDefault: () => void;
    }) => {
        e.preventDefault();
        e.stopPropagation();
        if (status === ETaskStatus.REMOVED) {
            return
        }
        editTask({ id, title, description, deadline });
    }, [deadline, description, editTask, id, status, title])

    const handleRemoveTask = useCallback((e: {
        stopPropagation(): unknown; preventDefault: () => void;
    }) => {
        e.preventDefault();
        e.stopPropagation();
        if (status === ETaskStatus.REMOVED) {
            return
        }
        deleteTask(id)
    }, [deleteTask, id, status])

    return {
        handleCheckStatus,
        handleEditTask,
        handleRemoveTask,
        capitalizeFirstLetter
    }
}