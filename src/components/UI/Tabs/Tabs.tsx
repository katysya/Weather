import Tab from '../Tab/Tab';

import style from './Tabs.module.scss';

const time = [
  {
    id: 1,
    name: 'На неделю',
    active: true,
  },
  {
    id: 2,
    name: 'На месяц',
    active: false,
  },
  {
    id: 3,
    name: 'На 10 дней',
    active: false,
  },
];

export default function Tabs() {
  return (
    <div className={style.tabs}>
      {time.map((item) => {
        return (
          <Tab id={item.id} name={item.name} active={item.active} />
        );
      })}
    </div>
  );
}
