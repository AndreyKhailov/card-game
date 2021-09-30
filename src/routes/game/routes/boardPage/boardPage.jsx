import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router';

import { selectedCards, getPlayer2CardsAsync, boarding, cardsOfPlayer2, choiceCardAsync, choiceCardRequest } from '../../../../store/cards';

import { Cards } from '../../../../components';
import PlayerBoard from './component/playerBoard/playerBoard';

import s from './boardPage.module.css';

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        if(item.card && item.card.possession === 'red') {
            player2Count++;
        };

        if(item.card && item.card.possession === 'blue') {
            player1Count++;
        };
    });
    return [player1Count, player2Count];
};

const BoardPage = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const player1Cards = useSelector(selectedCards);
    const player2Cards = useSelector(cardsOfPlayer2);
    const getBoardPlate = useSelector(boarding);
    const choiceCardReq = useSelector(choiceCardRequest);

    const [board, setBoard] = useState(getBoardPlate);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(player1Cards).map((item) => ({
            ...item,
            possession: 'blue',
        }))
    });

    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);
    const [turn, setTurn] = useState(1);

    useEffect(() => {
        dispatch(getPlayer2CardsAsync());
    }, []);

    useEffect(() => {
        player2Cards.length && setPlayer2(player2Cards);
    }, [player2Cards]);

    useEffect(() => {
        choiceCardReq.length && setBoard(choiceCardReq);
    }, [choiceCardReq]);

    useEffect(() => {
        getBoardPlate.length && setBoard(getBoardPlate);
    }, [getBoardPlate]);

    if(!Object.keys(player1Cards).length) {
        history.replace('/game');
    };

    const onClickBoardPlate = async (position) => {
        if(choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board,
            };
            
            dispatch(choiceCardAsync(params));
            
            if(choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));
                setTurn((prev) => prev + 1)
            };
            
            if(choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id));
                setTurn((prev) => prev - 1)
            };

            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            });
        };
    };

    useEffect(() => {
        if(steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2);
            if(count1 > count2) {
                history.push('/game/finish');
                alert('WIN');
            } else if(count1 < count2) {
                alert('LOSE');
                history.push('/game/');
            } else {
                alert('DRAW');
                history.push('/game/');
            };
        };
    }, [steps])

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    turn={turn}
                    player={1}
                    cards={ player1 }
                    onClickCard={(card) => setChoiceCard(card)}
                />
            </div>
            <div className={s.board}>
                {
                    board.map(item => (
                        <div 
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card && onClickBoardPlate(item.position)}
                        >
                            {
                                item.card && <Cards {...item.card} isActive minimize />
                            }

                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    turn={turn}
                    player={2}
                    cards={ player2 }
                    onClickCard={(card) => setChoiceCard(card)} 
                />
            </div>
        </div>
    );
};

export default BoardPage;