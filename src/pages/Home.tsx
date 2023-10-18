import { Link } from 'react-router-dom';

interface Props {}

export const Home = (props: Props) => {
  return (
    <div>
      <div>Home</div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Назад</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
