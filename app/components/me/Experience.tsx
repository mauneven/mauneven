"use client";

import { Stack, Title, Timeline, Text } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css"

const Experience = () => {
  return (
    <Stack mb={50} gap={30} justify="center" align="center">
      <Text c={"yellow"} className={classes.titleDeveloper}>Experience</Text>
      <Timeline active={3} bulletSize={50} lineWidth={4}>
        <Timeline.Item>
          <Title pt={0} mt={0}>
            FullStack Software Developer
          </Title>
          <Text variant="link" component="span" inherit>
            BeBolder - Airlines Industry
          </Text>
          <Text size="md" mt={4}>
            Spring with Java 19, React, Angular, Jira & Scrum, MySQL &
            PostgreSQL, Pipelines, Sonar, REST, NGINX, Kubernetes, Docker, GCP.
          </Text>
          <Text size="xs" mt={4}>
            Dec, 2022 - Present
          </Text>
        </Timeline.Item>

        <Timeline.Item lineVariant="dotted">
          <Title pt={0} mt={0}>
            Developer
          </Title>
          <Text variant="link" component="span" inherit>
            Want - Inverse E-commerce
          </Text>
          <Text size="md" mt={4}>
            NodeJS, Spring with java 11 & 17, NextJS, MongoDB, Sonar, AWS (EC2) & GCP,
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
            Personal - Multiple categories (E-commerce, Blogs, concert management)
          </Text>
          <Text size="md" mt={4}>
            WordPress, HTML, CSS, JavaScript, Java with Spring, React, Angular, Vue, RESTFUL API.
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
