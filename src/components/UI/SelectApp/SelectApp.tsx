import { ColourOption } from '../data';
import Select, { StylesConfig } from 'react-select';

const options = [
  { value: 'city1', label: 'Санкт-Петербург' },
  { value: 'city2', label: 'Mocква' },
  { value: 'city3', label: 'Новгород' },
];

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    width: '300px',
    padding: '5px',
    border: 'none',
    borderRadius: '10px',
    zIndex: '10',
  }),
};

export default function SelectApp() {
  return (
    <Select
      defaultValue={options[0]}
      options={options}
      styles={colourStyles}
    />
  );
}
