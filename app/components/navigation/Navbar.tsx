"use client";
import React from "react";
import {
  Group,
  Container,
  Button,
} from "@mantine/core";
import classes from "../../../public/css/navigation/HeaderMenu.module.css";
import ThemeChanger from "../themes/ThemeChanger";
import { useRouter } from "next/navigation";

export function HeaderMenu() {

  const router = useRouter();

  return (
    <Group mb={100}>
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
        </Group>
      </Container>
    </header>
    </Group>
  );
}
