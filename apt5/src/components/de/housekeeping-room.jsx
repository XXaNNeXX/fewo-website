import { useRef, useState } from 'react'

function HousekeepingRoom() {

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
                            src="/assets/flat-img/housekeeping-room-img/housekeeping_1.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/housekeeping-room-img/housekeeping_2.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/housekeeping-room-img/housekeeping_3.jpg" alt="" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="/assets/flat-img/housekeeping-room-img/housekeeping_4.jpg" alt="" height="350"
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
                            <h1>Rundum versorgt</h1>
                            <p>Auch im Urlaub möchte man nichts missen und alles zur Hand haben, was man eben gerade
                                so benötigt. Im Hauswirtschaftsraum findest du all die Helferlein, mit denen sich im
                                Handumdrehen kleine Herausforderungen meistern lassen. Ob Wollmäusen den Kampf ansagen,
                                LED-Kerzen wieder zum Leuchten bringen oder die Lieblingssommersachen von Falten befreien.
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="/assets/flat-img/housekeeping-room-img/housekeeping-equipment.jpg" alt=""/>
                            </div>
                            <div className="text-to-image">
                                <p>Neben den Klassikern Bügeleisen, Bügelbrett und Staubsauger wirst du hier noch einige 
                                    weitere handliche Utensilien vorfinden, die dir deinen Urlaubsalltag retten können: 
                                    <ul>
                                        <li>Bio-Color- und Vollwaschmittel sowie Weichspüler</li>
                                        <li>Wäscheklammern und Wäscheständer</li>
                                        <li>Wäschenetze und -korb</li>
                                        <li>Handfeger und -schaufel</li>
                                        <li>Hocker (damit bspw. die Kleinsten auch ans Waschbecken gelangen)</li>
                                        <li>Batterien</li>
                                        <li>Glühbirnen</li>
                                        <li>Bedienungsanleitungen</li>
                                        <li>Schraubgläser (falls du Mitbringsel oder Übriggebliebenes mit nach Hause nehmen
                                            möchtest)
                                        </li>
                                        <li>Sonnenbrillen, Regenschirm, Handyhalter fürs Fahrrad</li>
                                    </ul> 
                                </p>
                            </div>
                        </div>
                        <div className='text'>
                            <p>Du kannst alles nutzen und deinem Bedarf anpassen. Und natürlich hier auch alles 
                                verstauen, was dir sonst in der Wohnung im Weg stehen würde. Die Leinwand für den 
                                Beamer findest du deshalb auch im Hauswirtschaftsraum untergebracht.
                            </p>
                    </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default HousekeepingRoom;