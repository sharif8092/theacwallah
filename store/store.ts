import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice.ts';
import authReducer from './slices/authSlice.ts';
import blogReducer from './slices/blogSlice.ts';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    auth: authReducer,
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
