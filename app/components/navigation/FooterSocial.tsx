"use client";
import { Container, Group, ActionIcon, rem, Text, Button } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import classes from "../../../public/css/navigation/FooterSocial.module.css";
import { useRouter } from "next/navigation";

export function FooterSocial() {
  const router = useRouter();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Button
          variant="subtle"
          color={"gray"}
          onClick={() => router.push("/")}
        >
          Mauneven
        </Button>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/mauneven/"
            target="_blank"
          >
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://github.com/mauneven"
            target="_blank"
          >
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
