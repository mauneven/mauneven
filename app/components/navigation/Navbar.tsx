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

const links = [
  { link: "/", label: "Home" },
  { link: "/", label: "Experience" },
  { link: "/", label: "Projects" },
  { link: "/", label: "Skills" },
  { link: "/", label: "Education & Certifications" },
  { link: "/", label: "Social" },
];

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    label: string
  ) => {
    event.preventDefault();
    closeDrawer();

    let sectionId = "";
    switch (label) {
      case "Home":
        sectionId = "home";
        break;
      case "Experience":
        sectionId = "experience";
        break;
      case "Projects":
        sectionId = "projects";
        break;
      case "Skills":
        sectionId = "skills";
        break;
      case "Education & Certifications":
        sectionId = "education";
        break;
      case "Social":
        sectionId = "social";
        break;
      default:
        console.log("Section not found");
    }

    const section = document.getElementById(sectionId);
    if (section) {
      if (label !== "Experience" && label !== "Social") {
        const offset = 85;
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      } else {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
        handleLinkClick(event, link.label)
      }
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Group justify="space-between">
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            size="sm"
            hiddenFrom="sm"
          />
          <Button
            variant="transparent"
            c={"yellow"}
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleLinkClick(event, "Home")
            }
          >
            Mauneven
          </Button>
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
      </Container>
    </header>
  );
}
