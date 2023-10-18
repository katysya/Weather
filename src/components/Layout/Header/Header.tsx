import Theme from '@/components/UI/ThemeButton/Theme';
import Logo from '../../UI/Logo/Logo';
import style from './Header.module.scss';
import SelectApp from '@/components/UI/SelectApp/SelectApp';

export default function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.content}>
          <Logo />
          <div className={style.right}>
            <Theme />
            <SelectApp />
          </div>
        </div>
      </div>
    </header>
  );
}
