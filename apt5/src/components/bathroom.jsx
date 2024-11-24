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
                                <p>Dank des Doppelwaschbeckens kommt man sich morgens garantiert nicht in die Quere. Das extra Gäste-WC 
                                    bietet auch mehreren Personen genug Raum für die Morgentoilette. Mit den Naturkosmetika kannst du 
                                    den letzten Rest Strandsand abwaschen. Brauchst du es an kälteren Tagen kuschelig warm, sorgt die 
                                    Fußbodenheizung für die richtige Temperatur.
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