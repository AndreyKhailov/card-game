import React from 'react';

import Game from './routes/game/game';
import Home from './routes/home/home';

function App() {
  const [page, setPage] = React.useState('home');

  const handleChangePage = (page) => {
    setPage(page);
  };

  switch (page) {
    case 'home':
      return <Home onChangePage={handleChangePage} />;
    case 'game':
      return <Game />;
    default:
      return <Home />;
  }
}

export default App;
