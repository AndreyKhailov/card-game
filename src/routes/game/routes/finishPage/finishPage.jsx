// import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { selectedCards, cardsOfPlayer2, cleanCards, addCardsAsync } from '../../../../store/cards';
import { Cards, Button } from '../../../../components';
import { rootUrl } from '../../../../rootUrl';

import s from './finishPage.module.css';

function FinishPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const playerCards1 = useSelector(selectedCards);
    const player2 = useSelector(cardsOfPlayer2);
    
    const [playerCards2, setPlayerCards2] = useState(player2);

    const onSelectedCard = (id) => {
        setPlayerCards2(prevState => (
            prevState.map((item) => (
                item.id === id
                ? { ...item, isSelected: !item.isSelected }
                : { ...item, isSelected: false }
            ))
        ))
    };
    
    const findIsSelectedCard = playerCards2.find((item) => item.isSelected);

    const addWinCard = () => {
        if(findIsSelectedCard) {
            findIsSelectedCard.isSelected = false
            dispatch(addCardsAsync(findIsSelectedCard));
            dispatch(cleanCards());
            history.replace(`${rootUrl}/game`);
        }
    };

    return (
        <div className={s.root}>
            <div className={s.player1}>
                {
                    Object.values(playerCards1).map(({ id, type, values, name, img }, index) => (
                        <div className={s.card} key={`${id}_${index}`}>
                            <Cards
                                id={id}
                                type={type}
                                values={values}
                                name={name}
                                img={img}
                                isActive
                            />
                        </div>
                    ))
                }
            </div>
            <Button 
                onClick={addWinCard}
                isDisabled={!findIsSelectedCard}
            >
                Завершить игру
            </Button>
            <div className={s.player2}>
                {
                    playerCards2.map(({ id, type, values, name, img, isSelected }, index) => (
                        <div 
                            className={s.card}
                            key={`${id}_${index}`}
                            onClick = {() => onSelectedCard(id)}
                        >
                            <Cards
                                id={id}
                                type={type}
                                values={values}
                                name={name}
                                img={img}
                                isActive
                                isSelected={isSelected}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FinishPage;
