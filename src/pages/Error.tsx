import { useRouteError } from 'react-router-dom';
import Information from '../components/Section/Information/Information';

export const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Information />
    </div>
  );
};
