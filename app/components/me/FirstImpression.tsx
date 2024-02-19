import { Button, Group, Stack, Text } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";
import {
  IconBrandDeviantart,
  IconBrandGithubFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const FirstImpression = () => {
  return (
    <Group justify="center" grow>
      <Stack align="left">
        <Text c={"yellow"} className={classes.titleDeveloper}>
          Software Developer
        </Text>
        <Text className={classes.titleName}>Mauricio Pulido</Text>
        <Text>FullStack - Spring & NodeJS | Angular & React (NextJS)</Text>
        <Group mt={50}>
          <Button
            size="xl"
            variant="light"
            radius={"md"}
            leftSection={<IconBrandLinkedin size={34} />}
          >
            LinkedIn
          </Button>
          <Button
            size="xl"
            variant="light"
            color="grape"
            radius={"md"}
            leftSection={<IconBrandGithubFilled size={34} />}
          >
            GitHub
          </Button>
          <Button
            size="xl"
            variant="light"
            color="green"
            radius={"md"}
            leftSection={<IconBrandDeviantart size={34} />}
          >
            CV
          </Button>
        </Group>
      </Stack>
      <Stack align="center">
        <img src={"/image/me.jpg"} className={classes.profileImage} alt={""} />
      </Stack>
    </Group>
  );
};

export default FirstImpression;
