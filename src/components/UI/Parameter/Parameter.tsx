import style from './Parameter.module.scss';

interface IProps {
  img: string;
  name: string;
  value: string;
}

export default function Parametr({ img, name, value }: IProps) {
  return (
    <div className={style.parameter}>
      <div className={style.img}>
        <img src={img} alt="" />
      </div>
      <p className={style.name}>{name}</p>
      <p className={style.value}>{value}</p>
    </div>
  );
}
