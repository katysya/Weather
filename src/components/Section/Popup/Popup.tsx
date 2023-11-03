import Parameter from '@/components/UI/Parameter/Parameter';
import style from './Popup.module.scss';

import parameter1 from '@assets/images/Parameter/parameter1.svg';
import parameter2 from '@assets/images/Parameter/parameter2.svg';
import parameter3 from '@assets/images/Parameter/parameter3.svg';
import parameter4 from '@assets/images/Parameter/parameter4.svg';
import close from '@assets/images/Popup/close.svg';
import img from '@assets/images/Weather/rain_sun.svg';

const data = [
  {
    id: 1,
    img: parameter1,
    name: 'Температура',
    value: '20° - ощущается как 17°',
  },
  {
    id: 2,
    img: parameter2,
    name: 'Давление',
    value: '765 мм ртутного столба - нормальное',
  },
  {
    id: 3,
    img: parameter3,
    name: 'Осадки',
    value: 'Без осадков',
  },
  {
    id: 4,
    img: parameter4,
    name: 'Ветер',
    value: '3 м/с юго-запад - легкий ветер',
  },
];

export default function Popup({ items }: Props) {
  return (
    <div className={style.popup}>
      <div className={style.content}>
        <div className={style.date}>
          <div className={style.top}>
            <p className={style.temperature}>20°</p>
            <div className={style.img}>
              <img src={img} alt="" />
            </div>
          </div>
          <div className={style.bottom}>
            <p className={style.text}>Время: 21:54</p>
            <p className={style.text}>Город: Санкт-Петербург</p>
          </div>
        </div>
        <ul className={style.list}>
          {data.map((item) => (
            <li key={item.id} className={style.text}>
              <Parameter
                img={item.img}
                name={item.name}
                value={item.value}
              />
            </li>
          ))}
        </ul>
        <button className={style.cross}>
          <img src={close} alt="" />
        </button>
      </div>
    </div>
  );
}
