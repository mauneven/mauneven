"use client";

import {
  Group,
  Burger,
  Text,
  Drawer,
  ScrollArea,
  Button,
  Divider,
  Collapse,
  UnstyledButton,
  Center,
  Box,
  rem,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../../../public/css/navigation/HeaderMenu.module.css";
import ThemeChanger from "../themes/ThemeChanger";

const links = [
  { link: "/about", label: "Experience" },
  { link: "/pricing", label: "Projects" },
  { link: "/learn", label: "Education & Certifications" },
  { link: "/community", label: "Social" },
];

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group justify="space-between">
          <Burger
            opened={opened}
            onClick={toggleDrawer}
            size="sm"
            hiddenFrom="sm"
          />
          <Text>Mauneven</Text>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
            <ThemeChanger />
          </Group>
        </Group>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Menu"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider m={0} />
            {items}
            <Divider
              m={0}
              label="Wanna change your theme?"
              labelPosition="center"
            />
            <Stack justify="center" mt={20} align="center" gap={50}>
              <ThemeChanger />
            </Stack>
          </ScrollArea>
        </Drawer>
      </div>
    </header>
  );
}
