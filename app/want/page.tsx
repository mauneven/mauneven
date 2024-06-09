import { Group, Paper, Stack, Title, Text } from "@mantine/core";
import React from "react";

const page = () => {
  return (
    <Group justify="center" align="center">
      <Paper withBorder shadow="xl" p={"xl"}>
        <Stack>
          <Title>Want, the hardest one</Title>
          <Text size="xl" fw={600}></Text>
          <Text maw={600}>
            Want started as an idea around 2021. Initially, it was supposed to
            be a platform where people could simply post what they wanted,
            avoiding the hassle of searching through prices and descriptions for
            each item. Instead, they could just post exactly what they wanted
            and at what price, and companies and other people would offer and
            handle the process for them. After all, if you want something and
            are willing to pay for it, you shouldn&apos;t have to stress about
            finding it, right?
          </Text>
          <Text size="xl" fw={600}>
            The Beginning Story
          </Text>
          <Text maw={600}>
            That&apos;s how it started. It was simple. It was such a simple idea
            that it didn&apos;t exist yet. I went crazy thinking about how to
            make it a reality. At that time, I was switching from electronic
            engineering to systems engineering at the University of Ibagué.
            Later, I ended up switching to the National Open and Distance
            University (UNAD) because I had to work full-time and couldn&apos;t
            attend classes or afford the university completely. Anyway, this
            idea grew in my brain and spread like cancer until it consumed my
            entire head and I idealized it as the idea that would lift me out of
            poverty (2024, haha). So, I started
            development. At that time, I did it with PHP. It was garbage; it was
            terrible and didn&apos;t work at all, but at least I had an initial
            idea and started gaining experience with development. However, I
            didn&apos;t even know how to use Git back then, so I stored the
            repository on a university drive. I studied much more about
            languages and frameworks, especially about large projects, and
            concluded that I needed dedicated people. The problem is you
            don&apos;t find many worthwhile people at the university for such an
            ambitious project. But I managed to find a team of three people to
            present it as a beta in a software engineering course. In the team,
            we were Brayan, Santiago, and Eder developing what would be the
            first beta of the project. Even though I did more than 60% of the
            development, having people who can support you helps a lot.
          </Text>
          <Text maw={600}>
            So that&apos;s how it started. It was simple. It was such a simple
            idea that it didn&apos;t exist yet. I went crazy thinking about how
            to make it a reality. At that time, I was switching from electronic
            engineering to systems engineering at the University of Ibagué
            (although later, I ended up switching to the National Open and
            Distance University because I had to work full-time and
            couldn&apos;t attend classes or afford the university completely).
            Anyway, this idea grew in my brain and spread like cancer until it
            consumed my entire head and I idealized it as the idea that would
            lift me out of poverty (which it didn&apos;t until 2024, haha). So,
            I started development. At that time, I did it with PHP. It was
            garbage; it was terrible and didn&apos;t work at all, but at least I
            had an initial idea and started gaining experience with development.
            However, I didn&apos;t even know how to use Git back then. I
            concluded that I needed dedicated people. The problem is you
            don&apos;t find many worthwhile people at the university for such an
            ambitious project. But I managed to find a team of four people to
            present it as a beta in a software engineering course. In the team,
            we were Brayan, Santiago, Eder, and Manuel developing what would be
            the first beta of the project. Even though I did more than 70% of
            the development, having people who can support you helps a lot. This
            time, the technologies were a bit better, but not perfect. The
            development of the first beta was done in NodeJS with Express in a
            monorepo, along with a front-end in Next 13 with pages router and
            Bootstrap, and REST for the API. The development was exhilarating,
            an adrenaline rush. I remember sleeping at 6 am just to create a
            dynamic and simple filtering system so I wouldn&apos;t have to
            stress about URLs. Then I uploaded it to AWS to apply to YC, but we
            didn&apos;t pass. We didn&apos;t have users, the maintenance was
            expensive, and there would be no profit. It cost around 34 dollars a
            month to keep the servers up for a platform that no one but our
            development team used.
          </Text>
          <Text size="xl" fw={600}>
            The first beta was great but had problems
          </Text>
          <Text maw={600}>
            Although the first beta was something I was proud of and excited to
            see it live, the reality was far from that. There was no investment,
            so the project was shut down after a semester of charges to my
            personal card. I had found a full-time job, and my friends did too,
            making it practically impossible to continue with the same pace.
          </Text>
          <Text size="xl" fw={600}>
            The development of the second beta (the saddest of all)
          </Text>
          <Text maw={600}>
            Obviously, the development didn&apos;t die. We wanted to renew
            ourselves, learn to do more things, learn about technologies,
            frameworks, APIs, and programming. So, we decided to start over, but
            with Mantine UI, Next 14 with the app router (app rura xd), and this
            time Node but with GraphQL (GraphQL was the worst mistake I made for
            a project like Want, more on that later) and both in TS. So, we
            started again, adapting the new front-end to an old back-end. We
            thought it was just changing a .js to a .tsx and adjusting the REST
            to GraphQL (xd). Obviously, it wasn&apos;t like that, and it was
            easier to redo the back-end from scratch with Apollo Server. When we
            had already done a lot of cool functionality, we realized the
            horrible problem of uploading a file to an API with GraphQL. You
            see, with REST, it&apos;s so simple because REST already has a
            protocol for file uploads and does it via binary method, but GraphQL
            doesn&apos;t have it and has to use a weird method called
            multipart/form-data, which basically never worked for me. We spent a
            lot of time with Brayan trying to solve it, but it didn&apos;t work.
            It was very complex and non-standardized. Problem after problem, the
            development slowly died until we had to leave it in the dust and the
            third beta never went public because I found a job, and Brayan did
            too. We had some disagreements with the rest of the team about the
            project&apos;s direction and dedication, so we were basically a
            development duo at that point. Fewer people, less time, but still
            developing.
          </Text>
          <Text size="xl" fw={600}>
            The development of the third beta
          </Text>
          <Text maw={600}>
            To be honest, we didn&apos;t think Want had many investment
            possibilities. It was a great idea, but reality has to be embraced,
            or it kills you. So, we decided to develop with methodologies,
            technologies, and architectures that would be useful in our jobs or
            improve us at work. We started developing this third beta, learning
            from the past to avoid making the same mistakes. We switched from
            monorepo to microservices, from NodeJS with Express to Java with
            Spring, from MongoDB to MySQL, from GraphQL to RESTful, and kept the
            front-end with Next 14 (app rura xd) with Mantine because for us,
            they are the kings in front-end development (Pure UI feeling).
          </Text>
          <Text maw={600}>
            The development of the third beta is still in progress today (2024)
            and is slow, requiring a lot of time, dedication, love, and effort.
          </Text>
        </Stack>
      </Paper>
    </Group>
  );
};

export default page;
