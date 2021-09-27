import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { CardsContext } from '../../../../context/cardsContext';

import { Cards } from '../../../../components';
import PlayerBoard from './component/playerBoard/playerBoard';

import s from './boardPage.module.css';

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;
    
    board.forEach(item => {
        if(item.card.possession === 'red') {
            player2Count++;
        };

        if(item.card.possession === 'blue') {
            player1Count++;
        };
    });
    return [player1Count, player2Count];
};

const BoardPage = () => {
    const history = useHistory();
    const playersCardsContext = useContext(CardsContext);
    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(playersCardsContext.playerCards1).map((item) => ({
            ...item,
            possession: 'blue',
        }))
    });

    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);
    const [turn, setTurn] = useState(1);

    useEffect(() => {
        async function fetch() {
            const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
            const boardRequest = await boardResponse.json();
            setBoard(boardRequest.data);
    
            const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
            const player2Request = await player2Response.json();
            setPlayer2(() => {
                return player2Request.data.map((item) => ({
                    ...item,
                    possession: 'red',
                }))
            });
        };
        fetch();
    }, []);

    useEffect(() => {
        if(player2.length === 5) {
            playersCardsContext.setPlayerCards2(player2);
        };
    }, [player2]);

    if(!Object.keys(playersCardsContext.playerCards1).length) {
        history.replace('/game');
    };

    const onClickBoardPlate = async (position) => {
        if(choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board,
            };
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            
            const request = await res.json();
            
            if(choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));
                setTurn((prev) => prev + 1)
            };
            
            if(choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id));
                setTurn((prev) => prev - 1)
            };

            setBoard(request.data);
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