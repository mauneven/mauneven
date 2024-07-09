"use client";
import { Group, Paper, Stack, Text, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import React from "react";
import styles from "./css/Page.module.css";

const Page = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/mauneven/cassie",
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
          <Text>
            CASSIE, or Code Analysis System for Software Intelligence and
            Enhancement by its full name, is a natural language model that used
            as its base the public GPT-2 repository with 124 million parameters.
            It was created in April 2023 when OpenAI had recently exposed the
            tokenizer and the HeadModel of GPT-2. It used a pre-trained model,
            and the idea was to focus it on code analysis to identify problems
            or explain things without having to look up documentation.
          </Text>
          <Text size="xl" fw={600}>
            LLMs are possibly the most difficult technology to fully understand
            except for processor lithography
          </Text>
          <Text>
            Everyone knows it, LLMs use neural networks and a massive
            information bank to function. The theory is simple, but it never
            takes us far because when we think we understand something just by
            theory, that&apos;s when we realize we know nothing. The process of
            tokenization, encoding, attention, and decoding is extremely
            complex. The model practically speaks only mathematics and
            translates all information into a process that is extremely
            complicated. Basically, the words we send are tokenized (transformed
            from Once upon a time to [Once, upon, a, time]). These
            tokens are then turned into high-dimensional mathematical vectors,
            and the mathematical vectors are operated on with the transformer
            architecture created by Google a long time ago. This is basically a
            calculator. These operations respond with vector information and
            are then detokenized or decoded to translate them into human
            language.
          </Text>
          <Text size="xl" fw={600}>
            Why create CASSIE?
          </Text>
          <Text>
            Well, it was the AI boom, and I saw that everyone suddenly became AI
            experts, just like crypto bros became blockchain experts in a
            zero-to-expert course in one week. So, I thought, this technology
            must be difficult but not that hard to understand. Bruh, I wish I
            had never thought that. When I started developing CASSIE, I realized
            how DAMN difficult language models were and how incredibly full of
            information the internet was to understand them.
          </Text>
          <Text size="xl" fw={600}>
            From scratch or using models?
          </Text>
          <Text>
            Developing models is usually something you do from scratch if you
            want to learn the entire process of creating artificial
            intelligence. However, creating such a complex model was not going
            to be possible in such a short time. I&apos;m not kidding when I say
            that creating millions of parameters and feeding a model with
            relevant information with a fully professional team takes many
            months, possibly even years. And I wasn&apos;t a complex team; I was
            just starting to understand the AI boom, so I decided to use the
            simplest public model that OpenAI had put online, GPT-2, which in
            itself was an AI capable of completing information from certain
            texts and even answering questions if the correct prompts were used.
          </Text>
          <Text size="xl" fw={600}>
            AI requires a computing capacity I&apos;d never seen before
          </Text>
          <Text>
            I&apos;m not lying when I say that to run GPT-2 minimally well, you
            need at least a 3070 or 4070 and up. This is because parallel
            processes execute better on GPUs than on CPUs. Unfortunately, I
            didn&apos;t have a dedicated graphics card; I had integrated
            graphics on a fifth-generation Ryzen 5, which is basically nothing
            to run such a complex AI model. However, out of the desire to try it
            anyway, I used it. I loved it, and even though it took about 3
            minutes to respond, it was impressive to see the model, analyze it,
            see its limitations, and how it behaved. Learning to run AI models
            is interesting and fun. It&apos;s something fulfilling, and you
            constantly learn, even with the limitations. You learn and feel
            accomplished.
          </Text>
        </Stack>
      </Paper>
    </Group>
  );
};

export default Page;