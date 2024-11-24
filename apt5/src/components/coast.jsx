import { Link } from 'react-router-dom'

function Coast() {

    return (
        <div>
            <main>
                <section>
                    <div className="banner">
                        <img className='header-image' src="/assets/coast-img/wohlendorfer-wiek.png" alt="" />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Sonne, Sand und Meer</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
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
                                    <img src="/assets/coast-img/bridge.jpg" alt=""/>
                                    <div className="image-text">Strände</div>
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