import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { StartPage, BoardPage, FinishPage } from './routes';

const GamePage = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
    );
};

export default GamePage;
