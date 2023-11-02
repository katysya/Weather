import Parametr from '../Parameter/Parameter';
import style from './DescriptionCurrentDate.module.scss';

import parameter1 from '@assets/images/Parameter/parameter1.svg';
import parameter2 from '@assets/images/Parameter/parameter2.svg';
import parameter3 from '@assets/images/Parameter/parameter3.svg';
import parameter4 from '@assets/images/Parameter/parameter4.svg';

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

export default function DescriptionCurrentDate() {
  return (
    <div className={style.description}>
      <ul className={style.list}>
        {data.map((item) => (
          <li key={item.id}>
            <Parametr
              img={item.img}
              name={item.name}
              value={item.value}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
