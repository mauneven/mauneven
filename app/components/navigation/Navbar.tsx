"use client";
import React from "react";
import {
  Group,
  Container,
  Button,
} from "@mantine/core";
import classes from "../../../public/css/navigation/HeaderMenu.module.css";
import ThemeChanger from "../themes/ThemeChanger";
import { useRouter, usePathname } from "next/navigation";

export function HeaderMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Group mb={100}>
      <header className={classes.header}>
        <Container className={classes.inner}>
          <Group justify="space-between">
            <Button
              variant="subtle"
              color={pathname === "/" ? "yellow" : "gray"}
              onClick={() => router.push("/")}
            >
              Mauneven&apos;s Blog
            </Button>
          </Group>

          <Group>
            <ThemeChanger />
            <Button
              variant="subtle"
              color={pathname === "/about" ? "yellow" : "gray"}
              onClick={() => router.push("/about")}
            >
              About Me
            </Button>
          </Group>
        </Container>
      </header>
    </Group>
  );
}