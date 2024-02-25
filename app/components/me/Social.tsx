import { Stack, Title, Button, Group } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";

const Social = () => {
  return (
    <Stack justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Title ta={"center"} c={"yellow"} className={classes.titleDeveloper}>
        Social
      </Title>
      <Group maw={400} justify="center" align="center" gap={40} mt={40}>
        <Button
          color="yellow"
          leftSection={<IconBrandLinkedin />}
          variant="light"
        >
          Linkedin
        </Button>
        <Button color="yellow" leftSection={<IconBrandX />} variant="light">
          Twitter / X
        </Button>
        <Button
          color="yellow"
          leftSection={<IconBrandTelegram />}
          variant="light"
        >
          Telegram
        </Button>
        <Button
          color="yellow"
          leftSection={<IconBrandSpotify />}
          variant="light"
        >
          Spotify
        </Button>
        <Button
          color="yellow"
          leftSection={<IconBrandGithub />}
          variant="light"
        >
          GitHub
        </Button>
      </Group>
    </Stack>
  );
};

export default Social;
