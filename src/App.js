import React from 'react';

import { Home, Game } from './routes';

function App() {
  const [page, setPage] = React.useState('home');

  const handleChangePage = (page) => {
    setPage(page);
  };

  switch (page) {
    case 'home':
      return <Home onChangePage={handleChangePage} />;
    case 'game':
      return <Game onChangePage={handleChangePage} />;
    default:
      return <Home />;
  }
}

export default App;
