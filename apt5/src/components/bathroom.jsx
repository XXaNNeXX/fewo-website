import { useRef, useState } from 'react'

function Bathroom() {

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
                            src="\assets\flat-img\bath-room-img\bathroom_1.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_2.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_3.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_4.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_5.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_6.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\bath-room-img\bathroom_7.jpg" alt="" height="350"
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
                            <h1>Wellness Oase</h1>
                            <p>Für alle, die gerne viel Zeit im Bad verbringen: hier hast du den passenden Ort, um neben dem 
                                inneren auch für dein äußeres Wohlbefinden zu sorgen. Und weil's einfach mehr Spaß macht, geht 
                                auch hier nichts ohne den extra Entertainment-Kick mit TV im Spiegel. Da ist sogar Zähneputzen 
                                plötzlich nicht mehr langweilig.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="" alt=""/>
                            </div>
                            <div className="text-to-image">
                                <p>Dank des Doppelwaschbeckens kommt man sich morgens absolut nicht in die Quere. Der breite Spiegel 
                                    bietet mit großflächiger LED-Beleuchtung das passende Licht für die morgendliche oder abendliche
                                    Stimmung.<br></br>Für das perfekte Duscherlebnis stehen dir Naturkosmetika zur Verfügung, mit denen 
                                    sich auch das letzte bisschen Strandsand abwaschen lässt. Und brauchst du es an kälteren Tagen
                                    kuschelig warm, sorgt die Fußbodenheizung für die richtige Temperatur.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="\assets\flat-img\bath-room-img\bathroom-frame.jpg" alt=""/>
                            </div>
                            <div className="text-to-image">
                                <p>Das extra Gäste-WC bietet auch mehreren Personen genug Raum für die Morgentoilette. Mit den 
                                    Originalaufnahmen einiger Details des Wismarer Hafens kannst du dich für deinen nächsten
                                    Ausflug in Stimmung bringen. Die fotografierten Objekte kannst du übrigens im Willkommensbuch 
                                    auf der Karte nachschlagen, wenn du sie bei einer kleinen Hafentour wiederentdecken möchtest.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default Bathroom;