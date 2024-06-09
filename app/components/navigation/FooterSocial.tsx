"use client";
import { Container, Group, ActionIcon, rem, Button } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandSpotify,
  IconBrandTelegram,
  IconBrandX,
  IconBrandTumblr,
} from "@tabler/icons-react";
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
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://open.spotify.com/user/31wxwnhec6axp3n6yxdnw4z64hwi?si=qizsTYPZR2G4lfqOPSd41A&nd=1&dlsi=debed967c8134a4e"
            target="_blank"
          >
            <IconBrandSpotify
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://t.me/mauneven"
            target="_blank"
          >
            <IconBrandTelegram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://twitter.com/maoneven"
            target="_blank"
          >
            <IconBrandX
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://twitter.com/maoneven"
            target="_blank"
          >
            <IconBrandTumblr
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}