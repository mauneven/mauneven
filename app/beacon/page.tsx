import { Group, Paper, Stack, Text, Button } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import React from "react";

const Page = () => {
  return (
    <Group justify="center" align="center">
      <Paper withBorder shadow="xl" p={"xl"}>
        <Stack maw={600}>
          <Group>
            <Button
              leftSection={<IconExternalLink size={40} />}
              color="gray"
              size="xl"
              variant="subtle"
              component="a"
              href="https://beacon-reminder.vercel.app/"
              target="_blank"
            >
              Beacon
            </Button>
          </Group>
          <Text size="xl" fw={600}>
            The idea of creating this app
          </Text>
          <Text>
            Beacon is a web app today (2024). It works, but not as I would like.
            The project is basically a reminder of healthy habits. It reminds
            you to sit properly, drink water, stretch your legs, relax your
            eyes, sit properly, etc. These are healthy things that are great for
            us who spend a lot of time on the computer because at any moment
            during those long 8-hour days or more, you can lose the good habit
            of doing everything right. Having non-intrusive reminders from time
            to time is great.
          </Text>
          <Text size="xl" fw={600}>
            But this idea wasn&apos;t mine
          </Text>
          <Text>
            Beacon isn&apos;t my idea. In fact, back in 2018 and 2019, I used
            Linux, and I loved a distribution called elementary OS. It had a
            store where I found exactly that app called Badger. This app was
            basically the same as Beacon but running locally because it was a
            program written in Vala. With the iconic design that elementary had,
            it looked beautiful. It was a simple app and it worked. I loved it
            so much that it hurt when I went to Windows and couldn&apos;t have
            it. But at that time, my development knowledge was low and, even
            more importantly, I like apps that look nice, and I didn&apos;t have
            the skill to develop this app on Windows with that beautiful design.
          </Text>
          <Text size="xl" fw={600}>
            So I started the development in 2024
          </Text>
          <Text>
            I tried to go with something cross-platform at first, so the options
            were Electron or Flutter among my current knowledge. I preferred to
            use Flutter because it had more options to create prettier designs.
          </Text>
          <Text size="xl" fw={600}>
            Problems with cross-platform
          </Text>
          <Text>
            There were two problems with Flutter: the system tray and the
            minimize, maximize, and close buttons. The second problem was solved
            with a dependency I found online, but it only worked well for
            Windows. However, the first was the worst. The system tray existed
            but allowed multiple instances of the same application, which meant
            that if you clicked the app several times, it would basically open a
            new instance with new information. It had big problems in replacing
            the information about how many minutes should pass between each of
            the reminders. Even the simplest ideas are complicated. I found a
            system tray that worked on Windows, but only for Windows. For that,
            I wouldn&apos;t have used Flutter; I would have gone directly with
            something more native to Windows, with Fluent 2 design.
          </Text>
          <Text size="xl" fw={600}>
            Using C# to create an app with Fluent 2 was a horrible experience
          </Text>
          <Text>
            It wasn&apos;t just that C# is basically weird; it&apos;s like
            Microsoft&apos;s Java but with front-end capabilities. Anyway, the
            default project architecture was very complex and weird. Maybe it
            was a bad decision to start learning C# directly with Fluent 2, I
            don&apos;t know. Either way, it was horrible because I couldn&apos;t
            create the multi-language system for a simple blur button. The
            development that took my free time over three days was in vain
            because I couldn&apos;t make progress. I even used ChatGPT 4 without
            success because it didn&apos;t know how to do it either. So, I
            decided to change things and at least...
          </Text>
          <Text size="xl" fw={600}>
            Web App, and the downside?
          </Text>
          <Text>
            I used what I knew how to use: Next 14 and Mantine, and it turned
            out beautiful, working perfectly with multiple languages. The
            downside? There is no system tray, which means you basically need to
            keep the app or tab open, rather than it running in the background.
            I thought of a Chrome extension, but that doesn&apos;t work because
            sometimes we close the browser, and it would be practically the
            same.
          </Text>
          <Text size="xl" fw={600}>
            Maybe with Fluent UI another time
          </Text>
          <Text>
            Fluent 2 seems to me a beautiful UI and up to par, but I think
            it&apos;s a matter of learning. Maybe in the future, I&apos;ll
            develop it again and leave the web app as an online alternative.
          </Text>
        </Stack>
      </Paper>
    </Group>
  );
};

export default Page;