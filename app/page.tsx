"use client";

import React from "react";
import { Affix, Button, Stack, Transition, rem } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";

const Page = () => {
  const [scroll, scrollTo] = useWindowScroll();

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
    </Stack>
  );
};

export default Page;
