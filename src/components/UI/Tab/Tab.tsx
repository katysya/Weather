import style from './Tab.module.scss';

interface IProps {
  id: number;
  name: string;
  active: boolean;
}

export default function Tab({ name }: IProps) {
  return <button className={style.tab}>{name}</button>;
}
