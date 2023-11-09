import ThemeButton from '@/components/UI/ThemeButton/Theme';
import Logo from '../../UI/Logo/Logo';
import style from './Header.module.scss';
import SelectApp from '@/components/UI/SelectApp/SelectApp';
import { useTheme } from '../../../hooks/useTheme';
import { Theme } from '../../../context/ThemeContext';

export default function Header() {
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(
      theme.theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.content}>
          <Logo />
          <div className={style.right}>
            <div className={style.theme} onClick={changeTheme}>
              <ThemeButton />
            </div>
            <SelectApp />
          </div>
        </div>
      </div>
    </header>
  );
}
