import { useEffect } from 'react';
import { useLocation, Redirect, Route, Switch } from 'react-router';
import { NotificationContainer } from 'react-notifications';
import { useDispatch, useSelector } from 'react-redux';

import { MenuHeader, Footer, PrivateRoute } from './components';
import { Home, Game, About, Contacts, User, NotFound } from './routes';
import { getUserAsync, selectUserLoading } from './store/user';

import s from './app.module.css';
import cn from 'classnames';
import 'react-notifications/lib/notifications.css';

function App() {
  const isUserLoading = useSelector(selectUserLoading);
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync());
  }, []);

  if (isUserLoading) {
    return 'Loading ...';
  }

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
                <PrivateRoute path='/user' component={User} />
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
