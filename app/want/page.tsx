import { Group, Paper, Stack, Title, Text } from "@mantine/core";
import React from "react";

const page = () => {
  return (
    <Group justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Paper withBorder shadow="xl" p={"xl"} mt={80}>
        <Stack>
          <Title>Want, the hardest one</Title>
          <Text size="xl" fw={600}></Text>
          <Text maw={600}>
            Want surgio como una idea a eso del 2021, inicialmente seria una
            plataforma donde las personas podrian simplemente publicar lo que
            quisieran evitando tener que buscar y buscar entre precios y
            descripciones de cada uno de los articulos, sino simplemente
            publicar exactamente que querrian y a que precio y que las companias
            y otras personas les ofrecieran y se encargaran de hacer el proceso
            por ellos, a fin de cuentas si uno quiere algo y esta dispuesto a
            pagar no deberia de tener que estresarse buscandolo, entre otras
            cosas.
          </Text>
          <Text size="xl" fw={600}>
            Historia del inicio
          </Text>
          <Text maw={600}>
            Asi que asi nacio, fue simple, era una idea tan simple que no
            existia, y me enloqueci pensando en como hacerla realidad, en ese
            momento estaba cambiandome de ingenieria electronica a ingeniera de
            sistemas en la universidad de ibague, aunque despues termine
            cambiandome a la universidad nacional (UNAD) por tener que trabajar
            a tiempo completo y no poseer el espacio para ir a las clases y
            costearme la universidad al completo, como sea, esta idea crecio en
            mi cerebro y se expandio como un cancer hasta consumir por completo
            mi cabeza e idealizarla como la idea que me sacaria de la pobreza
            (hasta 2024 no fue asi jaja), entonces inicio el desarrollo en ese
            tiempo lo hice con PHP, era una porqueria, era horrible y no
            funcionaba para nada pero al menos tenia una idea inicial y empece a
            obtener experiencia con el desarrollo sin embargo en ese tiempo ni
            sabia usar git por lo que guardaba el repositorio en un drive de la
            universidad, estudie mucho mas de los lenguajes y frameworks, y
            sobre todo sobre proyectos grandes entonces conclui que necesitaria
            gente dedicada, el problema es que no encuentras mucha gente que
            valga la pena en la universidad para un proyecto tan ambicioso, pero
            logre encontrar un equipo de 3 personas para presentarla como una
            beta en una materia de la carrera, ingenieria de software, en el
            equipo eramos brayan, santiago y eder para desarrollar lo que seria
            la primera beta del proyecto, aunque mas del 60% del desarrollo lo
            hacia yo, el hecho de tener gente que pueda apoyarte ayuda mucho
          </Text>
          <Text maw={600}>
            Asi que asi nacio, fue simple, era una idea tan simple que no
            existia, y me enloqueci pensando en como hacerla realidad, en ese
            momento estaba cambiandome de ingenieria electronica a ingeniera de
            sistemas en la universidad de ibague (aunque despues termine
            cambiandome a la universidad nacional abierta y a distancia por
            tener que trabajar a tiempo completo y no poseer el espacio para ir
            a las clases y costearme la universidad al completo), como sea, esta
            idea crecio en mi cerebro y se expandio como un cancer hasta
            consumir por completo mi cabeza e idealizarla como la idea que me
            sacaria de la pobreza (hasta 2024 no fue asi jaja), entonces inicio
            el desarrollo en ese tiempo lo hice con PHP, era una porqueria, era
            horrible y no funcionaba para nada pero al menos tenia una idea
            inicial y empece a obtener experiencia con el desarrollo sin embargo
            en ese tiempo ni sabia usar git, conclui que necesitaria gente
            dedicada, el problema es que no encuentras mucha gente que valga la
            pena en la universidad para un proyecto tan ambicioso, pero logre
            encontrar un equipo de 4 personas para presentarla como una beta en
            una materia de la carrera, ingenieria de software, en el equipo
            eramos brayan, santiago, eder y manuel para desarrollar lo que seria
            la primera beta del proyecto, aunque mas del 70% del desarrollo lo
            hacia yo, el hecho de tener gente que pueda apoyarte ayuda mucho y
            esta vez las tecnologias eran algo mejores, mas no perfectas, el
            desarrollo de la primera beta se hizo en NodeJS con express en un
            mono repo, junto a un front en Next 13 con pages router y bootstrap
            junto con rest en la API, el desarrollo fue un extasis, una
            adrenalina, recuerdo dormir a las 6 am solo por hacer un sistema de
            filtrados dinamico y simple para no tener que estresarme con urls y
            despues lo subi a AWS, para aplicar a YC, pero no pasamos, no
            teniamos usuarios, el mantenimiento era costoso y no habria
            ganancia, en si costaba al rededor de 34 dolares mensuales el
            mantener arriba los servidores para una plataforma que no la usaba
            nadie mas que nosotros en el equipo de deasarrollo
          </Text>
          <Text size="xl" fw={600}>
            La primera beta era genial pero tenia problemas
          </Text>
          <Text maw={600}>
            Aunque la primera beta era algo de lo que estaba orgulloso y me
            hacia mucha ilusion verla arriba siendo posible que se consumiera,
            no habia nada mas lejos de la realidad y es que no contaba con
            inversion, asi que el proyecto cerro de los servidores despues de un
            semestre de cobros a mi tarjeta personal y que yo encontrara trabajo
            a tiempo completo y mis amigos tambien, haciendo que fuese
            practicamente imposible continuar con el ritmo anterior.
          </Text>
          <Text size="xl" fw={600}>
            El desarrollo de la segunda beta
          </Text>
          <Text maw={600}>
            sin embargo, obviamente el desarrollo no murio, aunque queriamos
            renovarnos, queriamos aprender a hacer mas cosas, aprender de
            tecnologias, de frameworks, de apis, de programacion, asi que
            decidimos iniciar de nuevo pero con mantine ui, next 14 con el app
            router (app rura xd), y esta vez node pero con graphql (graphql es
            el peor error que cometi, mas adelante el por que) y ambos en TS.
          </Text>
          <Text maw={600}></Text>
        </Stack>
      </Paper>
    </Group>
  );
};

export default page;
