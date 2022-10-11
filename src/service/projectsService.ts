// import Api from './Api';
// import { ShortProjectInfo } from '../models';

export default {
  async getAllProjects() {
    // const response = await Api().get('projects');
    // return response.data;
    return [
      {
        id: '1',
        title: 'test 1',
      },
      {
        id: '2',
        title: 'test 2',
      },
      {
        id: '3',
        title: 'test 3',
      },
    ];
  },
  async getParticularProject(projectId: string) {
    // const response = await Api().get('todos');
    // return response.data.filter((todo: TodoModel) => todo.id === todo_id)[0];
    return {
      id: projectId,
      title: `title ${projectId}`,
      description: `description ${projectId}`,
    };
  },
};
