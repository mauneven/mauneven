import { Button, Flex, Group, Paper, Stack, Text } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";
import {
  IconArrowDown,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconFileInfo,
} from "@tabler/icons-react";

const FirstImpression = () => {
  return (
    <Stack
      justify="center"
      align="center"
      gap={50}
      style={{ minHeight: "93vh" }}
    >
      <Stack justify="center" align="center" gap={0}>
        <Text variant="gradient"
      gradient={{ from: 'yellow', to: 'orange', deg: 227 }} className={classes.titleDeveloper}>
          Software Developer
        </Text>
        <Text className={classes.titleName}>Mauricio Pulido</Text>
        <Group>
          <Button
            variant="light"
            radius={"md"}
            leftSection={<IconBrandLinkedin  />}
          >
            LinkedIn
          </Button>
          <Button
            variant="light"
            color="grape"
            radius={"md"}
            leftSection={<IconBrandGithubFilled  />}
          >
            GitHub
          </Button>
          <Button
            variant="light"
            color="green"
            radius={"md"}
            leftSection={<IconFileInfo  />}
          >
            CV
          </Button>
        </Group>
      </Stack>
      <Flex align="center" justify="center" wrap="wrap" gap={50}>
        <img src={"/image/me.jpg"} className={classes.profileImage} alt={""} />
        <Paper shadow="xl" radius="md" p="xl" maw={300} withBorder>
          <Text className={classes.infoText}>
            Developing software isn't just about coding; it's about
            understanding the business and environment you're in, to bring
            solutions to the problems faced by the people within it,{" "}
            <Text span c="blue" inherit>
              creating something people want
            </Text>
          </Text>
        </Paper>
      </Flex>
      <Button variant="light" radius={"md"}>
        <IconArrowDown />
      </Button>
    </Stack>
  );
};

export default FirstImpression;
