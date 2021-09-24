import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { StartPage, BoardPage, FinishPage } from './routes';

import { FireBaseContext } from '../../context/fireBaseContext';
import { CardsContext } from '../../context/cardsContext';
import FireBase from '../../service/firebaseInit';

const GamePage = () => {
    const [selectedCards, setSelectedCards] = useState({});

    const [playerCards1, setPlayerCards1] = useState({});
    const [playerCards2, setPlayerCards2] = useState([]);

    const match = useRouteMatch();

    const onHandleSelectedCards = (key, card) => {
        setSelectedCards(prevState => {
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

    const cleanCards = () => {
        setPlayerCards1({});
        setPlayerCards2([]);
    };

    const dataCardsContext = {
        selectedCards,
        playerCards1,
        playerCards2,
        onSelectedCards: onHandleSelectedCards,
        clean: cleanCards,

    };

    return (
        <FireBaseContext.Provider value={ new FireBase() }>
            <CardsContext.Provider value={ dataCardsContext }>
                <Switch>
                    <Route path={`${match.path}/`} exact component={StartPage} />
                    <Route path={`${match.path}/board`} component={BoardPage} />
                    <Route path={`${match.path}/finish`} component={FinishPage} />
                </Switch>
            </CardsContext.Provider>
        </FireBaseContext.Provider>
    );
};

export default GamePage;
