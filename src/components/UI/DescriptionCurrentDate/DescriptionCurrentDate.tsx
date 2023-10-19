import Parametr from '../Parameter/Parameter';
import style from './DescriptionCurrentDate.module.scss';

export default function DescriptionCurrentDate() {
  return (
    <div className={style.description}>
      <ul>
        <li>
          <Parametr />
        </li>
        <li>
          <Parametr />
        </li>
        <li>
          <Parametr />
        </li>
        <li>
          <Parametr />
        </li>
      </ul>
    </div>
  );
}
