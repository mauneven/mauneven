"use client";

import { Stack, Title, Timeline, Text, Group, Badge } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";
import {
  IconPencil,
  IconPlaneDeparture,
  IconShoppingBag,
} from "@tabler/icons-react";

const Experience = () => {
  return (
    <Stack gap={30}>
      <Text className={classes.titleDeveloper}>Experience</Text>
      <Timeline color="yellow" active={3} bulletSize={35} lineWidth={2}>
        <Timeline.Item bullet={<IconPlaneDeparture />}>
          <Title size={25} c={"yellow"} pt={0} mt={0}>
            FullStack Software Developer
          </Title>
          <Text fw={700} mt={5}>
            BeBolder - Dec, 2022
          </Text>
          <Text fw={600} mt={5}>
            I collaborate and develop with professional agile teams for the
            creation and modification of functionality in front-end, back-end,
            databases, and DevOps for airline services like Wingo,{" "}
            <Text
              href="https://latinamericanpost.com/business-and-finance/colombias-wingos-phenomenal-passenger-growth-in-2023/"
              component="a"
              target="_blank"
              td="underline"
              inherit
            >
              with over 3.3 million sales in 2023
            </Text>
            . Improving load speeds on requests, modifying logic, and creating
            new functionalities and services.
          </Text>
          <Group mt={10}>
            <Badge size="md" color="gray" variant="light">
              Spring
            </Badge>
            <Badge size="md" color="gray" variant="light">
              React (NextJS)
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Angular
            </Badge>
            <Badge size="md" color="gray" variant="light">
              MySQL
            </Badge>
            <Badge size="md" color="gray" variant="light">
              PostgreSQL
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Docker
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Kubernetes
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Google Cloud (GCP)
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Microservices
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Nginx
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Rest
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Jira
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Scrum
            </Badge>
          </Group>
        </Timeline.Item>

        <Timeline.Item bullet={<IconShoppingBag />}>
          <Title size={25} c={"yellow"} pt={0} mt={0}>
            Lead Developer and Director
          </Title>
          <Text fw={700} mt={5}>
            Want - Jan, 2020
          </Text>
          <Text fw={600} mt={5}>
            I founded and developed a startup with the intention of creating an
            online platform where users can post their needs in a single post,
            and businesses and sellers can offer the best deals, reversing
            traditional online commerce. I led a team of developers, driving
            innovation and effective solutions.
          </Text>
          <Group mt={10}>
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
            <Badge size="md" color="gray" variant="light">
              Notion
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Scrumban
            </Badge>
          </Group>
        </Timeline.Item>

        <Timeline.Item bullet={<IconPencil />}>
          <Title size={25} c={"yellow"} pt={0} mt={0}>
            FreeLancer Developer
          </Title>
          <Text fw={700} mt={5}>
            Various Customers - Jan, 2017 to Dec, 2020
          </Text>
          <Text fw={600} mt={5}>
            I developed and created multiple independent projects, such as
            building blogs, managing concert ticketing, and presentation
            websites for public associations. During these projects, I learned
            Java, JavaScript, TypeScript, Spring, Angular, and React (NextJS).
          </Text>
          <Group mt={10} mb={0}>
            <Badge size="md" color="gray" variant="light">
              Java
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Python
            </Badge>
            <Badge size="md" color="gray" variant="light">
              JavaScript
            </Badge>
            <Badge size="md" color="gray" variant="light">
              HTML
            </Badge>
            <Badge size="md" color="gray" variant="light">
              CSS
            </Badge>
            <Badge size="md" color="gray" variant="light">
              React
            </Badge>
            <Badge size="md" color="gray" variant="light">
              MySQL
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Netlify
            </Badge>
            <Badge size="md" color="gray" variant="light">
              Github Pages
            </Badge>
          </Group>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
};

export default Experience;
