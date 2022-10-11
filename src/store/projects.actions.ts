import projects from './projects.store';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { ShortProjectInfo, FullProjectInfo } from '../models';
import ProjectsService from '../service/projectsService';

export const projectsActions = projects.actions;

export const fetchProjects = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (getState().projects.projectsList.length === 0) {
      const response: ShortProjectInfo[] = await ProjectsService.getAllProjects();
      dispatch(projectsActions.setProjects(response));
    }
  };
};

export const fetchParticularSideCardProject = (
  projectId: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, _) => {
    const response: FullProjectInfo = await ProjectsService.getParticularProject(projectId);
    dispatch(projectsActions.setSideCardProject(response));
  };
};

export const fetchParticularFullPageProject = (
  projectId: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, _) => {
    const response: FullProjectInfo = await ProjectsService.getParticularProject(projectId);
    dispatch(projectsActions.setFullPageProject(response));
  };
};
