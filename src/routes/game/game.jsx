import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { StartPage, BoardPage, FinishPage } from './routes';

const GamePage = () => {
    const [playerCards1, setPlayerCards1] = useState({});
    const [playerCards2, setPlayerCards2] = useState([]);

    const match = useRouteMatch();

    const onSelectedCards = (key, card) => {
        setPlayerCards1(prevState => {
            if(prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];
                return copyState;
            };
            return {
                ...prevState,
                [key]: card,
            };
        });
    };

    const onClean = () => {
        setPlayerCards1({});
        setPlayerCards2([]);
    };

    // const dataCardsContext = {
    //     playerCards1,
    //     playerCards2,
    //     setPlayerCards2,
    //     onSelectedCards,
    //     onClean,
    // };

    return (
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
    );
};

export default GamePage;
