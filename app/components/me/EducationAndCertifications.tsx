import { Group, Stack, Title, Image, Text, Paper } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";

const EducationAndCertifications = () => {
  return (
    <Stack
      justify="center"
      align="center"
      gap={100}
      style={{ minHeight: "100vh" }}
    >
      <Title ta={"center"} className={classes.titleDeveloper} c={"gray"}>
        Education and certifications
      </Title>
      <Group gap={100} justify="center">
        <Title ta={"center"} maw={400}>
          Software Engineer, Bachelor&apos;s degree
        </Title>
        <Paper miw={350} shadow="xl" p={20} withBorder>
          <Title ta={"center"}>UNAD</Title>
          <Text c={"dimmed"}>Universidad Nacional Abierta y a Distancia</Text>
        </Paper>
      </Group>
      <Group gap={100}>
        <Title ta={"center"} maw={400}>
          AWS Academy Graduate, AWS Academy Cloud Foundations
        </Title>
        <Image
          className={classes.awsImage}
          src={"/image/awsCloudFoundations.png"}
        />
      </Group>
    </Stack>
  );
};

export default EducationAndCertifications;
