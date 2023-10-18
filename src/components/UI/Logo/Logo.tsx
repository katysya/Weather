import style from './Logo.module.scss';

import logoImage from '@assets/images/Logo/Logo.svg';

export default function Logo() {
  return (
    <div className={style.logo}>
      <div className={style.img}>
        <img src={logoImage} alt="Logo" />
      </div>
      <p className={style.name}>Weather Forecast</p>
    </div>
  );
}
