import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, createSlice, current } from '@reduxjs/toolkit';
import { TTask, TTasksData } from '../../types/tasks';
import { RootState } from '../store';

const initialState: TTasksData = {
    tasks: [],
    removedTasks: [],
    editableItem: {} as TTask
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        },
        setTaskCompleted: (state, action) => {
            const foundElement = current(state.tasks).find(el => el.id === action.payload)
            const newTaskData = [...current(state.tasks)];
            const modifiedObject = {
                ...foundElement,
                status: 'completed',
            };
            const findElementIndex = state.tasks.findIndex(
                (item: TTask) => item.id === action.payload
            );
            newTaskData.splice(findElementIndex, 1, modifiedObject as TTask);
            return {
                ...state,
                tasks: newTaskData
            }
        },
        deleteTask: (state, action) => {
            const foundElement = { ...current(state.tasks).find(el => el.id === action.payload), status: 'removed' };
            const newStateForTasks = current(state.tasks).filter(el => el.id !== action.payload);
            return {
                ...state,
                tasks: newStateForTasks,
                removedTasks: [...state.removedTasks, foundElement as TTask]
            }
        },
        editTask: (state, action) => {
            const newStateForTasks = current(state.tasks).filter(el => el.id !== action.payload?.id);
            return {
                ...state,
                tasks: newStateForTasks,
                editableItem: action.payload
            }
        }
    },
});

export default tasksSlice.reducer;

export const useTasksAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ ...tasksSlice.actions }, dispatch);
};

export const useTasksSelector = () => {
    return useSelector((state: RootState) => state.tasks);
};
