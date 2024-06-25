import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { TTasksData } from '../../types/tasks';
import { RootState } from '../store';

const initialState: TTasksData = {
    tasks: [],
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
