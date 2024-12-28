import { Link } from 'react-router-dom'

function FlatEn() {

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
                            <h1>Plenty of space and lots to discover</h1>
                            <p>With one of the most beautiful views over the rooftops of Wismar. Arrive, 
                                feel at home and want to stay right away? Spend your time in Apartment 5 however 
                                you like, as short or as long as you like.<br></br>There are no limits here 
                                - go on a discovery tour or make yourself comfortable with a favourite 
                                drink, good music or an old book. The 130 m² flat in the stately old building 
                                is the perfect place to spend your free time or holidays in a relaxed atmosphere. 
                                Without stepping on each other's toes. Here you have plenty of space to switch off 
                                and recharge your batteries.
                            </p>
                            <p>Fancy a little tour? Click through the individual rooms and find out what makes the 
                                flat unique.
                            </p>
                            <p>To get your questions answered in advance, take a look at the &nbsp;
                                <button> 
                                    <Link to={'/de/faqs'} className='link-style'>&rarr; FAQs</Link>
                                </button>
                                .
                            </p>
                        </div>
                        <div className="image-grid">
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/en/sleeping-room'}>
                                        <img src="/assets/flat-img/sleeping-room-img/sleeping-room_1.jpg" alt="sleeping room"/>
                                        <div className="image-text">Sleeping<br></br>Room</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/en/living-room'}>
                                        <img src="/assets/flat-img/living-room-img/living-room_2.jpg" alt="living room"/>
                                        <div className="image-text">Living<br></br>Room</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/en/dining-room'}>
                                        <img src="/assets/flat-img/dining-room-img/dining-room_1.jpg" alt="dining room"/>
                                        <div className="image-text">Dining<br></br>Room</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/en/movie-room'}>
                                        <img src="/assets/flat-img/movie-room-img/movie-room_3.jpg" alt="cinema room"/>
                                        <div className="image-text">Cinema<br></br>Room</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/en/kitchen'}>
                                        <img src="/assets/flat-img/kitchen-img/kitchen_1.jpg" alt="kitchen"/>
                                        <div className="image-text">Kitchen</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/en/bathroom'}>
                                        <img src="/assets/flat-img/bath-room-img/bathroom_1.jpg" alt="bathroom"/>
                                        <div className="image-text">Bathroom</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-grid-row">
                                <div className="image-grid-column">
                                    <Link to={'/en/housekeeping-room'}>
                                        <img src="/assets/flat-img/housekeeping-room-img/housekeeping_1.jpg" alt="housekeeping room"/>
                                        <div className="image-text">Housekeeping<br></br>Room</div>
                                    </Link>
                                </div>
                                <div className="image-grid-column">
                                    <Link to={'/en/roof'}>
                                        <img src="/assets/flat-img/roof-img/roof.jpg" alt="roof"/>
                                        <div className="image-text">Roof</div>
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

export default FlatEn;