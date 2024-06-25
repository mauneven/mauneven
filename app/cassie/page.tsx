"use client";
import { Group, Paper, Stack, Text, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import React from "react";
import styles from "./css/Page.module.css";

const Page = () => {
  const handleClick = () => {
    window.open(
      "https://beacon-reminder.vercel.app",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <Group justify="center" align="center">
      <Paper withBorder shadow="xl" p={"xl"}>
        <Stack maw={600}>
          <Group align="center">
            <Group className={styles.link} onClick={handleClick}>
              <Group className={styles["link-group"]}>
                <Title>CASSIE</Title>
                <IconExternalLink size={40} />
                <div className={styles["underline-hover"]}></div>
              </Group>
            </Group>
          </Group>
          <Text size="xl" fw={600}>
            Que es CASSIE?
          </Text>
          <Text>
            CASSIE o Code Analysis System for Software Intelligence and
            Enhancement por su nombre real, es un modelo de lenguaje natural que
            utilizaba como base el repositorio publico de GPT-2 de 124 millones
            de parametros, fue creado en abril del 2023 cuando recientemente
            openai habia expuesto el tokenizador y el HeadModel de GPT-2, usaba
            un modelo preentrenado, la idea fue enfocarlo al analsis de codigo
            para indentificar problemas o explicar cosas sin tener que
            investigar en la documentacion.
          </Text>
          <Text size="xl" fw={600}>
            Los LLM son posiblemente la tecnologia mas dificil de entender al
            completo exceptuando la litografía de procesadores
          </Text>
          <Text>
            Todos lo saben, los LLM usan redes neuronales y un banco de
            informacion masivo para poder funcionar, la teoria es simple pero
            nunca nos lleva lejos, porque cuando creemos que entendemos algo
            solo por la teoria es entonces cuando nos damos cuenta de que no
            sabemos una mierda, el proceso de tokenizacion, codificacion,
            antencion y decodificacion es algo extremadamente complejo, el
            modelo practicamente solo habla matematicas y traduce toda la
            informacion en un proceso que es extremadamente complicado,
            basicamente las palabras que enviamos se tokenizan (se transforman
            de "Once upon a time" a ["Once", "upon", "a", "time"]), estos tokens
            despues se convierten en vectores matematicos de alta dimension y
            los vectores matematicos se operan con la arquitectura transformer
            que creo google hace mucho, este es basicamente una calculadora,
            estas operaciones responden con informacion vectoria y se
            destokenizan o se decodifican para traducirlas al lenguaje del ser
            humano.
          </Text>
          <Text size="xl" fw={600}>
            Por que crear cassie?
          </Text>
          <Text>
            bueno, era el boom de la IA, y veia que todo el mundo de golpe se
            convirtio en expertos de IA, asi como los crypto bros se volvieron
            expertos en la blockchain en un curso de 0 a experto en 1 semana
            (obviamente esto es falso, los idiotas solo entendian la teoria),
            entonces pense, esta tecnologia debe ser dificil pero no tan
            complicada de entender, bruh, ojala nunca haber pensado eso, cuando
            empece a desarrollar a cassie me di cuenta de lo JODIDO que eran los
            modelos de lenguaje, y de lo increiblemente lleno que estaba de
            informacion internet para poder entenderla
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
