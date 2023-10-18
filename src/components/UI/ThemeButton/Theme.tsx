import style from './Theme.module.scss';

import themeImage from '@/assets/images/Theme/theme.svg';

export default function Theme() {
  return (
    <button className={style.theme}>
      <img src={themeImage} alt="" />
    </button>
  );
}
