import Days from '@/components/UI/Days/Days';
import Tabs from '@/components/UI/Tabs/Tabs';
import style from './FilterWeather.module.scss';

export default function FilterWeather() {
  return (
    <section className={style.days}>
      <div className="container">
        <div className={style.block}>
          <Tabs />
          <Days />
        </div>
      </div>
    </section>
  );
}
