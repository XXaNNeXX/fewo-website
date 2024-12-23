import { Link } from 'react-router-dom'

function Coast() {

    return (
        <div>
            <main>
                <section>
                    <div className="banner">
                        <img className='header-image' src="/assets/coast-img/coast_banner.jpg" alt="" />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Sonne, Sand und Meer</h1>
                            <p>Von der mittelalterlichen Hafen- und Handelsstadt zum Urlaubsspot und Strandparadies. Wismars 
                                Küstenlage ist immer noch ein Anziehungspunkt. Für Entdecker und Urlauber, Wasserraten und 
                                Sonnenhungrige. Ob am Hafen ins Fischbrötchen beißen oder sich am Strand im Sand aalen, die 
                                Küste ist der perfekte Place-to-be.
                            </p>
                        </div>
                        <div className="image-grid">
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/harbour'}>
                                        <img src="/assets/coast-img/moewe.jpg" alt=""/>
                                        <div className="image-text">Hafen</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/beaches'}>
                                        <img src="/assets/coast-img/beach.jpg" alt=""/>
                                        <div className="image-text">Strände</div>
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

export default Coast;