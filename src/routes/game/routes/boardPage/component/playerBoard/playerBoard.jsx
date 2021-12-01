import { useState } from 'react';
import cn from 'classnames';

import { Cards } from '../../../../../../components';

import s from './playerBoard.module.css';

function PlayerBoard({ turn, player, cards, onClickCard }) {
    const [isSelected, setSelected] = useState(null);

    return (
        <>
            {
                cards.map((item, index) => (
                    <div key={`${item.id}_${index}`} className={cn(s.cardBoard, {
                        [s.selected]: isSelected === item.id
                    })}
                        onClick={() => {
                            if(turn === player) {
                                setSelected(item.id);
                                onClickCard && onClickCard({
                                    player,
                                    ...item,
                                });
                            }
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
