import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateModel, ShortProjectInfo, FullProjectInfo } from '../models';

const initialState: StateModel = {
  projectsList: [],
};

const projects = createSlice({
  name: 'projects',
  initialState: initialState,
  reducers: {
    setProjects(state, action: PayloadAction<ShortProjectInfo[]>) {
      state.projectsList = action.payload;
    },
    setSideCardProject(state, action: PayloadAction<FullProjectInfo>) {
      state.sideCardProject = action.payload;
    },
    setFullPageProject(state, action: PayloadAction<FullProjectInfo>) {
      state.fullPageProject = action.payload;
    },
  },
});

export default projects;
