"use client";
import React from "react";
import {
  Group,
  Burger,
  Drawer,
  ScrollArea,
  Divider,
  rem,
  Stack,
  Container,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../../../public/css/navigation/HeaderMenu.module.css";
import ThemeChanger from "../themes/ThemeChanger";
import { useRouter } from "next/navigation";

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const router = useRouter();

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Group justify="space-between">
          <Button
            variant="subtle"
            color={"gray"}
            onClick={() => router.push("/")}
          >
            Mauneven
          </Button>
        </Group>

        <Group>
          <ThemeChanger />
          <Button
            variant="subtle"
            color="gray"
            onClick={() => router.push("/about")}
          >
            About
          </Button>
          <Button
            variant="subtle"
            color="gray"
            onClick={() => router.push("/social")}
          >
            Social
          </Button>
        </Group>
      </Container>
    </header>
  );
}
