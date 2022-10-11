import { FullProjectInfo, ShortProjectInfo } from './Project.model';

export type StateModel = {
  // List of available projects
  projectsList: ShortProjectInfo[];

  // Projects witch opened in side card
  sideCardProject?: FullProjectInfo;

  // Projects witch opened in full page
  fullPageProject?: FullProjectInfo;
};
