import { useRef, useState } from 'react'

function LivingRoomEn() {

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
                            src="\assets\flat-img\living-room-img\living-room_1.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\living-room-img\living-room_2.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\living-room-img\living-room_3.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\living-room-img\living-room_4.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\living-room-img\living-room_5.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\living-room-img\living-room_6.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\living-room-img\living-room_8.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\living-room-img\living-room_9.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\living-room-img\living-room_10.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\living-room-img\living-room-games.jpg" alt="living room" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="living room pictures" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Guaranteed cosiness</h1>
                            <p>Warm colours, wooden furniture and a touch of leather - let's move on to what is 
                                probably the most charismatic room in the flat. In the living room, classic elegance 
                                can be combined with playfulness and entertainment. Whether it's cosy hours for two 
                                with a glass of wine and good music or braving the rainy weather with a thriller. Or 
                                why not round off the evening with a game of chess after a bike ride? It definitely 
                                won't be boring here.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="\assets\flat-img\living-room-img\living-room-books.jpg" alt="living room books"/>
                            </div>
                            <div className="text-to-image">
                                <p>The lovingly compiled library of old books is not only visually appealing, it also 
                                    contains one or two classics. And when do you have time to read them - on holiday, 
                                    of course! Ideal for reading on the beach or putting your feet up on the Chesterfield 
                                    sofa when the weather is bad.<br></br>If you want to get really cosy, simply switch on 
                                    the LED candles to make the room even cosier and create the right atmosphere.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="\assets\flat-img\living-room-img\living-room-lego.jpg" alt="Lego building blocks" />
                            </div>
                            <div className="text-to-image">
                                <p>A whole range of board games for all ages provide fun and entertainment. Even the 
                                    youngest children won't miss out and can pass the time with Lego bricks, 1000-piece 
                                    puzzles or card and quiz games. So just rummage through the cupboards and drawers, 
                                    there's plenty to be found.<br></br>The small black speaker, which can be operated via app and 
                                    fed with radio or streaming music, provides customised sound.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default LivingRoomEn;