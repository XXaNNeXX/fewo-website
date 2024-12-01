import { useRef, useState } from 'react'

function Roof() {

    const [modalImageSrc, setModalImageSrc] = useState('');
    const modalRef = useRef(null);
    const modalImgRef = useRef(null);

    const handleImageClick = (event) => {
        const imgSrc = event.target.src;
        setModalImageSrc(imgSrc);
        modalRef.current.style.display = 'block';
    };

    const handleCloseClick = () => {
        modalRef.current.style.display = "none";
    };

    return (
        <div>
            <main>
                <section>
                    <div className="scroll-container">
                    <img className="scroll-image" 
                            src="" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="" alt="" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Mit den Möwen auf Augenhöhe</h1>
                            <p>Luft, Licht und nur noch der Himmel über dir - noch mehr Platz, um deinen Urlaubsfreiraum perfekt 
                                zu nutzen. Für Yoga-Stunden, Freiluftfrühstück, Sonnenbaden, Open Air Kino oder einfach nur um zu 
                                chillaxen - mach was dir gefällt. Mit schönstem Blick über Wismars Dächer und Natur. Und das ganz
                                exklusiv nur für dich und deine Liebsten, ohne neugierige Nachbarn.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="" alt=""/>
                            </div>
                            <div className="text-to-image">
                                <p>Genieße die Abgeschiedenheit und lasse den Blick in die Ferne schweifen. Mache es dir in 
                                    luftiger Höhe gemütlich mit Picknickdecke, Kissen und Sonnenschutz. Abschalten vom 
                                    Alltagstrubel, einfach mal die Zeit vergessen, dich von niemandem stören lassen. Genieße 
                                    das Buch, das du nicht geschafft hast zu lesen oder die Musik, die im Alltagstroubel untergeht.
                                    Lasse den Tag bei Leckereien und Sonnenuntergang romantisch ausklingen.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="" alt=""/>
                            </div>
                            <div className="text-to-image">
                                <p>Ist dir alles zu langweilig? Dann bring das Entertainment-Erlebnis mit aufs Dach. Beamer und 
                                    Leinwand sorgen für das perfekte Kino-Event in lauen Sommernächten. Fotos von deinen 
                                    Urlaubsaktivitäten lassen sich auf der Leinwand noch viel besser bestaunen. 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default Roof;