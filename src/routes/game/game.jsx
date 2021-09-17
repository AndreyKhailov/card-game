import React from 'react';
import { useHistory } from 'react-router';

import dateCards from '../../dateCards.json';

import { Cards } from '../../components';

import s from './game.module.css';

function Game() {
    const [cards, setCards] = React.useState(dateCards);

    const history = useHistory();

    const onClickGoToHome = () => {
        history.push('/');
    };

    const onClickCard = (id) => {
        setCards(prevState => {
            const onChangeActiveCard = (
                prevState.map(card => {
                    if(card.id === id) {
                        card.isActive = true;
                    };
                    return card;
                })
            );
            return onChangeActiveCard;
        });
    };
    
    return (
        <div className={s.game}>
            <h1>This is start game</h1>
            <div className={s.flex}>
                {cards.map((card) => (
                    <Cards
                        key={card.id}
                        id={card.id}
                        type={card.type}
                        values={card.values}
                        name={card.name}
                        img={card.img}
                        activeCard={card.isActive}
                        onClickCard={onClickCard}
                    />
                ))}
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
