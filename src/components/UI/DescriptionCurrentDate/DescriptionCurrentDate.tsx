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
    img: parameter1,
    name: 'Температура',
    value: '20° - ощущается как 17°',
  },
  {
    id: 3,
    img: parameter1,
    name: 'Температура',
    value: '20° - ощущается как 17°',
  },
  {
    id: 4,
    img: parameter1,
    name: 'Температура',
    value: '20° - ощущается как 17°',
  },
];

export default function DescriptionCurrentDate() {
  return (
    <div className={style.description}>
      <ul className={style.list}>
        <li>
          <Parametr
            img={parameter1}
            name="Температура"
            value="20° - ощущается как 17°"
          />
        </li>
        <li>
          <Parametr
            img={parameter2}
            name="Давление "
            value="765 мм ртутного столба - нормальное"
          />
        </li>
        <li>
          <Parametr
            img={parameter3}
            name="Осадки"
            value="Без осадков"
          />
        </li>
        <li>
          <Parametr
            img={parameter4}
            name="Ветер"
            value="3 м/с юго-запад - легкий ветер"
          />
        </li>
      </ul>
    </div>
  );
}
