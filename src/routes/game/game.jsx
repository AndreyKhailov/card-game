import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { Cards } from '../../components';

import fireDB from '../../service/firebaseInit';

import s from './game.module.css';


function Game() {
    const [cards, setCards] = useState({});
    const history = useHistory();

    const getCards = () => {
        fireDB.child('cards').once('value', (snapshot) => setCards(snapshot.val()))
    };

    useEffect(() => {
        getCards();
    }, []);

    const onClickGoToHome = () => {
        history.push('/');
    };

    const onClickIsActiveCard = (id, objID) => {
        setCards(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const card = {...item[1]};
                if (card.id === id) {
                    card.isActive = !card.isActive;
                    fireDB.child('cards/' + objID).update({isActive: card.isActive}).then(() => getCards());
                };
                
                acc[item[0]] = card;
        
                return acc;
            }, {});
        });
    };

    const onClickAddCard = () => {
        const data = Object.values(cards)[1];
        const newKey = fireDB.child('cards').push().key;
        fireDB.child('cards/' + newKey).set(data).then(() => getCards());
    };
    
    return (
        <div className={s.game}>
            <h1>This is start game</h1>
            <button className={s.addCardbtn} onClick={onClickAddCard}>add card</button>
            <div className={s.flex}>
                {
                    Object.entries(cards).map(([key, {id, type, values, name, img, isActive}]) => (
                        <Cards
                            key={key}
                            id={id}
                            objID={key}
                            type={type}
                            values={values}
                            name={name}
                            img={img}
                            activeCard={isActive}
                            onClickCard={onClickIsActiveCard}
                        />
                    ))
                }
        </div>
            <button 
                onClick={onClickGoToHome}
            >
                Home
            </button>
        </div>
    )
}

export default Game;
