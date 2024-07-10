"use client"
import {
  Group,
  Stack,
  Title,
  Image,
  Text,
  Badge,
  Button,
  Flex,
  Paper,
} from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";
import { IconBook, IconBrandGithub, IconLink } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const Projects = () => {

  const router = useRouter();

  return (
    <Stack gap={40}>
      <Title mb={20} className={classes.titleDeveloper}>
        Personal Projects
      </Title>
      <Flex gap={30} align={"center"} direction={{ base: "column", md: "row" }}>
        <Image maw={280} mah={60} src={"/image/want-logo.svg"}></Image>
        <Group align="flex-start">
          <Title ta={"start"}>Want</Title>
          <Text>
            A platform I founded and developed, aimed at revolutionizing online
            commerce by creating a platform where users can post their needs in
            a single post. Businesses and sellers can then offer the best deals,
            effectively reversing the traditional online marketplace model.
          </Text>
          <Group>
            <Badge size="md" color="gray" variant="light">
              Spring
            </Badge>
            <Badge size="md" color="gray" variant="light">
              NodeJS
            </Badge>
            <Badge size="md" color="gray" variant="light">
              NextJS
            </Badge>
            <Badge size="md" color="gray" variant="light">
              React Native (EXPO)
            </Badge>
            <Badge size="md" color="gray" variant="light">
              MongoDB
            </Badge>
            <Badge size="md" color="gray" variant="light">
              ATLAS
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Docker
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Microservices
            </Badge>
            <Badge size="md" color="gray" variant="light">
              AWS
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Nginx
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Rest
            </Badge>
            <Badge size="md" color="gray" variant="light">
              GraphQL (Apollo Server)
            </Badge>
          </Group>
          <Button
            variant="light"
            color="yellow"
            radius={"md"}
            leftSection={<IconBrandGithub />}
            component="a"
            href="https://github.com/mauneven/want"
            target="_blank"
          >
            Repository
          </Button>
          <Button
            variant="light"
            color="yellow"
            radius={"md"}
            leftSection={<IconBook />}
            onClick={() => router.push("/want")}
          >
            Read the story
          </Button>
        </Group>
      </Flex>
      <Flex gap={30} direction={{ base: "column", md: "row" }} align={"center"}>
        <Paper maw={300} withBorder p={25} shadow="xl">
          <Title ta={"center"} size={30}>
            Code Analysis System for Software Intelligence and Enhancement
          </Title>
        </Paper>
        <Group align="flex-start">
          <Title ta={"start"}>CASSIE</Title>
          <Text>
            CASSIE, or Code Analysis System for Software Intelligence and
            Enhancement, is a natural language model designed for code analysis.
            It is based on the GPT-2 model with 124 million parameters, released
            by OpenAI. CASSIE was created to assist in identifying problems in
            code and providing explanations without the need to consult
            extensive documentation. By leveraging the capabilities of GPT-2,
            CASSIE can understand and process natural language inputs,
            translating them into actionable insights for software development.
          </Text>
          <Group>
            <Badge size="md" color="gray" variant="light">
              Ai
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Python
            </Badge>
            <Badge size="md" color="gray" variant="light">
              TensorFlow
            </Badge>
            <Badge size="md" color="gray" variant="light">
              PyTorch
            </Badge>
            <Badge size="md" color="gray" variant="light">
              GPT-2
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Hugging Face Transformers
            </Badge>
            <Badge size="md" color="gray" variant="light">
              NLTK
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Pandas
            </Badge>
            <Badge size="md" color="gray" variant="light">
              NumPy
            </Badge>
          </Group>
          <Button
            variant="light"
            color="yellow"
            radius={"md"}
            leftSection={<IconBrandGithub />}
            component="a"
            href="https://github.com/openai/gpt-2"
            target="_blank"
          >
            GPT-2 MODEL
          </Button>
          <Button
            variant="light"
            color="yellow"
            radius={"md"}
            leftSection={<IconBrandGithub />}
            component="a"
            href="https://github.com/mauneven/cassie"
            target="_blank"
          >
            Repository
          </Button>
          <Button
            variant="light"
            color="yellow"
            radius={"md"}
            leftSection={<IconBook />}
            onClick={() => router.push("/cassie")}
          >
            Read the story
          </Button>
        </Group>
      </Flex>
      <Flex gap={30} direction={{ base: "column", md: "row" }} align={"center"}>
        <Image maw={240} mah={250} src={"/image/beacon.ico"}></Image>
        <Group align="flex-start">
          <Title ta={"start"}>Beacon</Title>
          <Text>
            Beacon is a web app designed as a reminder system for maintaining
            healthy habits. It sends non-intrusive reminders to help users
            practice good posture, drink water, stretch, relax their eyes, and
            more. These reminders are particularly beneficial for individuals
            who spend long hours on the computer, ensuring they maintain good
            habits throughout their workday.
          </Text>
          <Group>
            <Badge size="md" color="gray" variant="light">
              NEXTJS
            </Badge>
            <Badge size="md" color="gray" variant="light">
              REACT
            </Badge>
            <Badge size="md" color="gray" variant="light">
              MANTINE
            </Badge>
            <Badge size="md" color="gray" variant="light">
              TYPESCRIPT
            </Badge>
            <Badge size="md" color="gray" variant="light">
              GIT
            </Badge>
            <Badge size="md" color="gray" variant="light">
              VERCEL
            </Badge>
          </Group>
          <Button
            variant="light"
            color="yellow"
            radius={"md"}
            leftSection={<IconLink />}
            component="a"
            href="https://beacon-reminder.vercel.app/"
            target="_blank"
          >
            Beacon Web Application
          </Button>
          <Button
            variant="light"
            color="yellow"
            radius={"md"}
            leftSection={<IconBrandGithub />}
            component="a"
            href="https://github.com/mauneven/beacon"
            target="_blank"
          >
            Repository
          </Button>
          <Button
            variant="light"
            color="yellow"
            radius={"md"}
            leftSection={<IconBook />}
            onClick={() => router.push("/beacon")}
          >
            Read the story
          </Button>
        </Group>
      </Flex>
    </Stack>
  );
};

export default Projects;
