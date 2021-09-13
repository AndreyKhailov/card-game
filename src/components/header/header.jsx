import s from './header.module.css';

function Header({ title, desc }) {
    const onClickStartGame = () => {
        console.log('onClickStartGame');
    };
    
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button 
                    onClick={onClickStartGame}
                >
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header;
