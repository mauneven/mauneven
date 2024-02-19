'use client'
import { Group, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../../../public/css/navigation/HeaderMenu.module.css';
import ThemeChanger from '../themes/ThemeChanger';

const links = [
  { link: '/about', label: 'Experience' },
  { link: '/pricing', label: 'Projects' },
  { link: '/learn', label: 'Education & Certifications' },
  { link: '/community', label: 'Social' },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Text>Mauneven</Text>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
            <ThemeChanger/>
          </Group>
        </Group>
      </div>
    </header>
  );
}