"use client";

import React from "react";
import FirstImpression from "./components/me/FirstImpression";
import Experience from "./components/me/Experience";
import { Affix, Button, Stack, Transition, rem } from "@mantine/core";
import Projects from "./components/me/Projects";
import EducationAndCertifications from "./components/me/EducationAndCertifications";
import Social from "./components/me/Social";
import Skills from "./components/me/Skills";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";

const Page = () => {
  const [scroll, scrollTo] = useWindowScroll();

  // Check if the device is a mobile and resolution is less than 800
  let isMobileWithLowResolution = false;
  if (typeof window !== "undefined") {
    isMobileWithLowResolution = window.innerWidth < 800;
  }

  return (
    <Stack bg="var(--mantine-color-body)" gap="xl">
      {!isMobileWithLowResolution && (
        <Affix position={{ bottom: 30, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                variant="light"
                color="yellow"
                leftSection={
                  <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
                }
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                Scroll to top
              </Button>
            )}
          </Transition>
        </Affix>
      )}
      <FirstImpression />
      <Experience />
      <Projects />
      <Skills />
      <EducationAndCertifications />
      <Social />
    </Stack>
  );
};

export default Page;
