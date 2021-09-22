import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { CardsContext } from '../../../../context/cardsContext';

import { Cards } from '../../../../components';

import s from './boardPage.module.css';

const BoardPage = () => {
    const [board, setBoard] = useState([]);
    const [player2, setPlayer2] = useState([]);
    const { selectedCards } = useContext(CardsContext);
    const history = useHistory();

    useEffect( async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();
        setPlayer2(player2Request.data);
    }, []);

    if(!Object.keys(selectedCards).length) {
        history.replace('/game');
    };

    const onClickBoardPlate = (pos) => {
        console.log('click', pos)
    };

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    Object.values(selectedCards).map(({ id, type, values, name, img}) => (
                        <Cards
                            className={s.card}
                            key={id}
                            id={id}
                            type={type}
                            values={values}
                            name={name}
                            img={img}
                            isActive
                            minimize={true}
                        />
                    ))
                }
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
                                item.card && <Cards {...item} minimize />
                            }

                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                {
                    player2.map(({ id, type, values, name, img}) => (
                        <Cards
                            className={s.card}
                            key={id}
                            id={id}
                            type={type}
                            values={values}
                            name={name}
                            img={img}
                            isActive
                            minimize={true}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default BoardPage;