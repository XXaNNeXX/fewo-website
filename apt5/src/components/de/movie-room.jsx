import { useRef, useState } from 'react'

function MovieRoom() {

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
                            src="\assets\flat-img\movie-room-img\movie-room_1.jpg" alt="Kinozimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_2.jpg" alt="Kinozimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_3.jpg" alt="Kinozimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_4.jpg" alt="Kinozimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_5.jpg" alt="Kinozimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_6.jpg" alt="Kinozimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\movie-room-img\movie-room_7.jpg" alt="Kinozimmer" height="350"
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
                            <h1>Entertainment pur</h1>
                            <p>Der richtige Raum für noch mehr Unterhaltung und Spielspaß. Für filmfüllende Streaming-Abende und 
                                ehrgeizige Battles an der Playstation. Aber auch das zweite Schlafzimmer für deine nächtliche Ruhe. 
                                Mit großer Sofalandschaft zum Faulenzen, die-Beine-lang-machen, ausgiebig ausbreiten und Popcorn 
                                verzehren. Krümeln ist übrigens erlaubt. Egal ob morgens nach dem Aufwachen, vor dem ersten Kaffee, 
                                sich einfach die nächste Folge der Lieblingsserie gönnen oder von der nächtlichen Zockerrunde 
                                siegreich in die Kissen sinken. Entscheide, was dir gefällt.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="\assets\flat-img\movie-room-img\movie-room-training.jpg" alt="Traingsequipment"/>
                            </div>
                            <div className="text-to-image">
                                <p>Die 2,50 m breite Sofalandschaft bietet ausreichend Platz für ein großes Publikum, nebeneinander beim 
                                    Filmabend oder für große Langschläfer in Schlafposition. <br></br>Für Hummeln im Hintern, kribbelige Beine 
                                    oder den Bewegungsdrang zwischendurch steht dir die kleine Sportecke im hinteren Bereich des Raumes zur 
                                    Verfügung. Fitnessmatte, Faszienrolle und Hanteln sind die idealen Begleiter für morgendliche 
                                    Yoga-Stunden oder dein Tagesworkout, das du vielleicht auch im Urlaub nicht missen möchtest.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="\assets\flat-img\movie-room-img\movie-room-light.jpg" alt="LED-Wand" />
                            </div>
                            <div className="text-to-image">
                                <p>Die Fotografien an den Wänden zeigen Wismar von ihrer schönsten Seite und lassen sich allesamt 
                                    bei einem Stadtrundgang bewundern. Im wohnungzugehörigen Willkommensbuch kannst du sie auf der 
                                    Karte ausmachen und aufsuchen. <br></br>Wenn sich irgendwann auch der tollste Urlaubstag dem Ende
                                    zuneigt, bringst du mit der LED-Wand wieder Licht ins Dunkel, um den Entertainment-Abend in
                                    gemütlicher Atmosphäre ausklingen zu lassen. 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default MovieRoom;