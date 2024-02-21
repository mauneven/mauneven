"use client";

import { Stack, Title, Timeline, Text, Group, Badge } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";

const Experience = () => {
  return (
    <Stack mb={50} gap={30} justify="center" align="center">
      <Text c={"yellow"} className={classes.titleDeveloper}>Experience</Text>
      <Timeline color="yellow" active={3} bulletSize={50} lineWidth={4}>
        <Timeline.Item>
          <Title pt={0} mt={0}>
            FullStack Software Developer
          </Title>
          <Text size="xl" mt={20} mb={20}>
            BeBolder - Airlines Industry
          </Text>
          <Group maw={800}>
            <Badge size="lg" color="green" variant="light">Spring</Badge>
            <Badge size="lg" color="blue" variant="light">React (NextJS)</Badge>
            <Badge size="lg" color="blue" variant="light">Angular</Badge>
            <Badge size="lg" color="violet" variant="light">MySQL</Badge>
            <Badge size="lg" color="violet" variant="light">PostgreSQL</Badge>
            <Badge size="lg" color="yellow" variant="light">Docker</Badge>
            <Badge size="lg" color="yellow" variant="light">Kubernetes</Badge>
            <Badge size="lg" color="yellow" variant="light">Google Cloud (GCP)</Badge>
            <Badge size="lg" color="yellow" variant="light">Microservices</Badge>
            <Badge size="lg" color="yellow" variant="light">Nginx</Badge>
            <Badge size="lg" color="pink" variant="light">Rest</Badge>
            <Badge size="lg" color="red" variant="light">Jira</Badge>
            <Badge size="lg" color="red" variant="light">Scrum</Badge>
          </Group>
          <Text size="sm" mt={20} mb={20}>
            Dec, 2022 - Present
          </Text>
        </Timeline.Item>

        <Timeline.Item>
          <Title pt={0} mt={0}>
            Web & Mobile Developer
          </Title>
          <Text size="xl" mt={20} mb={20}>
            Want - Inverse E-commerce
          </Text>
          <Group maw={800}>
            <Badge size="lg" color="green" variant="light">Spring</Badge>
            <Badge size="lg" color="green" variant="light">NodeJS</Badge>
            <Badge size="lg" color="blue" variant="light">NextJS</Badge>
            <Badge size="lg" color="blue" variant="light">React Native (EXPO)</Badge>
            <Badge size="lg" color="violet" variant="light">MongoDB</Badge>
            <Badge size="lg" color="violet" variant="light">ATLAS</Badge>
            <Badge size="lg" color="yellow" variant="light">Docker</Badge>
            <Badge size="lg" color="yellow" variant="light">Microservices</Badge>
            <Badge size="lg" color="yellow" variant="light">AWS</Badge>
            <Badge size="lg" color="yellow" variant="light">Nginx</Badge>
            <Badge size="lg" color="pink" variant="light">Rest</Badge>
            <Badge size="lg" color="pink" variant="light">GraphQL (Apollo Server)</Badge>
            <Badge size="lg" color="red" variant="light">Notion</Badge>
            <Badge size="lg" color="red" variant="light">Scrumban</Badge>
          </Group>
          <Text size="sm" mt={20} mb={20}>
            2020 - 2022
          </Text>
        </Timeline.Item>

        <Timeline.Item>
          <Title pt={0} mt={0}>
            FreeLancer Developer
          </Title>
          <Text size="xl" mt={20} mb={20}>
            Personal - Multiple categories (E-commerce, Blogs, Concert management)
          </Text>
          <Group maw={800}>
            <Badge size="lg" color="lime" variant="light">Java</Badge>
            <Badge size="lg" color="lime" variant="light">Python</Badge>
            <Badge size="lg" color="lime" variant="light">JavaScript</Badge>
            <Badge size="lg" color="blue" variant="light">HTML</Badge>
            <Badge size="lg" color="blue" variant="light">CSS</Badge>
            <Badge size="lg" color="blue" variant="light">React</Badge>
            <Badge size="lg" color="violet" variant="light">MySQL</Badge>
            <Badge size="lg" color="yellow" variant="light">Netlify</Badge>
            <Badge size="lg" color="yellow" variant="light">Github Pages</Badge>
          </Group>
          <Text size="sm" mt={20} mb={20}>
            2017 - 2020
          </Text>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
};

export default Experience;