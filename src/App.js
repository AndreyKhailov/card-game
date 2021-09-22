import React from 'react';
import { useLocation, Redirect, Route, Switch } from 'react-router';

import { MenuHeader, Footer } from './components';
import { Home, Game, About, Contacts, NotFound } from './routes';

import s from './app.module.css';
import cn from 'classnames';

function App() {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  console.log('location', location);

  return (
    <Switch>
      <Route path='/404' component={NotFound} />
      <Route>
        <>
          <MenuHeader bgActive={!isPadding} />
          <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/game' component={Game} />
              <Route path='/about' component={About} />
              <Route path='/contacts' component={Contacts} />
              <Route render={() => <Redirect to='404' />} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );
}

export default App;
