import { Group, Stack, Title, Image, Text, Paper, Badge } from "@mantine/core";
import React from "react";
import classes from "../../../public/css/me/FirstImpression.module.css";

const EducationAndCertifications = () => {
  return (
    <Stack gap={20}>
      <Title mb={20} className={classes.titleDeveloper}>
        Education and certifications
      </Title>
      <Group justify="center">
        <Title size={25} maw={400}>
          Software Engineer, Bachelor&apos;s degree
        </Title>
        <Paper miw={400} shadow="xl" p={20} withBorder>
          <Title ta={"center"}>UNAD</Title>
          <Text c={"dimmed"} ta={"center"}>
            National Open and Distance University of Colombia
          </Text>
          <Text c={"dimmed"} ta={"center"}>
            - Currently studiying -
          </Text>
        </Paper>
      </Group>
      <Group justify="center">
        <Title size={25} maw={400}>
          AWS Academy Graduate, AWS Academy Cloud Foundations
        </Title>
        <Paper miw={400} shadow="xl" p={20} withBorder>
          <Group justify="center">
            <Image
              maw={200}
              mah={200}
              className={classes.awsImage}
              src={"/image/awsCloudFoundations.png"}
            />
          </Group>
        </Paper>
      </Group>
    </Stack>
  );
};

export default EducationAndCertifications;
