import {
  Title,
  Text,
  Stack,
  Card,
  Group,
  Button,
  Badge,
  Spoiler,
} from "@mantine/core";
import { IconBoxModel, IconBrandGithub, IconLink } from "@tabler/icons-react";
import React from "react";
import classes from "../../../public/css/me/Projects.module.css";
import firstImpressionCss from "../../../public/css/me/FirstImpression.module.css";

const Projects = () => {
  return (
    <Stack
      justify="center"
      align="center"
      mb={100}
      style={{ minHeight: "100vh" }}
    >
      <Title
        size="h1"
        c={"yellow"}
        className={firstImpressionCss.titleDeveloper}
      >
        Personal Projects
      </Title>
      <Group maw={1000} justify="center" gap={50} mt={40}>
        <Card
          maw={400}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className={classes.projectCard}
        >
          <Group justify="center">
            <img
              alt="want"
              className={classes.projectImage}
              src={"/image/want-logo-c.png"}
            />
          </Group>
          <Group justify="space-between" mt="xs" mb="xs">
            <Text fw={500} mt="xl" mb="xs">WANT | 2023</Text>
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
          <Spoiler maxHeight={54} showLabel="Show more" hideLabel="Hide">
            <Text size="sm" c="dimmed">
              This project is the most advanced and ambitious endeavor to date.
              Want stands as a groundbreaking platform that redifines online
              commerce by enabling users to post their desired items and receive
              offers from sellers, thereby transforming the traditional buying
              and selling experience. Key features include: registration with
              email code verification, login, password encryption, password
              change functionality, real-time notifications through WebSockets,
              post creation and editing capabilities, offer creation, viewing
              offers on posted items, deletion of made offers and posted items,
              reporting of posts and offers, reporting and banning of accounts.
              All of these functions are facilitated through a highly
              sophisticated geospatial system, which not only displays posts in
              preferred categories but also allows users to set their desired
              radius in kilometers within their country, state, or city using
              latitude and longitude coordinates and IP-API geospatial location.
              Furthermore, the platform supports multiple languages including
              English, Spanish, and French.
            </Text>
          </Spoiler>
          <Button
            variant="light"
            color="orange"
            fullWidth
            mt="md"
            radius="md"
            leftSection={<IconLink />}
            component="a"
            href="https://want-landing.vercel.app/"
            target="_blank"
          >
            Check landing
          </Button>
        </Card>
        <Card
          maw={400}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className={classes.projectCard}
        >
          <Group justify="center">
            <img
              src={"/image/cassie.png"}
              alt="cassie"
              className={classes.projectImage}
            />
          </Group>
          <Group justify="space-between" mt="xl" mb="xs">
            <Text fw={500}>CASSIE | 2022</Text>
            <Badge color="green">FINISHED</Badge>
          </Group>

          <Group mt="md" mb="xl">
            <Badge variant="light" color="orange">
              AI
            </Badge>
            <Badge variant="light" color="orange">
              LLM
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
            component="a"
            target="_blank"
            href="https://github.com/mauneven/cassie"
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
            component="a"
            target="_blank"
            href="https://huggingface.co/openai-community/gpt2"
          >
            LLM | Credits: OpenAI
          </Button>
        </Card>
        <Card
          maw={400}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className={classes.projectCard}
        >
          <Group justify="center">
            <img
              src={"/image/spring.webp"}
              className={classes.projectImage}
              alt="spring"
            />
          </Group>
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
          <Spoiler maxHeight={150} showLabel="Show more" hideLabel="Hide">
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
            component="a"
            target="_blank"
            href="https://github.com/mauneven/minimarket"
          >
            GitHub Repository
          </Button>
        </Card>
        <Card
          maw={400}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className={classes.projectCard}
        >
          <Group justify="center">
            <img
              src={"/image/ato.png"}
              className={classes.projectImage}
              alt="ato"
            />
          </Group>
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
            component="a"
            target="_blank"
            href="https://github.com/mauneven/Atorquideas"
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
            component="a"
            target="_blank"
            href="https://mauneven.github.io/Atorquideas/"
          >
            Check the page
          </Button>
        </Card>
      </Group>
    </Stack>
  );
};

export default Projects;
