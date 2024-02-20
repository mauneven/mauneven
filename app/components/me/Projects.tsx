import { Grid, Paper, Title, Text, Stack } from "@mantine/core";
import React from "react";

const Projects = () => {
  return (
    <Stack justify="center" align="center">
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
    </Stack>
  );
};

export default Projects;
