import { Link } from 'react-router-dom'

function Flat() {

    return (
        <div>
            <main>
                <section>
                    <div className="banner">
                            <img className='header-image' src="/assets/flat-img/hall_banner.jpg" alt="" />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Viel Platz und viel zu entdecken</h1>
                            <p>Und das mit einem der schönsten Blicke über die Dächer der historischen Altstadt 
                                von Wismar. Ankommen, wohlfühlen und am liebsten gleich dableiben? Verbringe deine
                                Zeit im Apartment 5 wie sie dir gefällt, so kurz oder lang wie du möchtest.<br></br>
                                Hier sind dir keine Grenzen gesetzt &mdash; gehe auf Entdeckungstour oder mache es dir
                                mit einem Lieblingsgetränk, guter Musik oder einem alten Schmöker gemütlich.
                                Auf den 130qm des im herrschaftlichen Altbau gelegenen Apartments lassen
                                sich Freizeit oder Urlaub entspannt verbringen. Ohne sich gegenseitig auf die Füße
                                zu treten. Hier bekommst du viel Freiraum zum Abschalten und Auftanken.
                            </p>
                            <p>Kleine Tour gefällig? Klicke dich durch die einzelnen Räume und erfahre, was die Wohnung
                                einzigartig macht.
                            </p>
                        </div>
                        <div className="image-grid">
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/sleeping-room'}>
                                        <img src="/assets/flat-img/sleeping-room.jpg" alt="sleeping room"/>
                                        <div className="image-text">Schlafzimmer</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/living-room'}>
                                        <img src="/assets/flat-img/living-room.jpg" alt=""/>
                                        <div className="image-text">Wohnzimmer</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/dining-room'}>
                                        <img src="/assets/flat-img/dining-room.jpg" alt="sleeping room"/>
                                        <div className="image-text">Esszimmer</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/movie-room'}>
                                        <img src="/assets/flat-img/movie-room.jpg" alt=""/>
                                        <div className="image-text">Kinozimmer</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/kitchen'}>
                                        <img src="/assets/flat-img/kitchen.jpg" alt="sleeping room"/>
                                        <div className="image-text">Küche</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/bathroom'}>
                                        <img src="/assets/flat-img/bathroom.jpg" alt=""/>
                                        <div className="image-text">Badezimmer</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <img src="/assets/flat-img/utility-room.jpg" alt="sleeping room"/>
                                    <div className="image-text">Hauswirtschaftsraum</div>
                                </div>
                                <div className="image-grid-column">
                                    <img src="/assets/flat-img/roof.jpg" alt=""/>
                                    <div className="image-text">Dach</div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default Flat;