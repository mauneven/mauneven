import { Group, Paper, Stack, Title, Image, Text } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";

const Skills = () => {
  return (
    <Stack justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Title c={"gray"} className={classes.titleDeveloper}>
        Skills & Stacks
      </Title>
      <Group maw={900} justify="center" mt={40}>
        <Paper shadow="xs" p={"lg"} withBorder>
          <Title c={"gray"} size={"h2"} ta={"center"}>
            Languages
          </Title>
          <Group gap={20} mt={20} maw={240} justify="center">
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/java.png"}
                className={classes.iconImage}
              ></Image>
              <Text>Java</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/ts.png"}
                className={classes.iconImage}
              ></Image>
              <Text>TypeScript</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/js.png"}
                className={classes.iconImage}
              ></Image>
              <Text>JavaScript</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/python.png"}
                className={classes.iconImage}
              ></Image>
              <Text>Python</Text>
            </Stack>
          </Group>
        </Paper>
        <Paper shadow="xs" p={"lg"} withBorder>
          <Title c={"gray"} size={"h2"} ta={"center"}>
            Backend
          </Title>
          <Group gap={20} mt={20} maw={240} justify="center">
            <Stack justify="center" align="center" gap={20}>
              <Image
                mt={5}
                src={"/image/springLogo.png"}
                className={classes.iconImage}
              ></Image>
              <Text mt={2}>Spring</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                p={10}
                src={"/image/node.png"}
                className={classes.iconImage}
              ></Image>
              <Text>NodeJS</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                mt={5}
                src={"/image/springboot.png"}
                className={classes.iconImage}
              ></Image>
              <Text mt={2}>Boot</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/express.png"}
                className={classes.iconImage}
                p={2}
              ></Image>
              <Text>Express</Text>
            </Stack>
          </Group>
        </Paper>
        <Paper shadow="xs" p={"lg"} withBorder>
          <Title c={"gray"} size={"h2"} ta={"center"}>
            Frontend
          </Title>
          <Group gap={20} mt={20} maw={240} justify="center">
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/react.webp"}
                className={classes.iconImage}
              ></Image>
              <Text>React</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/angular.png"}
                className={classes.iconImage}
              ></Image>
              <Text>Angular</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/nextjs.png"}
                className={classes.iconImage}
              ></Image>
              <Text>NextJS</Text>
            </Stack>
          </Group>
        </Paper>
        <Paper shadow="xs" p={"lg"} withBorder>
          <Title c={"gray"} size={"h2"} ta={"center"}>
            DataBase
          </Title>
          <Group gap={20} mt={20} maw={240} justify="center">
            <Stack justify="center" align="center">
              <Image
                mt={20}
                src={"/image/mysql.svg"}
                className={classes.iconImage}
              ></Image>
              <Text mt={20}>MySQL</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/mongodb.png"}
                className={classes.iconImage}
              ></Image>
              <Text>MongoDB</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/redis.png"}
                className={classes.iconImage}
              ></Image>
              <Text>Redis</Text>
            </Stack>
          </Group>
        </Paper>
        <Paper shadow="xs" p={"lg"} withBorder>
          <Title c={"gray"} size={"h2"} ta={"center"}>
            Cloud
          </Title>
          <Group gap={20} mt={20} maw={240} justify="center">
            <Stack justify="center" align="center">
              <Image
                mt={20}
                src={"/image/aws.png"}
                className={classes.iconImage}
              ></Image>
              <Text mt={20}>AWS</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                p={4}
                src={"/image/gcp.png"}
                className={classes.iconImage}
              ></Image>
              <Text mt={5}>Google Cloud</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/vercel.png"}
                className={classes.iconImage}
              ></Image>
              <Text>Vercel</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/kubernetes.png"}
                className={classes.iconImage}
              ></Image>
              <Text>Kubernetes</Text>
            </Stack>
          </Group>
        </Paper>
        <Paper shadow="xs" p={"lg"} withBorder>
          <Title c={"gray"} size={"h2"} ta={"center"}>
            Tools
          </Title>
          <Group gap={20} mt={20} maw={240} justify="center">
            <Stack justify="center" align="center">
              <Image
                src={"/image/git.png"}
                className={classes.iconImage}
              ></Image>
              <Text>Git</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/docker.png"}
                className={classes.iconImage}
              ></Image>
              <Text>Docker</Text>
            </Stack>
            <Stack justify="center" align="center" gap={20}>
              <Image
                src={"/image/gitlab.svg"}
                className={classes.iconImage}
              ></Image>
              <Text>GitLab</Text>
            </Stack>
            <Stack justify="center" align="center" gap={15}>
              <Image
                p={5}
                src={"/image/linux.png"}
                className={classes.iconImage}
              ></Image>
              <Text>Linux</Text>
            </Stack>
          </Group>
        </Paper>
      </Group>
    </Stack>
  );
};

export default Skills;
