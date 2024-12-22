import { useRef, useState } from 'react'

function Kitchen() {

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
                            src="\assets\flat-img\kitchen-img\kitchen_1.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_2.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_3.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_4.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_5.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_6.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_7.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_8.jpg" alt="" height="350"
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
                            <h1>Kochkunst trifft Gaumenschmauß</h1>
                            <p>Willkommen im Koch- und Backparadies, mit anderen Worten: der Küche. Natürlich kannst du hier 
                                einfach nur Kaffee oder Tee und knusprige Sonntagsbrötchen im Ofen zubereiten. Wenn du magst,
                                kannst du dich aber auch kulinarisch austoben und das umfangreiche Angebot an Accessoires und 
                                Zubehör für die eigene Zubereitung deiner Lieblingsrezepte nutzen. Sowohl Koch- als auch
                                Backbegeisterte kommen hier voll auf ihre Kosten. 
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="\assets\flat-img\kitchen-img\kitchen-winecooler.jpg" alt=""/>
                            </div>
                            <div className="text-to-image">
                                <p>Angefangen bei French Press und Milchaufschäumer für den Kaffeegenuss, über handliche Tools wie
                                    Eislöffel, Backpinsel oder Burgerpresse, bis hin zu Mixer und Backform: hier bleiben keine Wünsche
                                    offen. Ok, bis auf einen - der Melonenlöffel hat es tatsächlich nicht in die Besteckschublade
                                    geschafft.<br></br>Für Strandausflüge kannst du dich mit Aufbewahrungsdosen und wiederverwendbarem 
                                    Kunststoffbesteck eindecken. Für den perfekten Weingenuss, egal ob drinnen oder draußen, gibt's
                                    nicht nur passende Weingläser, sondern auch den Weinkühler mit Leuchfunktion. Ideal für laue
                                    Sommerabende auf dem Dach.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="\assets\flat-img\kitchen-img\kitchen-coffee.jpg" alt="" />
                            </div>
                            <div className="text-to-image">
                                <p>Damit du für deine Koch- und Backabenteuer bestens gewappnet bist, stehen dir nicht nur Salz und 
                                    Pfeffer, sondern auch eine Reihe an weiteren Bio-Gewürzen sowie Bio-Bratöl zur Verfügung.
                                    <br></br>Für das morgendliche Heißgetränk kannst du zwischen Bio-Tee und Bio-Kaffee frei wählen.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default Kitchen;