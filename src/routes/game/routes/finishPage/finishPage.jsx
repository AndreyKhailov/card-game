import { useContext } from 'react';
import { useHistory } from 'react-router';
import cn from 'classnames';

import { FireBaseContext } from '../../../../context/fireBaseContext';
import { CardsContext } from '../../../../context/cardsContext';

import { Cards } from '../../../../components';

import s from './finishPage.module.css';

function FinishPage() {
    const history = useHistory();
    const firebase = useContext(FireBaseContext);
    const { playerCards1, playerCards2, setPlayerCards2, onClean } = useContext(CardsContext);

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
            findIsSelectedCard && firebase.setCard(findIsSelectedCard);
            onClean();
            history.replace('/game');
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
            <button 
                className={cn(s.btn, {[s.desable]: !findIsSelectedCard})}
                onClick={addWinCard}
            >
                end game
            </button>
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
