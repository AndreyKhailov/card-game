import React, { useContext } from 'react';

import { CardsContext } from '../../../../context/cardsContext';

import { Cards } from '../../../../components';

import s from './boardPage.module.css';

const BoardPage = () => {
    const { selectedCards } = useContext(CardsContext);

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
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;