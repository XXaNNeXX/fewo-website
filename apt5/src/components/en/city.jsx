import { Link } from 'react-router-dom'

function CityEn() {

    return (
        <div>
            <main>
                <section>
                    <div className="banner">
                            <img className='header-image' src="/assets/city-img/city_banner.jpg" alt="old town" />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Medieval flair in the 21st century</h1>
                            <p>Wismar's origins date back to the 13th century. Architecturally, its history can still 
                                be admired in every nook and cranny of the city. It is not for nothing that Wismar is 
                                a UNESCO World Heritage Site with one of the best-preserved old town centres.
                            </p>
                            <p>If you would like to get a taste of the city, you can find a selection of sights and 
                                activities here. There is even much more to learn about Wismar in the vastness of the 
                                internet and the city information centre.
                            </p>
                        </div>
                        <div className="image-grid">
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/en/churches'}>
                                        <img src="/assets/city-img/church.jpg" alt="st georg church"/>
                                        <div className="image-text">Churches</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/en/sights'}>
                                        <img src="/assets/city-img/wasserkunst.jpg" alt="Wasserkunst"/>
                                        <div className="image-text">Sights</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/en/tours'}>
                                        <img src="/assets/city-img/oldtimer.jpg" alt="classic car"/>
                                        <div className="image-text">Tours</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/en/kids'}>
                                        <img src="/assets/city-img/playground.jpg" alt=""/>
                                        <div className="image-text">Children</div>
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

export default CityEn;