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
                            <p>Um deine Fragen schon vorab beantwortet zu bekommen, schaue dich in den &nbsp;
                                <button> 
                                    <Link to={'faqs'} className='link-style'>&rarr; FAQs</Link>
                                </button>
                                &nbsp; um.
                            </p>
                        </div>
                        <div className="image-grid">
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/sleeping-room'}>
                                        <img src="/assets/flat-img/sleeping-room-img/sleeping-room_1.jpg" alt="sleeping room"/>
                                        <div className="image-text">Schlafzimmer</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/living-room'}>
                                        <img src="/assets/flat-img/living-room-img/living-room_2.jpg" alt=""/>
                                        <div className="image-text">Wohnzimmer</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/dining-room'}>
                                        <img src="/assets/flat-img/dining-room-img/dining-room_1.jpg" alt="sleeping room"/>
                                        <div className="image-text">Esszimmer</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/movie-room'}>
                                        <img src="/assets/flat-img/movie-room-img/movie-room_3.jpg" alt=""/>
                                        <div className="image-text">Kinozimmer</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/kitchen'}>
                                        <img src="/assets/flat-img/kitchen-img/kitchen_1.jpg" alt="sleeping room"/>
                                        <div className="image-text">Küche</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/bathroom'}>
                                        <img src="/assets/flat-img/bath-room-img/bathroom_1.jpg" alt=""/>
                                        <div className="image-text">Badezimmer</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/housekeeping-room'}>
                                        <img src="/assets/flat-img/housekeeping-room-img/housekeeping_1.jpg" alt="sleeping room"/>
                                        <div className="image-text">Hauswirtschaftsraum</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/roof'}>
                                        <img src="/assets/flat-img/roof-img/roof.jpg" alt=""/>
                                        <div className="image-text">Dach</div>
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

export default Flat;