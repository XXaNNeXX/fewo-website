import { useRef, useState } from 'react'

function MovieRoomEn() {

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
                            src="\assets\flat-img\movie-room-img\movie-room_1.jpg" alt="cinema room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_2.jpg" alt="cinema room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_3.jpg" alt="cinema room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_4.jpg" alt="cinema room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_5.jpg" alt="cinema room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_6.jpg" alt="cinema room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_7.jpg" alt="cinema room" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="cinema room pictures" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Pure entertainment</h1>
                            <p>The right room for even more entertainment and gaming fun. For film-filled 
                                streaming evenings and ambitious battles on the Playstation. But also the 
                                second bedroom for your nightly rest. With a large sofa area for lazing around, 
                                stretching your legs, spreading out and eating popcorn. Crumbling is allowed, 
                                by the way. Whether it's in the morning after waking up, before your first coffee, 
                                simply indulging in the next episode of your favourite series or sinking 
                                victoriously into the pillows after a night of gaming. Decide what you like.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="\assets\flat-img\movie-room-img\movie-room-training.jpg" alt="training equipment"/>
                            </div>
                            <div className="text-to-image">
                                <p>The 2.50 m wide sofa area offers enough space for a large audience, side by side for 
                                    a film evening or for big late risers in a sleeping position.<br></br>The small sports 
                                    corner at the back of the room is available for bumbling bums, tingly legs or the urge 
                                    to exercise in between. A fitness mat, fascia roller and dumbbells are the ideal 
                                    companions for morning yoga sessions or your daily workout, which you might not want 
                                    to miss on holiday.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="\assets\flat-img\movie-room-img\movie-room-light.jpg" alt="light wall" />
                            </div>
                            <div className="text-to-image">
                                <p>The photographs on the walls show Wismar from its most beautiful side and can all be 
                                    admired on a tour of the city. You can find them on the map in the welcome book that 
                                    comes with the flat.<br></br>When even the best day of your holiday comes to an end, 
                                    you can use the LED wall to bring light back into the darkness and end the evening of 
                                    entertainment in a cosy atmosphere. 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default MovieRoomEn;