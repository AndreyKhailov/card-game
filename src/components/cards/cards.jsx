import cn from 'classnames';

import cardBackPic from '../../asserts/jpg/card-back-side.jpg';

import s from './cards.module.css';

function Cards({ id, type, values, name, img, activeCard, onClickCard }) {

    return (
        <div className={s.root} onClick={() => onClickCard(id) }>
            <div className={cn(s.pokemonCard, {[s.active]: activeCard})}>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap, s.front)}>
                        <div className={cn(s.pokemon, s[type])}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}>{values.top}</div>
                                <div className={cn(s.count, s.right)}>{values.right}</div>
                                <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                                <div className={cn(s.count, s.left)}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.cardBack}>
                    <div className={cn(s.wrap, s.back)}>
                        <img src={cardBackPic} alt="Сard Backed" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
