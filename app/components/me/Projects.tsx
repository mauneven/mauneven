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
import { IconBoxModel, IconBrandGithub, IconLink } from "@tabler/icons-react";
import React from "react";
import classes from "../../../public/css/me/Projects.module.css"

const Projects = () => {
  return (
    <Stack justify="center" align="center" mb={100}>
      <Title size="h1" c={"yellow"}>
        Personal Projects
      </Title>
      <Group maw={1000} justify="center" gap={50}>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder className={classes.projectCard}>
          <Image src={"/image/want-logo.svg"} mt={40} mb={40} />
          <Group justify="space-between" mt="xs" mb="xs">
            <Text fw={500}>Want | 2023</Text>
            <Badge color="violet">In Progress</Badge>
          </Group>

          <Group mt="md" mb="xl">
            <Badge variant="light" color="orange">
              NodeJS
            </Badge>
            <Badge variant="light" color="orange">
              Spring
            </Badge>
            <Badge variant="light" color="orange">
              NextJS
            </Badge>
            <Badge variant="light" color="orange">
              React Native
            </Badge>
            <Badge variant="light" color="orange">
              TypeScript
            </Badge>
            <Badge variant="light" color="orange">
              WebSockets
            </Badge>
            <Badge variant="light" color="orange">
              Rest
            </Badge>
            <Badge variant="light" color="orange">
              AWS
            </Badge>
          </Group>
          <Spoiler maxHeight={115} showLabel="Show more" hideLabel="Hide">
            <Text size="sm" c="dimmed">
              This project is the most advanced and ambitious endeavor to date.
              Want stands as a groundbreaking platform that redifines online
              commerce by enabling users to post their desired items and receive
              offers from sellers, thereby transforming the traditional buying
              and selling experience. Key features include: registration with
              email code verification, login, password encryption,
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
            variant="light"
            color="orange"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconBrandGithub />}
          >
            GitHub Repository
          </Button>
        </Card>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder className={classes.projectCard}>
          <Image src={"/image/cassie.png"} radius={10} />
          <Group justify="space-between" mt="xl" mb="xs">
            <Text fw={500}>CASSIE | 2022</Text>
            <Badge color="green">FINISHED</Badge>
          </Group>

          <Group mt="md" mb="xl">
            <Badge variant="light" color="orange">
              AI
            </Badge>
            <Badge variant="light" color="orange">
              Python
            </Badge>
            <Badge variant="light" color="orange">
              TypeScript
            </Badge>
            <Badge variant="light" color="orange">
              Linux
            </Badge>
          </Group>

          <Text size="sm" c="dimmed">
            CASSIE or Code Analysis System for Software Intelligence and
            Enhancement it&apos;s a Generative Pre-Trained Transformer that uses
            the community GPT-2 with more than 124 Millions of parameters
          </Text>

          <Button
            variant="light"
            color="orange"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconBrandGithub />}
          >
            GitHub Repository
          </Button>
          <Button
            variant="light"
            color="orange"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconBoxModel />}
          >
            LLM | Credits: OpenAI
          </Button>
        </Card>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder className={classes.projectCard}>
          <Image src={"/image/spring.webp"} radius={10} />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>MiniMarket | 2021</Text>
            <Badge color="green">FINISHED</Badge>
          </Group>
          <Group mt="md" mb="xl">
            <Badge variant="light" color="orange">
              Java
            </Badge>
            <Badge variant="light" color="orange">
              Spring
            </Badge>
            <Badge variant="light" color="orange">
              GRADLE
            </Badge>
            <Badge variant="light" color="orange">
              INTELLIJ IDEA
            </Badge>
          </Group>
          <Spoiler maxHeight={89} showLabel="Show more" hideLabel="Hide">
            <Text size="sm" c="dimmed">
              The MiniMarket project is a fundamental Java project leveraging
              the Spring framework and PostgreSQL database. It employs essential
              mappings and attributes inherent to Spring&apos;s functionality.
              This project serves as an excellent demonstration of core Java
              principles, Spring&apos;s powerful features for dependency
              injection, aspect-oriented programming, and data access through
              its integration with PostgreSQL. By utilizing Spring&apos;s robust
              capabilities, developers can efficiently manage dependencies,
              handle database interactions seamlessly, and ensure code
              modularity and scalability. Overall, the MiniMarket project
              provides a solid foundation for understanding and implementing
              Java-based web applications with Spring framework integration.
            </Text>
          </Spoiler>
          <Button
            variant="light"
            color="orange"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconBrandGithub />}
          >
            GitHub Repository
          </Button>
        </Card>
        <Card maw={400} shadow="sm" padding="lg" radius="md" withBorder className={classes.projectCard}>
          <Image src={"/image/ato.png"} radius={10} />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>ATO Web | 2019</Text>
            <Badge color="green">FINISHED</Badge>
          </Group>
          <Group mt="md" mb="xl">
            <Badge variant="light" color="orange">
              HTML
            </Badge>
            <Badge variant="light" color="orange">
              CSS
            </Badge>
            <Badge variant="light" color="orange">
              JavaScript
            </Badge>
            <Badge variant="light" color="orange">
              BootStrap
            </Badge>
          </Group>

          <Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">
            <Text size="sm" c="dimmed">
              The ATO is the Tolimense Association of Orchidology, an
              organization dedicated to the study, dissemination, preservation,
              and in-situ management of orchids found in the Tolima department
              of Colombia. Their work includes the publication of the ATO
              magazine and the organization of events such as the Cattleya
              Trianae Salon. Based in Ibagué, Colombia, the association operates
              at an altitude of 1229 meters above sea level and is located at a
              latitude of 4°26.3334 N and a longitude of 75°13.9332 W.
            </Text>
          </Spoiler>

          <Button
            variant="light"
            color="orange"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconBrandGithub />}
          >
            GitHub Repository
          </Button>
          <Button
            variant="light"
            color="orange"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconLink />}
          >
            Check the page
          </Button>
        </Card>
      </Group>
    </Stack>
  );
};

export default Projects;
