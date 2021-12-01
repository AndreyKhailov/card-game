import { useEffect } from 'react';
import { useLocation, Redirect, Route, Switch } from 'react-router';
import { NotificationContainer } from 'react-notifications';
import { useDispatch } from 'react-redux';

import { MenuHeader, Footer, PrivateRoute } from './components';
import { Home, Game, About, Contacts, User, NotFound } from './routes';
import { getUserAsync } from './store/user';
import { rootUrl } from './rootUrl';

import s from './app.module.css';
import cn from 'classnames';
import 'react-notifications/lib/notifications.css';

function App() {
  const location = useLocation();
  const isPadding =
    location.pathname === `${rootUrl}/` || location.pathname === `${rootUrl}/game/board`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync());
  }, []);

  return (
    <>
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
              <Switch>
                <Route path='/card-game/' exact component={Home} />
                <PrivateRoute path='/card-game/game' component={Game} />
                <PrivateRoute path='/card-game/about' component={About} />
                <PrivateRoute path='/card-game/user' component={User} />
                <Route path='/card-game/contacts' component={Contacts} />
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
