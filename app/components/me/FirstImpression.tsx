"use client";

import { Badge, Button, Group, Image, Stack, Text, Title } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconMail,
  IconWorldPin,
} from "@tabler/icons-react";

const FirstImpression = () => {
  return (
    <Stack gap={40}>
      <Group>
        <Group justify="start" align="center" gap={10}>
          <a
            target="_blank"
            href="https://t.me/mauneven"
            className={classes.profileImageContainer}
          >
            <Image
              src={"/image/me.jpg"}
              className={classes.profileImage}
              alt="Profile"
              maw={70}
              mah={70}
            />
          </a>
          <Stack gap={0}>
            <Title ta={"left"} size={35}>
              Mauricio Pulido
            </Title>
            <Group justify="center" wrap="wrap-reverse" gap={20}>
              <Badge
                size="lg"
                color="yellow"
                variant="light"
                leftSection={<IconWorldPin size={20} />}
              >
                Colombia
              </Badge>
              <Badge
                size="lg"
                color="yellow"
                variant="light"
                leftSection={<IconBriefcase size={20} />}
              >
                Be Bolder
              </Badge>
            </Group>
          </Stack>
        </Group>
      </Group>

      <Text fw={600} maw={650} size="lg">
        +4 years of experience. Full-Stack Software Developer creating
        high-quality services used by{" "}
        <Text fw={700} span c="yellow" inherit>
          millions of users
        </Text>{" "}
        annually. Originally from Colombia. Linux/GNU and Open Source lover.
      </Text>

      <Group gap={20}>
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
        <Button
          variant="light"
          color="gray"
          radius={"md"}
          leftSection={<IconMail />}
          component="a"
          href="mailto:mauneven@gmail.com?subject=Hey%2C%20Mauricio&body=Write%20here"
          target="_blank"
        >
          Mail
        </Button>
      </Group>
    </Stack>
  );
};

export default FirstImpression;
