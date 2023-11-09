import { Theme } from '../context/ThemeContext';

export function changeCssRootVariables(theme: Theme) {
  const root = document.querySelector(':root') as HTMLElement;

  const elements = [
    'body-background',
    'components-background',
    'card-background',
    'text',
  ];

  elements.forEach((element) => {
    root.style.setProperty(
      `--${element}-default`,
      `var(--${element}-${theme})`
    );
  });
}
