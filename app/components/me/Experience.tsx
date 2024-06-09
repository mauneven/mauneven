"use client";

import { Stack, Title, Timeline, Text, Group, Badge } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";

const Experience = () => {
  return (
    <Stack mb={50} gap={30} justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Text c={"gray"} className={classes.titleDeveloper}>Experience</Text>
      <Timeline color="gray" active={3} bulletSize={50} lineWidth={4}>
        <Timeline.Item>
          <Title pt={0} mt={0}>
            FullStack Software Developer
          </Title>
          <Text size="xl" mt={20} mb={20}>
            BeBolder - Airlines Industry 
          </Text>
          <Group maw={800}>
            <Badge size="lg" color="gray" variant="light">Spring</Badge>
            <Badge size="lg" color="gray" variant="light">React (NextJS)</Badge>
            <Badge size="lg" color="gray" variant="light">Angular</Badge>
            <Badge size="lg" color="gray" variant="light">MySQL</Badge>
            <Badge size="lg" color="gray" variant="light">PostgreSQL</Badge>
            <Badge size="lg" color="gray" variant="light">Docker</Badge>
            <Badge size="lg" color="gray" variant="light">Kubernetes</Badge>
            <Badge size="lg" color="gray" variant="light">Google Cloud (GCP)</Badge>
            <Badge size="lg" color="gray" variant="light">Microservices</Badge>
            <Badge size="lg" color="gray" variant="light">Nginx</Badge>
            <Badge size="lg" color="gray" variant="light">Rest</Badge>
            <Badge size="lg" color="gray" variant="light">Jira</Badge>
            <Badge size="lg" color="gray" variant="light">Scrum</Badge>
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
            <Badge size="lg" color="gray" variant="light">Spring</Badge>
            <Badge size="lg" color="gray" variant="light">NodeJS</Badge>
            <Badge size="lg" color="gray" variant="light">NextJS</Badge>
            <Badge size="lg" color="gray" variant="light">React Native (EXPO)</Badge>
            <Badge size="lg" color="gray" variant="light">MongoDB</Badge>
            <Badge size="lg" color="gray" variant="light">ATLAS</Badge>
            <Badge size="lg" color="gray" variant="light">Docker</Badge>
            <Badge size="lg" color="gray" variant="light">Microservices</Badge>
            <Badge size="lg" color="gray" variant="light">AWS</Badge>
            <Badge size="lg" color="gray" variant="light">Nginx</Badge>
            <Badge size="lg" color="gray" variant="light">Rest</Badge>
            <Badge size="lg" color="gray" variant="light">GraphQL (Apollo Server)</Badge>
            <Badge size="lg" color="gray" variant="light">Notion</Badge>
            <Badge size="lg" color="gray" variant="light">Scrumban</Badge>
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
            <Badge size="lg" color="gray" variant="light">Java</Badge>
            <Badge size="lg" color="gray" variant="light">Python</Badge>
            <Badge size="lg" color="gray" variant="light">JavaScript</Badge>
            <Badge size="lg" color="gray" variant="light">HTML</Badge>
            <Badge size="lg" color="gray" variant="light">CSS</Badge>
            <Badge size="lg" color="gray" variant="light">React</Badge>
            <Badge size="lg" color="gray" variant="light">MySQL</Badge>
            <Badge size="lg" color="gray" variant="light">Netlify</Badge>
            <Badge size="lg" color="gray" variant="light">Github Pages</Badge>
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