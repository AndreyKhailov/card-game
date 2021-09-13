import React from 'react';

import Game from './routes/game/game';
import Home from './routes/home/home';

function App() {
  const [page, setPage] = React.useState('app');

  switch (page) {
    case 'app':
      return <Home />;
    case 'game':
      return <Game />;
    default:
      return <Home />;
  }
}

export default App;
