import cn from 'classnames';

import s from './layout.module.css';

function Layout({ title, urlBg, colorBg, children }) {

    const styleLayout = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg,
    };

    return (
        <section className={s.root} style={styleLayout}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        { 
                            title && <h3>{title}</h3>
                        }
                        <span className={s.separator}></span>
                    </div>
                    <div className={cn(s.desc, s.full)}>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
