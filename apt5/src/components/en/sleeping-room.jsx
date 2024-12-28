import { useRef, useState } from 'react'

function SleepingRoomEn() {

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
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_1.jpg" alt="sleeping room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_2.jpg" alt="sleeping room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_3.jpg" alt="sleeping room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_4.jpg" alt="sleeping room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_5.jpg" alt="sleeping room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_6.jpg" alt="sleeping room" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="sleeping room pictures" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>A place to dream</h1>
                            <p>For cosying up, sleeping in and waking up refreshed. For late sleepers and early 
                                risers. Whether leaning back into a soft pillow and enjoying a Sunday roll, turning 
                                to the other side and letting the morning be morning or welcoming the children who 
                                are already crawling into bed and are ready to go. Your start to your first day of 
                                your stay is completely individual - after all, it's your time.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="/assets/flat-img/sleeping-room-img/sleeping-room-cushion.jpg" alt="pillow"/>
                            </div>
                            <div className="text-to-image">
                                <p>The king-size bed makes it possible. Pleasant comfort width and a choice of pillows 
                                    that you might recognise from a hotel.<br></br>Large, soft pillows or narrower, firmer 
                                    ones. How you make your bed is how you sleep, right?<br></br>Thinner blankets for 
                                    warmer nights or thicker blankets for those who get cold easily. You decide.<br></br>
                                    Two mattress firmnesses for individual sleeping comfort, H2 with a firmer mattress on 
                                    the left side and H3 for a softer mattress on the right side. The choice of sleep is 
                                    yours.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="/assets/flat-img/sleeping-room-img/sleeping-room-armchair.jpg" alt="armchair" />
                            </div>
                            <div className="text-to-image">
                                <p>In the cosy armchair directly opposite, you can indulge in your dreams, sip your first 
                                    coffee of the day, wrapped up in the comfortable waffle piqué dressing gown, or watch the 
                                    feather clouds through the window.<br></br>Insects have to stay outside, the fly net in 
                                    front of the window keeps out unwanted neighbours. On warmer days, simply switch on the 
                                    small, powerful fan, which can be conveniently controlled by remote control from anywhere. 
                                    <br></br>And when you're ready for the beach, simply grab a beach bag, beach towels or 
                                    beach tent from the wardrobe.<br></br>If it gets too bright for you at bedtime, the bedroom 
                                    can be shrouded in complete darkness thanks to the light-proof curtains.
                                     </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default SleepingRoomEn;