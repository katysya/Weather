import style from './WeatherCard.module.scss';

interface IProps {
  day: string;
  date: string;
  weather: string;
  temperatureDay: string;
  temperatureNight: string;
  description: string;
}

export default function WeatherCard({
  day,
  date,
  weather,
  temperatureDay,
  temperatureNight,
  description,
}: IProps) {
  return (
    <div className={style.card}>
      <p className={style.day}>{day}</p>
      <p className={style.date}>{date}</p>
      <div className={style.weather}>
        <img src={weather} alt="" />
      </div>
      <p className={style.temperatureDay}>{temperatureDay}</p>
      <p className={style.temperatureNight}>{temperatureNight}</p>
      <p className={style.description}>{description}</p>
    </div>
  );
}
