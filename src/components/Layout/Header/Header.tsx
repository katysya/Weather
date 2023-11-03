import Theme from '@/components/UI/ThemeButton/Theme';
import Logo from '../../UI/Logo/Logo';
import style from './Header.module.scss';
import SelectApp from '@/components/UI/SelectApp/SelectApp';
import { useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    const root = document.querySelector(':root') as HTMLElement;
    root.style.setProperty(
      '--body-background-default',
      `var(--body-background-${theme})`
    );
  };

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.content}>
          <Logo />
          <div className={style.right}>
            <div className={style.theme} onClick={changeTheme}>
              <Theme />
            </div>
            <SelectApp />
          </div>
        </div>
      </div>
    </header>
  );
}
