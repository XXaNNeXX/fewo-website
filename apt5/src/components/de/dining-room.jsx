import { useRef, useState } from 'react'

function DiningRoom() {

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
                            src="\assets\flat-img\dining-room-img\dining-room_1.jpg" alt="Esszimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_2.jpg" alt="Esszimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_3.jpg" alt="Esszimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_4.jpg" alt="Esszimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_5.jpg" alt="Esszimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_6.jpg" alt="Esszimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\dining-room-img\dining-room_7.jpg" alt="Esszimmer" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="Esszimmer Fotos" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Workation? Klar!</h1>
                            <p>Der Raum, der beides kann: Arbeitszimmer und Esszimmer. Geeignet für all deine Projekte: Ob digitales 
                                oder Frühstücksprojekt, künstlerisches Mal- oder Foodie Kreativprojekt, hier kannst du Workshops 
                                zwischenschieben, Ideen sammeln oder deine Kochkünste auftischen. Lass' dich inspirieren von den 
                                handgefertigten Bildern oder genieße den Ausblick über die grünen Baumwipfel der Stadt.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="\assets\flat-img\dining-room-img\dining-room-desk.jpg" alt="Schreibtisch"/>
                            </div>
                            <div className="text-to-image">
                                <p>Am höhenverstellbaren Schreibtisch lassen sich rückenfreundlich deine (digitalen) Ideen verwirklichen. 
                                Für den eigens mitgebrachten Laptop stehen dir ein extra Bildschirm und passende Anschlussadapter 
                                wie Thunderbolt, Micro-HDMI und USB-C zur Verfügung. Damit lässt sich problemlos so ziemlich jeder 
                                Laptop für den Second-Screen-Bedarf anstöpseln. Das Handy oder Tablet übrigens auch. Ein paar 
                                Lautsprecher peppen zu guter Letzt die Tonspur auf. Worauf wartest du noch? Auf ins digitale Vergnügen!
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="\assets\flat-img\dining-room-img\dining-room-paint.jpg" alt="Malsachen" />
                            </div>
                            <div className="text-to-image">
                                <p>Für kleine Künstlerinnen und Künstler beherbergen die Kommodenschubladen passende Malutensilien. Hilft 
                                    gegen Langeweile und auch an einem doch mal verregneten Urlaubstag.<br></br>Nicht nur für raumgreifende 
                                    Malprojekte sondern auch für ausgelassene Food-Sessions eignet sich der rustikale Kiefernholztisch 
                                    besonders gut. Hier hast du Platz für Vorspeise, Hauptgang und Nachspeise oder die leckeren mitgebrachten 
                                    Pizzen vom Italiener um die Ecke. Um dem Verdauungsspaziergang zu entfliehen, mach's dir einfach auf der 
                                    Couch gemütlich, nur eine von vielen Relax-Möglichkeiten in der Wohnung.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default DiningRoom;