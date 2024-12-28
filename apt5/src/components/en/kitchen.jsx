import { useRef, useState } from 'react'

function KitchenEn() {

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
                            src="\assets\flat-img\kitchen-img\kitchen_1.jpg" alt="kitchen" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_2.jpg" alt="kitchen" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_3.jpg" alt="kitchen" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_4.jpg" alt="kitchen" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_5.jpg" alt="kitchen" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_6.jpg" alt="kitchen" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_7.jpg" alt="kitchen" height="350"
                            onClick={handleImageClick}/>
                        <img className="scroll-image" 
                            src="\assets\flat-img\kitchen-img\kitchen_8.jpg" alt="kitchen" height="350"
                            onClick={handleImageClick}/>
                    </div>
                    <div ref={modalRef} id="myModal" className="modal">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img ref={modalImgRef} className="modal-content" alt="kitchen pictures" id="img01" src={modalImageSrc} />
                    </div>
                </section>
                <div className="content">
                    <article>
                        <div className="text">
                            <h1>The art of cookery meets culinary delights</h1>
                            <p>Welcome to the cooking and baking paradise, in other words: the kitchen. Of course, you 
                                can simply prepare coffee or tea and crispy Sunday rolls in the oven here. But if you 
                                like, you can also let off steam in the kitchen and use the extensive range of 
                                accessories and equipment to prepare your own favourite recipes. Both cooking and 
                                baking enthusiasts will get their money's worth here. 
                            </p>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper left'>
                                <img src="\assets\flat-img\kitchen-img\kitchen-winecooler.jpg" alt="winecooler"/>
                            </div>
                            <div className="text-to-image">
                                <p>From French presses and milk frothers for coffee, to handy tools such as ice cream 
                                    spoons, pastry brushes and burger presses, through to blenders and baking tins: nothing 
                                    is left to be desired here. Ok, except for one - the melon spoon didn't actually make it 
                                    into the cutlery drawer.<br></br>For trips to the beach, you can stock up on storage 
                                    containers and reusable plastic cutlery. For perfect wine enjoyment, whether indoors or 
                                    outdoors, there are not only matching wine glasses, but also a wine cooler with a light 
                                    function. Ideal for balmy summer evenings on the roof.
                                </p>
                            </div>
                        </div>
                        <div className='text-image-container'>
                            <div className='image-wrapper right'>
                                <img src="\assets\flat-img\kitchen-img\kitchen-coffee.jpg" alt="coffee" />
                            </div>
                            <div className="text-to-image">
                                <p>So that you are well prepared for your cooking and baking adventures, you not only 
                                    have salt and pepper at your disposal, but also a range of other organic spices and 
                                    organic frying oil<br></br>For your morning hot drink, you can choose between organic 
                                    tea and organic coffee.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default KitchenEn;