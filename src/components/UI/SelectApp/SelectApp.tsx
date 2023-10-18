import { ColourOption } from '../data';
import Select, { StylesConfig } from 'react-select';

const options = [
  { value: 'city1', label: 'Санкт-Пеербург' },
  { value: 'city2', label: 'Mocква' },
  { value: 'city3', label: 'Новгород' },
];

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    width: '200px',
    padding: '5px',
    border: 'none',
    borderRadius: '10px',
    zIndex: '10',
  }),
};

export default function SelectApp() {
  return <Select options={options} styles={colourStyles} />;
}
