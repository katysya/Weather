import WeatherCard from '../WeatherCard/WeatherCard';
import style from './Days.module.scss';

import Rain from '@/assets/images/Weather/rain.svg';

const days = [
  {
    id: 1,
    nameDay: 'Сегодня',
    date: '28 авг',
    temperatureDay: '+18°',
    temperatureNight: '+10°',
    image: Rain,
    description: 'Облачно',
  },
  {
    id: 2,
    nameDay: 'Сегодня',
    date: '28 авг',
    temperatureDay: '+18°',
    temperatureNight: '+10°',
    image: Rain,
    description: 'Облачно',
  },
  {
    id: 3,
    nameDay: 'Сегодня',
    date: '28 авг',
    temperatureDay: '+18°',
    temperatureNight: '+10°',
    image: Rain,
    description: 'Облачно',
  },
  {
    id: 4,
    nameDay: 'Сегодня',
    date: '28 авг',
    temperatureDay: '+18°',
    temperatureNight: '+10°',
    image: Rain,
    description: 'Облачно',
  },
  {
    id: 5,
    nameDay: 'Сегодня',
    date: '28 авг',
    temperatureDay: '+18°',
    temperatureNight: '+10°',
    image: Rain,
    description: 'Облачно',
  },
  {
    id: 6,
    nameDay: 'Сегодня',
    date: '28 авг',
    temperatureDay: '+18°',
    temperatureNight: '+10°',
    image: Rain,
    description: 'Облачно',
  },
  {
    id: 7,
    nameDay: 'Сегодня',
    date: '28 авг',
    temperatureDay: '+18°',
    temperatureNight: '+10°',
    image: Rain,
    description: 'Облачно',
  },
];

export default function Days() {
  return (
    <div className={style.days}>
      {days.map((item) => {
        return (
          <WeatherCard
            key={item.id}
            day={item.nameDay}
            date={item.date}
            weather={item.image}
            temperatureDay={item.temperatureDay}
            temperatureNight={item.temperatureNight}
            description={item.description}
          />
        );
      })}
    </div>
  );
}
