import CurrentDateCard from '@/components/UI/CurrentDateCard/CurrentDateCard';
import DescriptionCurrentDate from '@/components/UI/DescriptionCurrentDate/DescriptionCurrentDate';

import style from './Information.module.scss';

export default function Information() {
  return (
    <section className={style.information}>
      <div className="container">
        <div className={style.content}>
          <CurrentDateCard />
          <DescriptionCurrentDate />
        </div>
      </div>
    </section>
  );
}
