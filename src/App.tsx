import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProjectPage, ProjectsListPage } from './pages';
import { routes } from './routes';

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path={routes.projects} element={<ProjectsListPage />} />
        <Route path={routes.project} element={<ProjectPage />} />
      </Routes>
    </div>
  );
};
