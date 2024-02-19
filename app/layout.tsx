import "@mantine/core/styles.css";

import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import { HeaderMenu } from "./components/navigation/Navbar";

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
        <MantineProvider>
          <Container size={"xl"}>
            <HeaderMenu />
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
