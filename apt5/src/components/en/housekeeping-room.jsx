import { useRef, useState } from 'react'

function HousekeepingRoomEn() {

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
                            src="/assets/flat-img/housekeeping-room-img/housekeeping_1.jpg" alt="housekeeping room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/housekeeping-room-img/housekeeping_2.jpg" alt="housekeeping room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/housekeeping-room-img/housekeeping_3.jpg" alt="housekeeping room" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/housekeeping-room-img/housekeeping_4.jpg" alt="housekeeping room" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="housekeeping room pictures" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>All-round care</h1>
                            <p>Even on holiday, you don't want to be without anything and have everything you need to hand. 
                                In the utility room, you'll find all the little helpers you need to overcome small challenges 
                                in no time at all. Whether it's fighting woolly mice, making LED candles shine again or 
                                removing creases from your favourite summer clothes.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="/assets/flat-img/housekeeping-room-img/housekeeping-equipment.jpg" alt="housekeeping equipment"/>
                            </div>
                            <div className="text-to-image">
                                <p>In addition to the classic iron, ironing board and hoover, you will also find a few other 
                                    handy utensils that can save your everyday holiday life: 
                                    <ul>
                                        <li>Organic colour and heavy-duty detergents as well as fabric softeners</li>
                                        <li>Clothes pegs and clothes horse</li>
                                        <li>Laundry nets and basket</li>
                                        <li>Hand brush and dustpan</li>
                                        <li>Stool (so that the little ones can reach the washbasin, for example)</li>
                                        <li>Batteries</li>
                                        <li>Light bulbs</li>
                                        <li>Instruction manuals</li>
                                        <li>Screw-top jars (if you want to take souvenirs or leftovers home with you)</li>
                                        <li>Sunglasses, umbrella, mobile phone holder for bikes</li>
                                    </ul> 
                                </p>
                            </div>
                        </div>
                        <div className='text'>
                            <p>You can use everything and adapt it to your needs. And of course here you can also store 
                                everything that would otherwise get in the way. That's why the screen for the projector 
                                can also be found in the utility room.
                            </p>
                    </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default HousekeepingRoomEn;