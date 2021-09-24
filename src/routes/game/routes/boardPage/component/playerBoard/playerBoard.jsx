import React, { useState } from 'react';
import cn from 'classnames';

import { Cards } from '../../../../../../components';

import s from './playerBoard.module.css';

function PlayerBoard({ player, cards, onClickCard }) {
    const [isSelected, setSelected] = useState(null);

    return (
        <>
            {
                cards.map((item) => (
                    <div key={item.id} className={cn(s.cardBoard, {
                        [s.selected]: isSelected === item.id
                    })}
                        onClick={() => {
                            setSelected(item.id);
                            onClickCard && onClickCard({
                                player,
                                ...item,
                            });
                        }}
                    >
                        <Cards
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            name={item.name}
                            img={item.img}
                            isActive
                            minimize
                        />
                    </div>
                ))
            }
        </>
    )
}

export default PlayerBoard;
