import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';

import { MenuHeader, Footer } from './components';
import { Home, Game, About, Contacts, NotFound } from './routes';

import s from './app.module.css';
import cn from 'classnames';

function App() {
  const match = useRouteMatch('/');

  return (
    <Switch>
      <Route path='/404' component={NotFound} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
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
