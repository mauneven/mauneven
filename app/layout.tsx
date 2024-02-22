import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import { HeaderMenu } from "./components/navigation/Navbar";
import { FooterSocial } from "./components/navigation/FooterSocial";

export const metadata = {
  title: "Maunenven's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            colors: {
              // override dark colors here to change them for all components
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
        >
          <HeaderMenu />
          <Container fluid>{children}</Container>
          <FooterSocial />
        </MantineProvider>
      </body>
    </html>
  );
}
