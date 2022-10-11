import React, { useEffect, useState } from 'react';
import { Pane, majorScale, Text, Table, Heading, Card, Spinner } from 'evergreen-ui';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchProjects, fetchParticularSideCardProject } from '../store/projects.actions';
import { ProjectSideCard } from '../components';

// type Props = {};

export const ProjectsListPage = () => {
  const dispatch = useAppDispatch();
  const allProjects = useAppSelector((state) => state.projects.projectsList);
  const sideCardProject = useAppSelector((state) => state.projects.sideCardProject);

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const handleOpenSideCard = (id: string) => {
    if (sideCardProject?.id === id) {
      setIsShown(true);
      return;
    }

    console.log('loading new');
    dispatch(fetchParticularSideCardProject(id));
    setIsShown(true);
  };

  return (
    <>
      <Pane display='flex' alignItems='center' marginX={majorScale(2)}>
        <Table flex='auto'>
          <Table.Head>
            <Table.TextHeaderCell flexGrow={1}>Title</Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={60} flexShrink={0} flexGrow={0}>
              []
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={60} flexShrink={0} flexGrow={0}>
              []
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={80} flexShrink={0} flexGrow={0}>
              Level
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={160} flexShrink={0} flexGrow={0}>
              Professor
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexGrow={2}>Description</Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={120} flexShrink={0} flexGrow={0}>
              Fields
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={120} flexShrink={0} flexGrow={0}>
              Skills
            </Table.TextHeaderCell>
          </Table.Head>
          <Table.VirtualBody height={600}>
            {allProjects.map((item) => (
              <Table.Row key={item.id} onClick={() => handleOpenSideCard(item.id)}>
                <Table.TextCell>{item.title}</Table.TextCell>
              </Table.Row>
            ))}
          </Table.VirtualBody>
        </Table>
      </Pane>

      <ProjectSideCard
        isShown={isShown}
        onSideCardClose={() => setIsShown(false)}
        projectData={sideCardProject}
      />
    </>
  );
};
