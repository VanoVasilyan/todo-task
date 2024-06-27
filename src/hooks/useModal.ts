import { useState } from 'react';
import { useTasksSelector } from '../store/slices/tasks';

export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { removedTasks } = useTasksSelector();

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return {
        isModalOpen,
        removedTasks,
        handleOpenModal,
        handleCloseModal
    }
};
