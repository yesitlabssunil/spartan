import {configureStore} from '@reduxjs/toolkit';
import homeSlice from './slices/homeSlice';
import secondSlice from './slices/secondSlice';

export const store = configureStore({
    reducer: {
        home: homeSlice,
        second: secondSlice,
    }
});