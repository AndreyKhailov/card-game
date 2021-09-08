import s from './header.module.css';

function Header({ title, desc }) {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                {
                   title && <h1>{title}</h1>
                }
                {
                   desc && <p>{desc}</p>
                }
            </div>
        </header>
    )
}

export default Header;
