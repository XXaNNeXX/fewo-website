import { useRef, useState } from 'react'

function SleepingRoom() {

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
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_1.jpg" alt="Schlafzimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_2.jpg" alt="Schlafzimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_3.jpg" alt="Schlafzimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_4.jpg" alt="Schlafzimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_5.jpg" alt="Schlafzimmer" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/sleeping-room-img/sleeping-room_6.jpg" alt="Schlafzimmer" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="Schlafzimmer Fotos" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>Ein Platz zum Träumen</h1>
                            <p>Zum Einkuscheln, Ausschlafen und erholt Aufwachen. Für Langschläfer und Frühaufsteher. 
                                Ob entspannt ins weiche Kissen gelehnt und genüsslich ins Sonntagsbrötchen gebissen, lieber 
                                nochmal auf die andere Seite gedreht und den Morgen Morgen sein lassen oder die ins Bett 
                                krabbelnden und schon putzmunteren Kinder in Empfang nehmend. Dein Start in deinen ersten 
                                Aufenthaltstag beginnt ganz individuell, es ist schließlich deine Zeit.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="/assets/flat-img/sleeping-room-img/sleeping-room-cushion.jpg" alt="Kopfkissen"/>
                            </div>
                            <div className="text-to-image">
                                <p>Das Kingsize Bett macht's möglich. Angenehme Komfortbreite und eine Kissenwahl, wie du sie 
                                    vielleicht aus dem Hotel kennst.<br></br>Große, weiche Kissen oder schmalere, festere. Wie man sich 
                                    bettet, so schläft man, oder?<br></br>Dünnere Decken für wärmere Nächte oder dickere Decken für alle, die 
                                    schnell frieren. Du entscheidest.<br></br>Zwei Matratzenstärken für individuellen Liegekomfort, H2 mit 
                                    einem härteren Liegegrad auf der linken Seite und H3 für ein weicheres Liegegefühl auf der rechten 
                                    Seite. Du hast die Schlafwahl.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="/assets/flat-img/sleeping-room-img/sleeping-room-armchair.jpg" alt="Sessel" />
                            </div>
                            <div className="text-to-image">
                                <p>Im gemütlichen Sessel gleich gegenüber kannst du noch ein bisschen deinen Träumen nachhängen, in den 
                                    bequemen Waffelpiqué Morgenmantel gehüllt deinen ersten Kaffee des Tages schlürfen oder durchs Fenster 
                                    den Federwölkchen nachschauen.<br></br>Insekten müssen dabei draußen bleiben, das Fliegennetz vor dem 
                                    Fenster sperrt unbeliebte Mitbewohner aus. An wärmeren Tagen schmeißt du einfach den kleinen, starken 
                                    Ventilator an, der sich per Fernbedienung bequem von überall aus steuern lässt.<br></br>Und wenn du dann 
                                    doch bereit für den Strand bist, schnappst du dir einfach Strandtasche, Strandhandtücher oder Strandzelt 
                                    aus dem Schrank.<br></br>Wird es dir zur Schlafenszeit zu hell, lässt sich das Schlafzimmer durch die 
                                    lichtdichten Vorhänge in komplette Dunkelheit hüllen.
                                     </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default SleepingRoom;