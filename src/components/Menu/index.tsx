import {
  HistoryIcon,
  SettingsIcon,
  HouseIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';

import styles from './style.module.css';
import { useState, useEffect } from 'react';

type themaAvailable = 'dark' | 'light';

export function Menu() {
  const [thema, setThema] = useState<themaAvailable>(() => {
    const themaSaved =
      (localStorage.getItem('theme') as themaAvailable) || 'dark';
    return themaSaved;
  });

  const changeThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleChangeThema(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setThema(prevThem => {
      const nextTheme = prevThem === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', thema);
    localStorage.setItem('theme', thema);
  }, [thema]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menulink}
        href='#'
        aria-label='Menu Principal'
        title='Menu Principal'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menulink}
        href='#'
        aria-label='entrar historico'
        title='Historico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menulink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menulink}
        href='#'
        aria-label='Mudar Thema'
        title='Mudar Thema'
        onClick={handleChangeThema}
      >
        {changeThemeIcon[thema]}
      </a>
    </nav>
  );
}
