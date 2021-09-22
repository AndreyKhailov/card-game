import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';

import { Cards } from '../../../../components';

import { FireBaseContext } from '../../../../context/fireBaseContext';
import { CardsContext } from '../../../../context/cardsContext';

import s from './startPage.module.css';

function StartPage() {
    const firebase = useContext(FireBaseContext);
    const cardsContext = useContext(CardsContext);
    const history = useHistory();

    const [cards, setCards] = useState({});

    const getCards = async() => {
        const response = await firebase.getCardsOnce();
        setCards(response);
    };

    useEffect(() => {
        getCards();
    }, []);

    
    const onClickGoToHome = () => {
        history.push('/');
    };

    const handleChangeSelected = (key) => {
        const card = {...cards[key]};
        cardsContext.onSelectedCards(key, card);
        setCards(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                isSelected: !prevState[key].isSelected,
            }
        }))
    };

    const onClickGoToGamePage = () => {
        history.push('/game/board');
    };

    const checkingNumOfCards = Object.keys(cardsContext.selectedCards).length < 5;
    
    return (
        <div>
            <h1>This is start game</h1>
                <button 
                    className={s.addCardbtn} 
                    onClick={ onClickGoToGamePage }
                    disabled={ checkingNumOfCards }
                >
                    start game
                </button>
            <div className={s.flex}>
                {
                    Object.entries(cards).map(([key, { id, type, values, name, img, isSelected }]) => (
                        <Cards
                            className={s.card}
                            key={key}
                            id={id}
                            objID={key}
                            type={type}
                            values={values}
                            name={name}
                            img={img}
                            isActive={true}
                            isSelected={isSelected}
                            onClickCard={() => {
                                if(checkingNumOfCards || isSelected) {
                                    handleChangeSelected(key)
                                }
                            }}
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

export default StartPage;