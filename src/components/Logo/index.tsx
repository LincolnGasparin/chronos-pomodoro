import { TimerIcon } from 'lucide-react';

import styles from './style.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logolink} href='#'>
        <TimerIcon size={64} />
        <span>Chronos</span>
      </a>
    </div>
  );
}
