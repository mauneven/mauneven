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
      <Title ta={"center"} c={"gray"} className={classes.titleDeveloper}>
        Social
      </Title>
      <Group maw={400} justify="center" align="center" gap={40} mt={40}>
        <Button
          color="gray"
          leftSection={<IconBrandLinkedin />}
          variant="light"
          component="a"
          href="https://www.linkedin.com/in/mauneven/"
          target="_blank"
        >
          Linkedin
        </Button>
        <Button
          color="gray"
          leftSection={<IconBrandX />}
          variant="light"
          component="a"
          href="https://twitter.com/maoneven"
          target="_blank"
        >
          Twitter / X
        </Button>
        <Button
          color="gray"
          leftSection={<IconBrandTelegram />}
          variant="light"
          component="a"
          href="https://t.me/mauneven"
          target="_blank"
        >
          Telegram
        </Button>
        <Button
          color="gray"
          leftSection={<IconBrandSpotify />}
          variant="light"
          component="a"
          href="https://open.spotify.com/user/31wxwnhec6axp3n6yxdnw4z64hwi?si=qizsTYPZR2G4lfqOPSd41A&nd=1&dlsi=debed967c8134a4e"
          target="_blank"
        >
          Spotify
        </Button>
        <Button
          color="gray"
          leftSection={<IconBrandGithub />}
          variant="light"
          component="a"
          href="https://github.com/mauneven"
          target="_blank"
        >
          GitHub
        </Button>
      </Group>
    </Stack>
  );
};

export default Social;
