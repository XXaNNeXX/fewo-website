import { Link } from 'react-router-dom'

function City() {

    return (
        <div>
            <main>
            <section>
                    <div className="banner">
                            <img className='header-image' src="/assets/city-img/church.jpg" alt="" />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Mittelalterliches Flair im 21. Jhd.</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="image-grid">
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/churches'}>
                                        <img src="/assets/city-img/st-georg.jpg" alt="st georg church"/>
                                        <div className="image-text">Kirchen</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <img src="/assets/city-img/wasserkunst.jpg" alt=""/>
                                    <div className="image-text">Sehenswürdigkeiten</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Touren</p>
                            <p>Kinder</p>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default City;