"use client";

import "@mantine/core/styles.css";
import "./globals.css";

import {
  ColorSchemeScript,
  Container,
  MantineProvider,
  Affix,
  Button,
  Transition,
  rem,
} from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { HeaderMenu } from "./components/navigation/Navbar";
import { FooterSocial } from "./components/navigation/FooterSocial";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scroll, scrollTo] = useWindowScroll();

  let isMobileWithLowResolution = false;
  if (typeof window !== "undefined") {
    isMobileWithLowResolution = window.innerWidth < 800;
  }

  return (
    <html lang="en">
      <head>
      <title>Mauneven</title>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            colors: {
              dark: [
                "#e0e0e0",
                "#c2c2c2",
                "#a3a3a3",
                "#858585",
                "#2e2e2e",
                "#2e2e2e",
                "#2e2e2e",
                "#000000",
                "#000000",
                "#000000",
              ],
            },
          }}
          defaultColorScheme="dark"
        >
          <HeaderMenu />
          <Container>{children}</Container>
          <FooterSocial />
          {!isMobileWithLowResolution && (
            <Affix position={{ bottom: 30, right: 20 }}>
              <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                  <Button
                    variant="light"
                    color="gray"
                    leftSection={
                      <IconArrowUp
                        style={{ width: rem(16), height: rem(16) }}
                      />
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
        </MantineProvider>
      </body>
    </html>
  );
}
