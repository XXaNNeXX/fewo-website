import { useRef, useState } from 'react'

function DiningRoomEn() {

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
                            src="\assets\flat-img\dining-room-img\dining-room_1.jpg" alt="dining room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_2.jpg" alt="dining room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_3.jpg" alt="dining room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_4.jpg" alt="dining room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_5.jpg" alt="dining room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_6.jpg" alt="dining room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_7.jpg" alt="dining room" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="dining room pictures" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Workation? Sure!</h1>
                            <p>The room that can do both: Study and dining room. Suitable for all your projects: 
                                Whether it's a digital or breakfast project, artistic painting or foodie creative 
                                project, here you can squeeze in workshops, gather ideas or dish up your cookery 
                                skills. Be inspired by the handmade pictures or enjoy the view over the green 
                                treetops of the town.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="\assets\flat-img\dining-room-img\dining-room-desk.jpg" alt="desk equipment"/>
                            </div>
                            <div className="text-to-image">
                                <p>The height-adjustable desk allows you to realise your (digital) ideas without straining 
                                    your back. An extra screen and suitable connection adapters such as Thunderbolt, 
                                    Micro-HDMI and USB-C are available for the laptop you have brought with you. This means 
                                    that pretty much any laptop can easily be plugged in for second screen use. As can your 
                                    mobile phone or tablet. Last but not least, a pair of speakers spice up the soundtrack. 
                                    What are you waiting for? Let's go for the digital fun!
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="\assets\flat-img\dining-room-img\dining-room-paint.jpg" alt="paint equpiment" />
                            </div>
                            <div className="text-to-image">
                                <p>For little artists, the chest drawers contain suitable painting utensils. Helps against boredom 
                                    and also on rainy days.<br></br>The rustic pine table is not only ideal for space-consuming 
                                    painting projects, but also for lively food sessions. Here you have space for a starter, main 
                                    course and dessert or the delicious pizzas you brought with you from the Italian restaurant 
                                    around the corner. To escape the digestive walk, simply make yourself comfortable on the sofa, 
                                    just one of the many relaxation options in the flat.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default DiningRoomEn;