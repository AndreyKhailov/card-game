import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { StartPage, BoardPage, FinishPage } from './routes';

const GamePage = () => {
    const [playerCards1, setPlayerCards1] = useState({});
    const [playerCards2, setPlayerCards2] = useState([]);

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
