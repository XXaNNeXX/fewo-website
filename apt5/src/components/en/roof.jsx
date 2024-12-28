import { useRef, useState } from 'react'

function RoofEn() {

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
                            alt="roof"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_1.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_2.jpg"
                            alt="roof"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_2.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_3.jpg"
                            alt="roof"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_3.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_4.jpg"
                            alt="roof"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_4.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_5.jpg"
                            alt="roof"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_5.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_6.jpg"
                            alt="roof"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_6.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_7.jpg"
                            alt="roof"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_7.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_8.jpg"
                            alt="roof"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_8.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_9.jpg"
                            alt="roof"
                            height="350"
                            onClick={() => handleImageClick('/assets/flat-img/roof-img/roof_9.jpg')}
                        />
                        <img 
                            className="scroll-image"
                            src="/assets/flat-img/roof-img/roof_10.jpg"
                            alt="roof"
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
                            alt="roof pictures"
                            id="img01"
                            src={modalImageSrc}
                        />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>At eye level with the seagulls</h1>
                            <p>Air, light and only the sky above you - even more space to make the most of your 
                                holiday freedom. For yoga classes, open-air breakfasts, sunbathing, open-air 
                                cinema or just to chill out - do what you like. With the most beautiful view 
                                over Wismar's rooftops and nature. And exclusively for you and your loved ones, 
                                without nosy neighbours.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="/assets/flat-img/roof-img/roof-relax.jpg" alt="roof chillout"/>
                            </div>
                            <div className="text-to-image">
                                <p>Enjoy the seclusion and let your gaze wander into the distance. Make yourself 
                                    comfortable at lofty heights with a picnic blanket, cushion and sun protection. 
                                    Switch off from the hustle and bustle of everyday life, simply forget the time and 
                                    don't let anyone disturb you. Enjoy the book you didn't manage to read or the music 
                                    that gets lost in the hustle and bustle of everyday life. Bring the day to a romantic 
                                    close with delicious treats and a &nbsp;
                                    <button onClick={openModal}
                                        style={{cursor: 'pointer'}}>
                                        &rarr; sunset
                                    </button>
                                    .
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
                                        alt="roof pictures"
                                    />
                                )}
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="/assets/flat-img/roof-img/roof-movie.jpg" alt="roof cinema"/>
                            </div>
                            <div className="text-to-image">
                                <p>Too boring for you? Then bring the entertainment experience to the roof. A projector and 
                                    screen make for the perfect cinema event on warm summer nights.<br></br>Photos of your 
                                    holiday activities will look even better on the screen. 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default RoofEn;