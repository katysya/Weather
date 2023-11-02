import React from 'react';

import styles from './Weather.module.scss';

interface Props {}

export default function Weather(props: Props) {
  return <div className={styles.weather}>Weather</div>;
}
