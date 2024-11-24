import { useRef, useState } from 'react'

function LivingRoom() {

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
                            src="" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="" alt="" height="350"
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
                            <h1>Garantiert gemütlich</h1>
                            <p>Warme Farbtöne, Holzmöbel und ein Hauch von Leder - kommen wir zum wohl charismatischsten Zimmer 
                                der Wohnung. Im Wohnzimmer lassen sich klassische Eleganz mit Spieltrieb und Entertainment verbinden. 
                                Ob gemütliche Stunden zu zweit bei einem Gläschen Wein und guter Musik oder dem Regenwetter beim 
                                Krimispiel trotzen. Oder doch den Abend nach der Fahrradtour beim Schachduell ausklingen lassen? 
                                Langweilig wird's hier definitiv nicht.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="" alt=""/>
                            </div>
                            <div className="text-to-image">
                                <p>Die liebevoll zusammengestellte Bibliothek mit alten Schmökern macht nicht nur optisch was her, 
                                    sie beherbergt auch den einen oder anderen Klassiker. Und wann hat man schon Zeit, diesen zu 
                                    lesen &mdash; im Urlaub natürlich! Gut geeignet als Strandlektüre oder bei schlechtem Wetter 
                                    die Füße hochlegend auf dem Chesterfield Sofa.<br></br>Wenn's richtig heimelig werden soll, knips' 
                                    dir einfach die LED-Kerzen an, die den Raum nochmal gemütlicher machen und für die richtige 
                                    Atmosphäre sorgen.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="" alt="" />
                            </div>
                            <div className="text-to-image">
                                <p>Für Spiel, Spaß und Beschäftigung sorgen gleich eine ganze Reihe an Gesellschaftsspielen für alle 
                                    Altersklassen. Auch die Jüngsten kommen hier nicht zu kurz und können sich mit Legosteinen, 1000-
                                    Teile Puzzle oder Karten- und Fragespielen die Zeit vertreiben. Also einfach mal Schränke und 
                                    Schubladen durchstöbern, da lässt sich so einiges finden.<br></br>Für den individuellen Klang sorgt 
                                    der kleine schwarze Lautsprecher, der sich per App bedienen und mit Radio- oder Streaming-Musik 
                                    füttern lässt.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default LivingRoom;