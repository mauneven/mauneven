import React from "react";
import FirstImpression from "./components/me/FirstImpression";
import Experience from "./components/me/Experience";
import { Stack } from "@mantine/core";
import Projects from "./components/me/Projects";
import EducationAndCertifications from "./components/me/EducationAndCertifications";
import Social from "./components/me/Social";

const page = () => {
  return (
    <Stack bg="var(--mantine-color-body)" gap="xl">
      <FirstImpression />
      <Experience />
      <Projects/>
      <EducationAndCertifications/>
      <Social/>
    </Stack>
  );
};

export default page;
