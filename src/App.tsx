// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { Route, Switch } from 'react-router';
import './assets/styles/main.scss';
import { Home } from './pages/Home';
import { MonthStatistics } from './pages/MonthStatistics';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <section>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={MonthStatistics} />
      </Switch>
    </section>
  );
}

export default App;
