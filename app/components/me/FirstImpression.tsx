"use client";

import { Badge, Button, Flex, Group, Paper, Stack, Text } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";
import {
  IconArrowDown,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBriefcase,
  IconFileInfo,
  IconWorldPin,
} from "@tabler/icons-react";

const FirstImpression = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 1,
      behavior: "smooth",
    });
  };

  return (
    <Stack
      justify="center"
      align="center"
      gap={40}
      style={{ minHeight: "90vh" }}
    >
      <Stack justify="center" align="center" gap={10}>
        <Text c={"yellow"} className={classes.titleDeveloper}>
          Software Developer
        </Text>
        <Group justify="space-between" wrap="wrap-reverse">
          <Badge
            size="xl"
            color="green"
            variant="light"
            leftSection={<IconWorldPin />}
          >
            Colombia
          </Badge>
          <Badge
            size="xl"
            color="orange"
            variant="light"
            leftSection={<IconBriefcase />}
          >
            Be Bolder
          </Badge>
        </Group>
        <Text className={classes.titleName}>Mauricio Pulido</Text>
        <Group justify="center" gap={20}>
          <Button
            variant="light"
            radius={"md"}
            leftSection={<IconBrandLinkedin />}
          >
            LinkedIn
          </Button>
          <Button
            variant="light"
            color="grape"
            radius={"md"}
            leftSection={<IconBrandGithubFilled />}
          >
            GitHub
          </Button>
          <Button
            variant="light"
            color="lime"
            radius={"md"}
            leftSection={<IconFileInfo />}
          >
            CV
          </Button>
        </Group>
      </Stack>
      <Flex align="center" justify="center" wrap="wrap" gap={50}>
        <img src={"/image/me.jpg"} className={classes.profileImage} alt={""} />
        <Paper shadow="xl" radius="md" p="xl" maw={300} withBorder>
          <Text className={classes.infoText}>
            Developing software isn&apos;t just about coding; it&apos;s about
            understanding the business and environment you&apos;re in, to bring
            solutions to the problems faced by the people within it,{" "}
            <Text span c="yellow" inherit>
              creating something people want.
            </Text>
          </Text>
        </Paper>
      </Flex>
      <Button variant="light" radius={"md"} onClick={handleScrollDown}>
        <IconArrowDown />
      </Button>
    </Stack>
  );
};

export default FirstImpression;
