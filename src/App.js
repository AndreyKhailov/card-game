import { useLocation, Redirect, Route, Switch } from 'react-router';
import { NotificationContainer } from 'react-notifications';

import { MenuHeader, Footer, PrivateRoute } from './components';
import { Home, Game, About, Contacts, NotFound } from './routes';

import s from './app.module.css';
import cn from 'classnames';
import 'react-notifications/lib/notifications.css';

function App() {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <>
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
              <Switch>
                <Route path='/' exact component={Home} />
                <PrivateRoute path='/game' component={Game} />
                <PrivateRoute path='/about' component={About} />
                <Route path='/contacts' component={Contacts} />
                <Route render={() => <Redirect to='404' />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </>
  );
}

export default App;
