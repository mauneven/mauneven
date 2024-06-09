"use client";

import React from "react";
import { Group, Stack, Table } from "@mantine/core";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const elements = [
    {
      date: "∞",
      title: "Want, the hardest one",
      category: "App",
      url: "/want",
    },
    { date: "2024", title: "Beacon", category: "App", url: "/beacon" },
  ];

  const handleRowClick = (url: string) => {
    router.push(url);
  };

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.date}
      onClick={() => handleRowClick(element.url)}
      style={{
        cursor: "pointer",
        backgroundColor: "var(--mantine-color-body)",
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--select)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--mantine-color-body)")
      }
    >
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>{element.category}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Stack
        bg="var(--mantine-color-body)"
        gap="xl"
        justify="center"
        align="center"
        style={{ minHeight: "80vh" }}
      >
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
      </Stack>
    </>
  );
};

export default Page;
