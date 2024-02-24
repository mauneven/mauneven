import React from "react";
import FirstImpression from "./components/me/FirstImpression";
import Experience from "./components/me/Experience";
import { Stack } from "@mantine/core";
import Projects from "./components/me/Projects";
import EducationAndCertifications from "./components/me/EducationAndCertifications";
import Social from "./components/me/Social";
import Skills from "./components/me/Skills";

const page = () => {
  return (
    <Stack bg="var(--mantine-color-body)" gap="xl">
      <FirstImpression />
      <Experience />
      <Projects/>
      <Skills/>
      <EducationAndCertifications/>
      <Social/>
    </Stack>
  );
};

export default page;
