
import s from './layout.module.css';

function Layout({ title, desc, urlBg, colorBg }) {

    const styleLayout = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg,
    }

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
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
