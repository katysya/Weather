import React from 'react';

import styles from './Weather.module.scss';

interface Props {}

export const Weather = (props: Props) => {
  return <div className={styles.weather}>Weather</div>;
};
