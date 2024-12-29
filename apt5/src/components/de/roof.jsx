import { useRef, useState } from 'react'

function Roof() {

    const [modalImageSrc, setModalImageSrc] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalRef = useRef(null);
    const modalImgRef = useRef(null);

    const galleryImages = [
        '/assets/flat-img/roof-img/sun_1.jpg',
        '/assets/flat-img/roof-img/sun_2.jpg',
        '/assets/flat-img/roof-img/sun_3.jpg',
        '/assets/flat-img/roof-img/sun_4.jpg',
        '/assets/flat-img/roof-img/sun_5.jpg',
        '/assets/flat-img/roof-img/sun_6.jpg',
        '/assets/flat-img/roof-img/sun_7.jpg'
    ];

    const handleImageClick = (src) => {
        const imageIndex = galleryImages.indexOf(src);
    
        if (imageIndex !== -1) {
            setCurrentIndex(imageIndex);
            setIsModalOpen(true);
        } else {
            setModalImageSrc(src);
            setIsModalOpen(false);
        }
    
        modalRef.current.style.display = 'block';
    };

    const handleCloseClick = () => {
        modalRef.current.style.display = "none";
    };

    const openModal = () => {
        setIsModalOpen(true);
        modalRef.current.style.display = 'block';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        modalRef.current.style.display = 'none';
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div>
            <main>
                <section>
                    <div className="scroll-container">
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_1.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_1.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_2.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_2.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_3.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_3.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_4.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_4.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_5.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_5.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_6.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_6.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_7.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_7.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_8.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_8.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_9.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_9.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_10.jpg"
                            alt="Dach"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_10.jpg')}
                        />
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>
                            &times;
                        </span>
                        <img 
                            ref={modalImgRef}
                            className="modal-content"
                            alt="Dach Fotos"
                            id="img01"
                            src={modalImageSrc}
                        />
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
                                <img src="/assets/flat-img/roof-img/roof-relax.jpg" alt="Getränke"/>
                            </div>
                            <div className="text-to-image">
                                <p>Genieße die Abgeschiedenheit und lasse den Blick in die Ferne schweifen. Mache es dir in 
                                    luftiger Höhe gemütlich mit Picknickdecke, Kissen und Sonnenschutz. Abschalten vom 
                                    Alltagstrubel, einfach mal die Zeit vergessen, dich von niemandem stören lassen. Genieße 
                                    das Buch, das du nicht geschafft hast zu lesen oder die Musik, die im Alltagstroubel untergeht.
                                    Lasse den Tag bei Leckereien und &nbsp;
                                    <button onClick={openModal}
                                        style={{cursor: 'pointer'}}>
                                        &rarr; Sonnenuntergang
                                    </button>
                                    &nbsp; romantisch ausklingen.
                                </p>
                            </div>
                            <div ref={modalRef} id="myModal" className="modal">
                                <span className="close" onClick={closeModal}>&times;</span>
                                {isModalOpen ? (
                                    <div className="gallery-container">
                                        <button className="prev" onClick={prevImage}>&#10094;</button>
                                        <img
                                            ref={modalImgRef}
                                            className="modal-content"
                                            src={galleryImages[currentIndex]}
                                            alt={`${currentIndex + 1}`}
                                        />
                                        <button className="next" onClick={nextImage}>&#10095;</button>
                                    </div>
                                ) : (
                                    <img
                                        ref={modalImgRef}
                                        className="modal-content"
                                        src={modalImageSrc}
                                        alt="Selected Pic"
                                    />
                                )}
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="/assets/flat-img/roof-img/roof-movie.jpg" alt="Beamer"/>
                            </div>
                            <div className="text-to-image">
                                <p>Ist dir alles zu langweilig? Dann bring das Entertainment-Erlebnis mit aufs Dach. Beamer und 
                                    Leinwand sorgen für das perfekte Kino-Event in lauen Sommernächten.<br></br>Fotos von deinen 
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