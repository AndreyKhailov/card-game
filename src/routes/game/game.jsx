import React from 'react';
import { useHistory } from 'react-router';

import dateCards from '../../dateCards.json';

import { Cards } from '../../components';

import s from './game.module.css';

// Записываем в каждую карточку свойство isActive
const CardsWithActiveVal = dateCards.map((card) => ({ ...card, isActive: false }))

function Game() {
    const [cards, setCards] = React.useState(CardsWithActiveVal);
    const history = useHistory();

    const onClickGoToHome = () => {
        history.push('/');
    };

    const onClickCard = (id) => {
        setCards( cards.map(card => {
            if(card.id === id) {
                card.isActive = !card.isActive;
            };
            return card;
        }));
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
