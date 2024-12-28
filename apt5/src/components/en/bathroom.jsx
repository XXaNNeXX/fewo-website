import { useRef, useState } from 'react'

function BathroomEn() {

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
                            src="\assets\flat-img\bath-room-img\bathroom_1.jpg" alt="bathroom" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_2.jpg" alt="bathroom" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_3.jpg" alt="bathroom" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_4.jpg" alt="bathroom" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_5.jpg" alt="bathroom" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_6.jpg" alt="bathroom" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_7.jpg" alt="bathroom" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="bathroom images" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Wellness Oasis</h1>
                            <p>For all those who like to spend more time in the bathroom: this is the perfect place to take 
                                care of your inner as well as your outer well-being. And because it's simply more fun, 
                                you'll get the extra entertainment kick with a TV inside the mirror. Even brushing your teeth 
                                is suddenly no longer boring.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="\assets\flat-img\bath-room-img\bathroom-thermo.jpg" alt="Floor heating"/>
                            </div>
                            <div className="text-to-image">
                                <p>Thanks to the double washbasin, you don't get in each other's way in the morning. The wide 
                                    mirror with large LED lighting provides the right light for your morning or evening mood.
                                    <br></br>For the perfect shower experience you can choose from natural cosmetics that 
                                    wash off even the last bit of beach sand. And if you need it cosy and warm on colder days,
                                    the underfloor heating ensures the right temperature.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="\assets\flat-img\bath-room-img\bathroom-frame.jpg" alt="Bathroom photo frame"/>
                            </div>
                            <div className="text-to-image">
                                <p>The extra guest WC also offers enough space for everybody to take care of their hygiene 
                                    routine in the morning. With the original shots of some of the details of Wismar's harbour, 
                                    you can get yourself into the right mood for your next excursion. By the way, you can look 
                                    up the photographed objects on the map in the welcome book, if you want to rediscover them 
                                    on a short harbour tour.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default BathroomEn;