// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './assets/styles/main.scss';
import { Link } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <section>
      <div>Начальная страница</div>
      <nav>
        <ul>
          <li>
            <Link to={`/home`}>Home</Link>
          </li>
          <li>
            <Link to={`/monthstatistics`}>MonthStatistics</Link>
          </li>
          <li>
            <Link to={`/error`}>Error</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default App;
