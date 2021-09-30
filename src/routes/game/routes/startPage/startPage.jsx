import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { Cards } from '../../../../components';

import { getCardsAsync, selectCardsData, selectCardsLoading, selectedCards, handleSelectedCards } from '../../../../store/cards';

import s from './startPage.module.css';

function StartPage() {
    const isLoading = useSelector(selectCardsLoading);
    const cardsRedux = useSelector(selectCardsData);
    const selected = useSelector(selectedCards);
    const dispatch = useDispatch();
    const history = useHistory();

    const [cards, setCards] = useState({});

    useEffect(() => {
        dispatch(getCardsAsync());
    }, []);

    useEffect(() => {
        setCards(cardsRedux);
    }, [cardsRedux]);

    const onClickGoToHome = () => {
        history.push('/');
    };

    const handleChangeSelected = (key) => {
        const card = {...cards[key]}
        dispatch(handleSelectedCards({card, key}))

        setCards(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                isSelected: !prevState[key].isSelected,
            }
        }));
    };
    const onClickGoToGamePage = () => {
        history.push('/game/board');
    };

    const checkingNumOfCards = Object.keys(selected).length < 5;
    
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