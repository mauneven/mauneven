import { Grid, Group, Paper, Title, Text } from "@mantine/core";
import React from "react";

const Projects = () => {
  return (
    <Grid>
      <Title>Projects</Title>
      <Grid justify="space-between" align="center">
        <Paper shadow="xl" radius="md" p="xl">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Paper shadow="xl" radius="md" p="xl">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Projects;
