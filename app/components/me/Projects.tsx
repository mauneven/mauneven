import {
  Title,
  Text,
  Stack,
  Card,
  Group,
  Button,
  Badge,
  SimpleGrid,
  Grid,
} from "@mantine/core";
import React from "react";

const Projects = () => {
  return (
    <Stack justify="center" align="center">
      <Title size="h1" c={"yellow"}>Projects</Title>
      <Group maw={1000} justify="center" gap={50}>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder>
          <img />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Want</Text>
            <Badge color="violet">In Progress</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            Want is a groundbreaking platform redefining online commerce by
            allowing users to post what they desire and receive offers from
            sellers, transforming the traditional buying and selling experience.
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Info
          </Button>
        </Card>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder>
          <img />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>CASSIE</Text>
            <Badge color="green">FINISHED</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            CASSIE or Code Analysis System for Software Intelligence and
            Enhancement it's a Generative Pre-Trained Transformer that uses the community GPT-2 with more than 124 Millions of parameters
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            info
          </Button>
        </Card>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder>
          <img />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Atorquideas</Text>
            <Badge color="green">FINISHED</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            info
          </Button>
        </Card>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder>
          <img />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>MiniMarket</Text>
            <Badge color="green">FINISHED</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            info
          </Button>
        </Card>
      </Group>
    </Stack>
  );
};

export default Projects;
