"use client";

import { Stack, Title, Timeline, Text } from "@mantine/core";
import React from "react";

const Experience = () => {
  return (
    <Stack mb={50}>
      <Title mb={20}>Experience</Title>
      <Timeline active={3} bulletSize={50} lineWidth={3}>
        <Timeline.Item>
          <Title pt={0} mt={0}>
            FullStack Software Developer
          </Title>
          <Text variant="link" component="span" inherit>
            bebolder - Airlines Industry
          </Text>
          <Text size="md" mt={4}>
            Spring with Java 11 & 19, React, Angular, Jira & Scrum, MySQL &
            PostgreSQL, Pipelines, Sonar, NGINX, Kubernetes, Docker, GCP.
          </Text>
          <Text size="xs" mt={4}>
            Dec, 2022 - Present
          </Text>
        </Timeline.Item>

        <Timeline.Item>
          <Title pt={0} mt={0}>
            Developer
          </Title>
          <Text variant="link" component="span" inherit>
            Want - Inverse E-commerce
          </Text>
          <Text size="md" mt={4}>
            NodeJS, Spring with java 17, NextJS, MongoDB, Sonar, AWS (EC2) & GCP,
            NGINX, Google Maps, Rest & GraphQL with Apollo Server.
          </Text>
          <Text size="xs" mt={4}>
            2020 - 2022
          </Text>
        </Timeline.Item>

        <Timeline.Item>
          <Title pt={0} mt={0}>
            FreeLancer Developer
          </Title>
          <Text variant="link" component="span" inherit>
            Personal - Multiple Industries
          </Text>
          <Text size="md" mt={4}>
            HTML, CSS, JavaScript, React, RESTFUL API, 
          </Text>
          <Text size="xs" mt={4}>
            2017 - 2020
          </Text>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
};

export default Experience;
