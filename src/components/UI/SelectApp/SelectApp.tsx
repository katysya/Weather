import { ColourOption } from '../data';
import Select, { StylesConfig } from 'react-select';
import { useTheme } from '../../../hooks/useTheme';
import { Theme } from '../../../context/ThemeContext';

export default function SelectApp() {
  const theme = useTheme();

  const options = [
    { value: 'city1', label: 'Санкт-Петербург' },
    { value: 'city2', label: 'Mocква' },
    { value: 'city3', label: 'Новгород' },
  ];

  const colourStyles: StylesConfig<ColourOption> = {
    control: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? '#4F4F4f' : '#dfe8fc',
      width: '300px',
      padding: '5px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '10',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fefefe' : '#4F4F4f',
    }),
  };

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      styles={colourStyles}
    />
  );
}
