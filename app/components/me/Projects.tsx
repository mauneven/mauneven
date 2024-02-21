import {
  Title,
  Text,
  Stack,
  Card,
  Group,
  Button,
  Badge,
  Spoiler,
  Image,
} from "@mantine/core";
import { IconBoxModel, IconBrandGithub } from "@tabler/icons-react";
import React from "react";

const Projects = () => {
  return (
    <Stack justify="center" align="center">
      <Title size="h1" c={"yellow"}>
        Personal Projects
      </Title>
      <Group maw={1000} justify="center" gap={50}>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder>
          <Image src={"/image/want-logo.svg"} />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Want</Text>
            <Badge color="violet">In Progress</Badge>
          </Group>

          <Group mt="md" mb="xs">
            <Badge variant="light" color="blue">
              NodeJS
            </Badge>
            <Badge variant="light" color="blue">
              Spring
            </Badge>
            <Badge variant="light" color="blue">
              NextJS
            </Badge>
            <Badge variant="light" color="blue">
              React Native
            </Badge>
            <Badge variant="light" color="blue">
              TypeScript
            </Badge>
            <Badge variant="light" color="blue">
              WebSockets
            </Badge>
            <Badge variant="light" color="blue">
              Rest
            </Badge>
            <Badge variant="light" color="blue">
              AWS
            </Badge>
          </Group>
          <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
            <Text size="sm" c="dimmed">
              This project is the most advanced and ambitious endeavor to date.
              Want stands as a groundbreaking platform that redifines online
              commerce by enabling users to post their desired items and receive
              offers from sellers, thereby transforming the traditional buying
              and selling experience. Key features include: registration via
              email with code verification and login, password encryption,
              password change functionality, real-time notifications through
              WebSockets, post creation and editing capabilities, offer
              creation, viewing offers on posted items, deletion of made offers
              and posted items, reporting of posts and offers, reporting and
              banning of accounts. All of these functions are facilitated
              through a highly sophisticated geospatial system, which not only
              displays posts in preferred categories but also allows users to
              set their desired radius in kilometers within their country,
              state, or city using latitude and longitude coordinates and IP-API
              geospatial location. Furthermore, the platform supports multiple
              languages including English, Spanish, and French.
            </Text>
          </Spoiler>
          <Button
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconBrandGithub />}
          >
            GitHub Repository
          </Button>
        </Card>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder>
          <img />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>CASSIE</Text>
            <Badge color="green">FINISHED</Badge>
          </Group>

          <Group mt="md" mb="xs">
            <Badge variant="light" color="blue">
              AI
            </Badge>
            <Badge variant="light" color="blue">
              Python
            </Badge>
            <Badge variant="light" color="blue">
              TypeScript
            </Badge>
            <Badge variant="light" color="blue">
              Linux
            </Badge>
          </Group>

          <Text size="sm" c="dimmed">
            CASSIE or Code Analysis System for Software Intelligence and
            Enhancement it&apos;s a Generative Pre-Trained Transformer that uses
            the community GPT-2 with more than 124 Millions of parameters
          </Text>

          <Button
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconBrandGithub />}
          >
            GitHub Repository
          </Button>
          <Button
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconBoxModel />}
          >
            CLM (Credits)
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
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder>
          <img />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>ATO web page</Text>
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
