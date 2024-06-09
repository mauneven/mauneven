"use client";

import React from "react";
import {
  Affix,
  Button,
  Group,
  Stack,
  Table,
  Transition,
  rem,
} from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { useRouter } from "next/navigation";

const Page = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const router = useRouter();

  let isMobileWithLowResolution = false;
  if (typeof window !== "undefined") {
    isMobileWithLowResolution = window.innerWidth < 800;
  }

  const elements = [
    { date: "∞", title: "Want, the hardest one", category: "App", url: "/want" },
    { date: "2024", title: "Beacon", category: "App", url: "/beacon" },
  ];

  const handleRowClick = (url: string) => {
    router.push(url);
  };

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.date}
      onClick={() => handleRowClick(element.url)}
      style={{ cursor: "pointer", backgroundColor: "var(--mantine-color-body)", transition: "background-color 0.3s" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--select)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--mantine-color-body)")}
    >
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>{element.category}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack bg="var(--mantine-color-body)" gap="xl" justify="center" align="center" style={{ minHeight: "80vh" }}>
      <Group>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Date</Table.Th>
              <Table.Th>Title</Table.Th>
              <Table.Th>Category</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Group>

      {!isMobileWithLowResolution && (
        <Affix position={{ bottom: 30, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                variant="light"
                color="gray"
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