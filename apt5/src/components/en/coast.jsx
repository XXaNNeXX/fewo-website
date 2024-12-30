import { Link } from 'react-router-dom'

function CoastEn() {

    return (
        <div>
            <main>
                <section>
                    <div className="banner">
                        <img className='header-image' src="/assets/coast-img/coast_banner.jpg" alt="coast" />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Sun, sand and the sea</h1>
                            <p>From a medieval harbour and trading town to a holiday spot and beach paradise. 
                                Wismar's coastal location is still a centre of attraction. For explorers and 
                                holidaymakers, water lovers and sun-seekers. Whether you're tucking into a fish 
                                sandwich at the harbour or basking in the sand on the beach, the coast is the 
                                perfect place to be.
                            </p>
                        </div>
                        <div className="image-grid">
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/en/harbour'}>
                                        <img src="/assets/coast-img/moewe.jpg" alt="seagull"/>
                                        <div className="image-text">Harbour</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/en/beaches'}>
                                        <img src="/assets/coast-img/beach.jpg" alt="beach"/>
                                        <div className="image-text">Beaches</div>
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

export default CoastEn;