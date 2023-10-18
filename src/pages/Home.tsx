import { Link } from 'react-router-dom';

interface Props {}

export const Home = (props: Props) => {
  return (
    <div>
      <div>Home</div>
      <nav>
        <ul>
          <li>
            <Link to={`/monthstatistics`}>MonthStatistics</Link>
          </li>
          <li>
            <Link to={`/error`}>Error</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
