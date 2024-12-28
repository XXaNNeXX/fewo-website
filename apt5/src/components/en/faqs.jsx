import { useState } from "react";

function FAQSEn() {

    const [openParagraphs, setOpenParagraphs] = useState({});

    const toggleParagraph = (index) => {
        setOpenParagraphs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const faqData = [
        {
            question: `How do I get to Wismar and to Apartment 5?`,
            answer: (<>If you are travelling by car from the A20 motorway, take the "Wismar-Mitte" exit.
                        You will then reach Apartment 5 at the roundabout via the second exit.<br></br>
                        By train, you can use either the Deutsche Bahn or ODEG connections. The Flixbus 
                        also stops in Wismar. Central bus station and railway station are located in the 
                        northern part of the old town, from where Apartment 5 is just a 15-minute walk 
                        away.</>),
        },
        {
            question: `Where can I park if I am travelling by car?`,
            answer: (<>Around Apartment 5 there are several possibilities to park your car:
                    <br/><br/>
                    Free of charge: 
                    <br/>
                    <ul>
                        <li>Street Vogelsang; 3-5 walking minutes</li>
                        <li>Car park Vogelsang, edge of Goethestraße; 6 walking minutes</li>
                        <li>Street Turnerweg; 5-7 walking minutes</li>
                        <li>Car park An der Hochbrücke; 12 walking minutes</li>
                        <li>Car park Schiffbauerdamm; 15 walking minutes</li>
                        <li>Car park Lübsche Straße Wismar (Lübsche Straße 105); 15 walking minutes</li>
                    </ul>
                    Chargeable: 
                    <br/>
                    <ul>
                        <li>Car park Turmstraße (Dr.-Leber-Str. 9); 8 walking minutes; (15 Mar - 31 Oct 4€ daily fee, otherwise 1€, cash and card payment)</li>
                        <li>Multi-storey car park Altstadt/Hafen (Stockholmer Str. 8); 18 walking minutes</li>
                    </ul></>)
        },
        {
            question: `When are check-in and check-out?`,
            answer: (<>Check-in is possible between 4 pm and 10 pm. If you want to arrive after 10 pm, 
                        please contact the hostess via Airbnb so that you can check in later.<br></br>You 
                        should have checked out by 11 am.</>)
        },
        {
            question: `Is there a lift to the flat?`,
            answer: `As Apartment 5 is located in an old building dating back to 1902, there is no lift. A bit 
                    of stair climbing is necessary here. The view is all the more worth it.`
        },
        {
            question: `Do I need to bring towels etc.?`,
            answer: (<>No, you don't have to. Towels, bed linen, shower gel & shampoo, soap and toilet 
                        paper are included in the booking price, as you would expect from a hotel, and will 
                        be waiting for you in the flat when you arrive.<br></br>However, you can of course 
                        still bring your favourite towel from home if you wish.</>)
        },
        {
            question: `What other facilities are available in Apartment 5?`,
            answer: (<>You should want for nothing on your holiday. You can use the following equipment in 
                        Apartment 5 at no extra charge: 
                <br/><br/>
                <ul>
                    <li>Hair dryer</li>
                    <li>Bathrobes</li>
                    <li>First aid kit</li>
                    <li>Spare toothbrush</li>
                    <li>Earplugs</li>
                    <li>Washing powder & fabric softener</li>
                    <li>Clothes horse & clothes pegs</li>
                    <li>Iron & ironing board</li>
                    <li>Coffee, Tea</li>
                    <li>Salt, pepper, spices</li>
                    <li>Frying oil</li>
                    <li>Projector & screen</li>
                    <li>Playstation (PS4) incl. games</li>
                    <li>Board games, Lego</li>
                    <li>Crayons & colours</li>
                    <li>Books</li>
                    <li>Sonos speaker</li>
                    <li>Beach tent & sunbeds</li>
                    <li>Picnic blanket</li>
                    <li>Beach towels</li>
                    <li>Beach & cooler bag</li>
                    <li>Fans</li>
                </ul></>)
        },
        {
            question: `Does it get very warm on the top floor in summer?`,
            answer: (<>It will definitely be a little warmer than on the ground floor. The poorer insulation 
                        in old buildings actually has the advantage in summer that the internal heat is 
                        released more quickly when the outside temperature is cooler. This often simply takes 
                        much longer in well-insulated buildings. This means that the heat does not build up too
                        much in old buildings.<br></br>You also have fans at your disposal that you can use on warmer 
                        days. The bedroom faces north and is therefore the coolest place in the flat.</>)
        },
        {
            question: `Can I stay in Apartment 5 with a baby?`,
            answer: `Even the smallest citizens of the world are welcome in Apartment 5. However, please note 
                    that the flat does not have any equipment for babies or small children and does not include 
                    any safety measures. However, you can bring everything your baby or child needs with you and 
                    that you are able to carry upstairs to the top floor.`
        },
    ];

    return (
        <div className="content">
            <article>
                <h1>FAQs</h1>
                {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleParagraph(index)}>
                        <h2>
                            <span className="icon">{openParagraphs[index] ? "-" : "+"}</span>
                            {faq.question}
                        </h2>
                    </div>
                    {openParagraphs[index] && (
                        <p className="faq-answer">
                            {faq.answer}
                        </p>
                    )}
                </div>
            ))}
            </article>
        </div>
    )
};

export default FAQSEn;