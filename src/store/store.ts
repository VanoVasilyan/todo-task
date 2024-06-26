import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasks';

const combined = combineReducers({
    tasks: tasksReducer,
});

const masterReducer = (state: any, action: any) => {
    return combined(state, action);
};

export const store = configureStore({
    reducer: masterReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
