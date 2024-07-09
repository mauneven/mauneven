import React from "react";
import FirstImpression from "../components/me/FirstImpression";
import Experience from "../components/me/Experience";
import Skills from "../components/me/Skills";
import EducationAndCertifications from "../components/me/EducationAndCertifications";
import { Stack } from "@mantine/core";

const page = () => {
  return (
    <Stack gap={60}>
      <FirstImpression />
      <Experience />
      <Skills />
      <EducationAndCertifications />
    </Stack>
  );
};

export default page;
