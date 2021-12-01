import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { Cards, Button } from '../../../../components';
import { getCardsAsync, selectCardsData, selectedCards, handleSelectedCards } from '../../../../store/cards';
import { rootUrl } from '../../../../rootUrl';

import s from './startPage.module.css';

function StartPage() {
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
        history.push(`${rootUrl}/`);
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
        history.push(`${rootUrl}/game/board`);
    };

    const checkingNumOfCards = Object.keys(selected).length < 5;
    
    return (
        <div className={s.root}>
            <p>Выберете ПЯТЬ карт и начинайте игру!</p>
            <Button 
                onClick={ onClickGoToGamePage }
                isDisabled={ checkingNumOfCards }
            >
                Начать игру
            </Button>
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
            <Button onClick={onClickGoToHome}>
                Назад
            </Button>
        </div>
    )
}

export default StartPage;