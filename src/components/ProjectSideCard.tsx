import { Spinner, Pane, Heading, Card, SideSheet } from 'evergreen-ui';
import React from 'react';
import { FullProjectInfo } from '../models';

type ProjectSideCardProps = {
  isShown?: boolean;
  onSideCardClose?: () => void;
  projectData?: FullProjectInfo;
};

export const ProjectSideCard = ({
  isShown,
  onSideCardClose,
  projectData,
}: ProjectSideCardProps) => {
  return (
    <SideSheet
      isShown={isShown}
      onCloseComplete={onSideCardClose}
      containerProps={{
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
      }}
    >
      {projectData ? (
        <>
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor='white'>
            <Pane padding={16}>
              <Heading size={600}>{projectData.title}</Heading>
            </Pane>
          </Pane>
          <Pane flex='1' overflowY='scroll' background='tint1' padding={16}>
            <Card
              backgroundColor='white'
              elevation={0}
              height={240}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Heading>{projectData.description}</Heading>
            </Card>
          </Pane>
        </>
      ) : (
        <Spinner />
      )}
    </SideSheet>
  );
};
