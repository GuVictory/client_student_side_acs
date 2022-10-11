import { configureStore } from '@reduxjs/toolkit';
import projects from './projects.store';

const store = configureStore({
  reducer: { projects: projects.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
