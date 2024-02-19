import React from "react";
import FirstImpression from "./components/me/FirstImpression";
import Experience from "./components/me/Experience";
import { Divider, Stack } from "@mantine/core";

const page = () => {
  return (
    <Stack bg="var(--mantine-color-body)" mt={60} gap="xl">
      <FirstImpression />
      <Divider mt={50} mb={50}/>
      <Experience />
    </Stack>
  );
};

export default page;
