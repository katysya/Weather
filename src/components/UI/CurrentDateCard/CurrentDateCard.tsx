import style from './CurrentDateCard.module.scss';

import Sun from '@assets/images/CurrentCard/sun.svg';

export default function CurrentDateCard() {
  return (
    <div className={style.card}>
      <div className={style.top}>
        <div className={style.left}>
          <p className={style.temperature}>20°</p>
          <p className={style.day}>Сегодня</p>
        </div>
        <div className={style.img}>
          <img src={Sun} alt="" />
        </div>
      </div>
      <div className={style.bottom}>
        <p className={style.text}>Время: 21:54</p>
        <p className={style.text}>Город: Санкт-Петербург</p>
      </div>
    </div>
  );
}
