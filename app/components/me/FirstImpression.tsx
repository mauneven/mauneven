"use client";

import { Badge, Button, Flex, Group, Paper, Stack, Text } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
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
    <Stack justify="center" align="center">
      <Text mb={0} c={"gray"} className={classes.titleDeveloper}>
        About
      </Text>
      <Stack justify="center" align="center" gap={20}>
        <Stack gap={2}>
          <Text ta={"center"} className={classes.titleName}>
            Mauricio Pulido
          </Text>
          <Text ta={"center"} size="xl" fw={600} mb={10}>
            Software Developer
          </Text>
        </Stack>

        <Stack justify="center" gap={20}>
          <Group justify="center" gap={20}>
            <Button
              variant="light"
              color="gray"
              radius={"md"}
              leftSection={<IconBrandLinkedin />}
              component="a"
              href="https://www.linkedin.com/in/mauneven/"
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              variant="light"
              color="gray"
              radius={"md"}
              leftSection={<IconBrandGithub />}
              component="a"
              href="https://github.com/mauneven"
              target="_blank"
            >
              GitHub
            </Button>
          </Group>
          <Group justify="space-between" wrap="wrap-reverse">
            <Badge
              size="xl"
              color="gray"
              variant="light"
              leftSection={<IconWorldPin />}
            >
              Colombia
            </Badge>
            <Badge
              size="xl"
              color="gray"
              variant="light"
              leftSection={<IconBriefcase />}
            >
              Be Bolder
            </Badge>
          </Group>
        </Stack>
      </Stack>
      <Flex align="center" justify="center" wrap="wrap" gap={50}>
        <img src={"/image/me.jpg"} className={classes.profileImage} alt={""} />
        <Paper shadow="xl" radius="md" p="xl" maw={300} withBorder>
          <Text className={classes.infoText}>
            Developing software isn&apos;t just about coding; it&apos;s about
            understanding the business and environment you&apos;re in, to bring
            solutions to the problems faced by the people within it,{" "}
            <Text span c="gray" inherit>
              creating something people want.
            </Text>
          </Text>
        </Paper>
      </Flex>
    </Stack>
  );
};

export default FirstImpression;
