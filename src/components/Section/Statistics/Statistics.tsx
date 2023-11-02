import React from 'react';

import styles from './Statistics.module.scss';

interface Props {}

export default function Statistics(props: Props) {
  return (
    <div className={styles.statistics}>
      Statistics
      <p className={styles.text}>Секция со статистикой</p>
    </div>
  );
}
