import { Link } from 'react-router-dom'

function City() {

    return (
        <div>
            <main>
                <section>
                    <div className="banner">
                            <img className='header-image' src="/assets/city-img/city_banner.jpg" alt="" />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Mittelalterliches Flair im 21. Jhd.</h1>
                            <p>Wismars Ursprünge reichen bis ins 13. Jhd. zurück. Architektonisch lässt sich die Historie auch 
                                heute noch an allen Ecken und Enden der Stadt bewundern. Nicht umsonst gehört Wismar mit einem 
                                der am besten erhaltenen Altstadtkerne zum UNESCO Weltkulturerbe.
                            </p>
                            <p>Wenn du bereits einen kleinen Vorgeschmack auf die Stadt bekommen möchtest, findest du hier 
                                bereits eine Auswahl an Sehenswürdigkeiten und Aktivitäten. Noch viel mehr über Wismar zu 
                                erfahren gibt es in den Weiten des Internets und der Stadtinformation.
                            </p>
                        </div>
                        <div className="image-grid">
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/de/churches'}>
                                        <img src="/assets/city-img/church.jpg" alt="st georg church"/>
                                        <div className="image-text">Kirchen</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/de/sights'}>
                                        <img src="/assets/city-img/wasserkunst.jpg" alt=""/>
                                        <div className="image-text">Sehenswürdigkeiten</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/de/tours'}>
                                        <img src="/assets/city-img/oldtimer.jpg" alt=""/>
                                        <div className="image-text">Touren</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/de/kids'}>
                                        <img src="/assets/city-img/wasserkunst.jpg" alt=""/>
                                        <div className="image-text">Kinder</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default City;